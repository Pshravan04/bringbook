/**
 * BRINGBOOK — checkout.js
 * Complete production-ready purchase flow with Razorpay integration.
 *
 * FEATURES:
 * 1. Form validation (Name, Email, 10-digit Indian WhatsApp Number)
 * 2. Instant prefill into Razorpay standard checkout modal
 * 3. Preload & lazy-loading of Razorpay script
 * 4. Automatic Demo / Test Mode simulation if key is not yet configured
 * 5. Complete order persistence (localStorage & sessionStorage)
 * 6. GA4 & Meta Pixel purchase tracking
 * 7. Seamless redirection to success.html with personalized credentials
 */

'use strict';

/* ═══════════════════════════════════════════════
   CONFIGURATION
   Replace RAZORPAY_KEY with your live key: rzp_live_...
   Replace DRIVE_FOLDER_URL with your actual folder link
═══════════════════════════════════════════════ */
const CONFIG = {
  // Razorpay Key ID from https://dashboard.razorpay.com/app/keys
  // Leave as placeholder for instant demo testing
  RAZORPAY_KEY: 'rzp_live_XXXXXXXXXXXXXXXX',

  // Master Google Drive library link for buyers
  DRIVE_FOLDER_URL: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',

  // Product metadata
  PRODUCT_NAME: 'Bringbook – 12,000+ eBook Master Collection',
  AMOUNT_INR: 199,
  AMOUNT_PAISE: 19900, // ₹199 * 100

  // Brand metadata
  BUSINESS_NAME: 'Bringbook',
  SUPPORT_EMAIL: 'support@bringbook.in',
  SUPPORT_WHATSAPP: '919XXXXXXXXX',

  // Redirect destination
  SUCCESS_PAGE: 'success.html'
};

/* ═══════════════════════════════════════════════
   UTILITY HELPERS
═══════════════════════════════════════════════ */
function getUTM(param) {
  try {
    return sessionStorage.getItem(param) || new URLSearchParams(window.location.search).get(param) || '';
  } catch (_) {
    return '';
  }
}

function isPlaceholderKey(key) {
  return !key || key.includes('XXXX') || key.trim() === '';
}

/* ═══════════════════════════════════════════════
   DOM ELEMENTS
═══════════════════════════════════════════════ */
let formEl, nameInput, emailInput, phoneInput, submitBtn, statusEl, checkoutBox;

function initDOMElements() {
  formEl      = document.getElementById('checkout-form');
  nameInput   = document.getElementById('cust-name');
  emailInput  = document.getElementById('cust-email');
  phoneInput  = document.getElementById('cust-phone');
  submitBtn   = document.getElementById('buy-btn');
  statusEl    = document.getElementById('checkout-status');
  checkoutBox = document.getElementById('checkout-box');
}

/* ═══════════════════════════════════════════════
   DRAFT RECOVERY (preserves user input)
═══════════════════════════════════════════════ */
function restoreDraft() {
  try {
    const raw = sessionStorage.getItem('bringbook_checkout_draft') || sessionStorage.getItem('divy_checkout_draft');
    if (!raw) return;
    const draft = JSON.parse(raw);
    if (draft.name && nameInput)   nameInput.value  = draft.name;
    if (draft.email && emailInput) emailInput.value = draft.email;
    if (draft.phone && phoneInput) phoneInput.value = draft.phone;
  } catch (_) {}
}

function saveDraft() {
  try {
    const draft = {
      name:  nameInput  ? nameInput.value.trim()  : '',
      email: emailInput ? emailInput.value.trim() : '',
      phone: phoneInput ? phoneInput.value.trim() : ''
    };
    sessionStorage.setItem('bringbook_checkout_draft', JSON.stringify(draft));
  } catch (_) {}
}

/* ═══════════════════════════════════════════════
   FORM VALIDATION
═══════════════════════════════════════════════ */
function clearErrors() {
  [nameInput, emailInput, phoneInput].forEach(inp => {
    if (inp) inp.classList.remove('input-error');
  });
  if (statusEl) {
    statusEl.className = 'checkout-status';
    statusEl.textContent = '';
    statusEl.style.display = 'none';
  }
}

function showError(message, focusInput) {
  if (statusEl) {
    statusEl.className = 'checkout-status error';
    statusEl.textContent = message;
    statusEl.style.display = 'block';
  }
  if (focusInput) {
    focusInput.classList.add('input-error');
    focusInput.focus();
  }
}

function showInfo(message) {
  if (statusEl) {
    statusEl.className = 'checkout-status info';
    statusEl.textContent = message;
    statusEl.style.display = 'block';
  }
}

function validateCustomerData() {
  clearErrors();

  const name  = nameInput  ? nameInput.value.trim()  : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim().replace(/\D/g, '') : '';

  if (!name || name.length < 2) {
    showError('Please enter your full name for your membership record.', nameInput);
    return null;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showError('Please enter a valid email address (where your Drive link will be sent).', emailInput);
    return null;
  }

  // 10-digit Indian phone number
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone || !phoneRegex.test(phone)) {
    showError('Please enter a valid 10-digit WhatsApp number (starting with 6, 7, 8, or 9).', phoneInput);
    return null;
  }

  saveDraft();
  return { name, email, phone };
}

/* ═══════════════════════════════════════════════
   BUTTON STATE
═══════════════════════════════════════════════ */
function setButtonLoading(loading, label) {
  if (!submitBtn) return;
  const textEl = submitBtn.querySelector('.btn-pay-text');
  if (loading) {
    submitBtn.disabled = true;
    if (textEl) textEl.textContent = label || 'Connecting to payment gateway...';
  } else {
    submitBtn.disabled = false;
    if (textEl) textEl.textContent = `Proceed to Pay ₹${CONFIG.AMOUNT_INR}`;
  }
}

/* ═══════════════════════════════════════════════
   RAZORPAY SCRIPT LOADER
═══════════════════════════════════════════════ */
let rzpLoadingPromise = null;

function loadRazorpaySDK() {
  if (window.Razorpay) return Promise.resolve();
  if (rzpLoadingPromise) return rzpLoadingPromise;

  rzpLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Razorpay payment SDK. Check your internet connection.'));
    document.head.appendChild(script);
  });

  return rzpLoadingPromise;
}

/* ═══════════════════════════════════════════════
   ORDER COMPLETION & REDIRECTION
═══════════════════════════════════════════════ */
function handlePaymentSuccess(response, customer) {
  const paymentId = response.razorpay_payment_id || ('pay_' + Math.random().toString(36).substring(2, 14));

  const orderRecord = {
    paymentId:   paymentId,
    orderId:     response.razorpay_order_id || '',
    name:        customer.name,
    email:       customer.email,
    phone:       customer.phone,
    amount:      CONFIG.AMOUNT_INR,
    currency:    'INR',
    driveLink:   CONFIG.DRIVE_FOLDER_URL,
    timestamp:   new Date().toISOString(),
    displayDate: new Date().toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    })
  };

  // Persist order details
  try {
    sessionStorage.setItem('bringbook_latest_order', JSON.stringify(orderRecord));
    localStorage.setItem('bringbook_latest_order', JSON.stringify(orderRecord));
  } catch (_) {}

  // Trigger Analytics events
  trackPurchaseEvent(orderRecord);

  // Clear draft
  try {
    sessionStorage.removeItem('bringbook_checkout_draft');
    sessionStorage.removeItem('divy_checkout_draft');
  } catch (_) {}

  // Construct success page redirect with parameters
  const redirectUrl = new URL(CONFIG.SUCCESS_PAGE, window.location.href);
  redirectUrl.searchParams.set('pid',   orderRecord.paymentId);
  redirectUrl.searchParams.set('name',  orderRecord.name);
  redirectUrl.searchParams.set('email', orderRecord.email);
  redirectUrl.searchParams.set('phone', orderRecord.phone);

  window.location.href = redirectUrl.toString();
}

function trackPurchaseEvent(order) {
  // Google Analytics 4
  if (typeof gtag === 'function') {
    gtag('event', 'purchase', {
      transaction_id: order.paymentId,
      value: order.amount,
      currency: order.currency,
      items: [{
        item_id:   'bringbook-12k',
        item_name: CONFIG.PRODUCT_NAME,
        price:     order.amount,
        quantity:  1
      }]
    });
  }

  // Meta Pixel
  if (typeof fbq === 'function') {
    fbq('track', 'Purchase', {
      value: order.amount,
      currency: order.currency,
      content_ids: ['bringbook-12k'],
      content_name: CONFIG.PRODUCT_NAME,
      content_type: 'product'
    });
  }
}

/* ═══════════════════════════════════════════════
   PAYMENT EXECUTION
═══════════════════════════════════════════════ */
async function initiateCheckout(customer) {
  setButtonLoading(true, 'Initializing payment...');

  // DEMO MODE: If key is placeholder, simulate successful checkout for instant testing
  if (isPlaceholderKey(CONFIG.RAZORPAY_KEY)) {
    showInfo('Demo Mode: Simulating secure payment verification...');
    setTimeout(() => {
      handlePaymentSuccess({
        razorpay_payment_id: 'pay_demo_' + Math.random().toString(36).substring(2, 10).toUpperCase()
      }, customer);
    }, 1200);
    return;
  }

  // LIVE / TEST RAZORPAY MODE
  try {
    await loadRazorpaySDK();
  } catch (err) {
    setButtonLoading(false);
    showError(err.message || 'Unable to load payment gateway. Please check your connection.');
    return;
  }

  const options = {
    key: CONFIG.RAZORPAY_KEY,
    amount: CONFIG.AMOUNT_PAISE,
    currency: 'INR',
    name: CONFIG.BUSINESS_NAME,
    description: CONFIG.PRODUCT_NAME,
    image: 'images/bringbook-icon.svg',

    prefill: {
      name: customer.name,
      email: customer.email,
      contact: '91' + customer.phone
    },

    notes: {
      product: CONFIG.PRODUCT_NAME,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_whatsapp: customer.phone,
      utm_source: getUTM('utm_source'),
      utm_medium: getUTM('utm_medium'),
      utm_campaign: getUTM('utm_campaign')
    },

    theme: {
      color: '#0F3D2E', // Brand deep forest green
      backdrop_color: 'rgba(11, 46, 34, 0.7)'
    },

    modal: {
      ondismiss: function () {
        setButtonLoading(false);
        showInfo('Payment window closed. Your details are saved — click below when you are ready to complete.');
      }
    },

    handler: function (response) {
      handlePaymentSuccess(response, customer);
    }
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (resp) {
      setButtonLoading(false);
      const errMsg = resp.error && resp.error.description ? resp.error.description : 'Payment could not be completed. Please try another UPI app or card.';
      showError('Payment failed: ' + errMsg);
    });
    rzp.open();
  } catch (e) {
    setButtonLoading(false);
    showError('Error opening Razorpay checkout. Please verify your Razorpay Key ID in checkout.js.');
    console.error('Razorpay initialization error:', e);
  }
}

/* ═══════════════════════════════════════════════
   GLOBAL CTA HOOK (Scrolls & highlights form)
═══════════════════════════════════════════════ */
function highlightCheckoutForm() {
  if (!checkoutBox) return;
  checkoutBox.classList.add('highlight');
  setTimeout(() => {
    if (nameInput && !nameInput.value) {
      nameInput.focus();
    }
  }, 400);
  setTimeout(() => {
    checkoutBox.classList.remove('highlight');
  }, 2200);
}

/* ═══════════════════════════════════════════════
   INITIALIZATION
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initDOMElements();
  restoreDraft();

  // Save drafts on input
  if (nameInput)  nameInput.addEventListener('input', saveDraft);
  if (emailInput) emailInput.addEventListener('input', saveDraft);
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      // Keep only numbers, max 10
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
      saveDraft();
    });
  }

  // Preload Razorpay SDK when user scrolls near form
  if (checkoutBox) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isPlaceholderKey(CONFIG.RAZORPAY_KEY)) {
        loadRazorpaySDK().catch(() => {});
        observer.disconnect();
      }
    }, { rootMargin: '300px' });
    observer.observe(checkoutBox);
  }

  // Handle Form Submit
  if (formEl) {
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const customer = validateCustomerData();
      if (customer) {
        initiateCheckout(customer);
      }
    });
  }

  // Hook all CTA buttons pointing to #access
  document.querySelectorAll('a[href="#access"], .btn-hero, .sticky-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(highlightCheckoutForm, 300);
    });
  });
});
