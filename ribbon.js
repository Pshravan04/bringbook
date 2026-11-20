/**
 * BRINGBOOK — Signature 3D Green Ribbon Controller
 * Built with GSAP 3.12 & ScrollTrigger
 * 
 * Drives the continuous flowing 3D satin ribbon across all 7 scenes:
 * Scene 1: Hero Section (cradles behind books & headline, 100% in background)
 * Scene 2: Why Bringbook / Story (sweeps behind heading & reader photo)
 * Scene 3: Books & Categories (weaves across 16 categories & behind all 4 shelf cards)
 * Scene 4: Benefits & Value Stack (frames the outside perimeter behind the value card)
 * Scene 5: Final CTA & Checkout (embraces the checkout terminal, flows toward FAQ)
 * Scene 6: FAQ Section (sweeps behind FAQ accordion cards)
 * Scene 7: Footer (flows behind the newsletter card & under book cluster to finish in a flourish)
 */

(function () {
  'use strict';

  function initRibbonAnimation() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger is not loaded.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /**
     * Helper to measure SVG path length and prime strokeDasharray
     */
    function primePath(pathEl) {
      if (!pathEl || typeof pathEl.getTotalLength !== 'function') return 0;
      try {
        const len = Math.ceil(pathEl.getTotalLength());
        pathEl.style.strokeDasharray = `${len} ${len}`;
        pathEl.style.strokeDashoffset = len;
        return len;
      } catch (err) {
        return 0;
      }
    }

    // ══════════════════════════════════════════════════
    // SCENE 1 — HERO SECTION (100% Background)
    // ══════════════════════════════════════════════════
    const heroBack = document.getElementById('ribbonHeroBack');
    const heroBackSheen = document.getElementById('ribbonHeroBackSheen');
    const heroSection = document.getElementById('hero');

    const lenHeroBack = primePath(heroBack);
    primePath(heroBackSheen);

    if (heroSection && lenHeroBack > 0) {
      if (prefersReducedMotion) {
        if (heroBack) heroBack.style.strokeDashoffset = '0';
        if (heroBackSheen) heroBackSheen.style.strokeDashoffset = '0';
      } else {
        // Initial Cinematic Entrance: Ribbon glides across the hero stage on page load
        gsap.to([heroBack, heroBackSheen], {
          strokeDashoffset: lenHeroBack * 0.15,
          duration: 1.8,
          ease: "power2.out",
          delay: 0.2
        });

        // Scroll Scrub: As user scrolls down hero, the ribbon completes its path into Scene 2
        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom 15%",
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        });

        heroTl.to([heroBack, heroBackSheen], {
          strokeDashoffset: 0,
          ease: "none"
        }, 0);

        heroTl.to(".aura-hero", {
          y: 40,
          scale: 1.12,
          opacity: 0.95,
          ease: "none"
        }, 0);
      }
    }

    // ══════════════════════════════════════════════════
    // SCENE 2 — WHY BRINGBOOK / STORY
    // ══════════════════════════════════════════════════
    const storyPath = document.getElementById('ribbonStoryPath');
    const storySheen = document.getElementById('ribbonStorySheen');
    const storySection = document.getElementById('story');
    const lenStory = primePath(storyPath);
    primePath(storySheen);

    if (storySection && lenStory > 0) {
      if (prefersReducedMotion) {
        if (storyPath) storyPath.style.strokeDashoffset = '0';
        if (storySheen) storySheen.style.strokeDashoffset = '0';
      } else {
        const storyTl = gsap.timeline({
          scrollTrigger: {
            trigger: storySection,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        });

        storyTl.fromTo([storyPath, storySheen],
          { strokeDashoffset: lenStory },
          { strokeDashoffset: 0, ease: "none" }
        );

        storyTl.fromTo(".aura-story",
          { scale: 0.75, opacity: 0.35 },
          { scale: 1.15, opacity: 0.85, ease: "none" },
          0
        );
      }
    }

    // ══════════════════════════════════════════════════
    // SCENE 3 — BOOKS & CATEGORIES (Subtle Ambient Glow per Master Prompt Section 8)
    // The oversized ribbon in this section was intentionally removed to keep the
    // digital library explorer pristine, readable, and editorial.
    // ══════════════════════════════════════════════════

    // ══════════════════════════════════════════════════
    // SCENE 4 — VALUE STACK & BENEFITS (100% Background Framing)
    // Sweeps behind the header and frames the outer margins of the value card
    // ══════════════════════════════════════════════════
    const valPath = document.getElementById('ribbonValuePath');
    const valSheen = document.getElementById('ribbonValueSheen');
    const valSection = document.querySelector('.value-stack-section');
    const lenVal = primePath(valPath);
    primePath(valSheen);

    if (valSection && lenVal > 0) {
      if (prefersReducedMotion) {
        if (valPath) valPath.style.strokeDashoffset = '0';
        if (valSheen) valSheen.style.strokeDashoffset = '0';
      } else {
        const valTl = gsap.timeline({
          scrollTrigger: {
            trigger: valSection,
            start: "top 85%",
            end: "bottom 35%",
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        });

        valTl.fromTo([valPath, valSheen],
          { strokeDashoffset: lenVal },
          { strokeDashoffset: 0, ease: "none" }
        );

        valTl.fromTo(".aura-value",
          { scale: 0.75, opacity: 0.3 },
          { scale: 1.15, opacity: 0.85, ease: "none" },
          0
        );
      }
    }

    // ══════════════════════════════════════════════════
    // SCENE 5 — FINAL CTA & CHECKOUT (Frames terminal strictly in background)
    // ══════════════════════════════════════════════════
    const ctaPath = document.getElementById('ribbonCtaPath');
    const ctaSheen = document.getElementById('ribbonCtaSheen');
    const ctaSection = document.getElementById('access');
    const lenCta = primePath(ctaPath);
    primePath(ctaSheen);

    if (ctaSection && lenCta > 0) {
      if (prefersReducedMotion) {
        if (ctaPath) ctaPath.style.strokeDashoffset = '0';
        if (ctaSheen) ctaSheen.style.strokeDashoffset = '0';
      } else {
        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 85%",
            end: "bottom 40%",
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        });

        ctaTl.fromTo([ctaPath, ctaSheen],
          { strokeDashoffset: lenCta },
          { strokeDashoffset: 0, ease: "none" }
        );

        ctaTl.fromTo(".aura-cta",
          { scale: 0.8, opacity: 0.3 },
          { scale: 1.18, opacity: 0.85, ease: "none" },
          0
        );
      }
    }

    // ══════════════════════════════════════════════════
    // SCENE 6 — FAQ SECTION (Weaves along background margin, flows into footer)
    // ══════════════════════════════════════════════════
    const faqPath = document.getElementById('ribbonFaqPath');
    const faqSheen = document.getElementById('ribbonFaqSheen');
    const faqSection = document.getElementById('faq');
    const lenFaq = primePath(faqPath);
    primePath(faqSheen);

    if (faqSection && lenFaq > 0) {
      if (prefersReducedMotion) {
        if (faqPath) faqPath.style.strokeDashoffset = '0';
        if (faqSheen) faqSheen.style.strokeDashoffset = '0';
      } else {
        const faqTl = gsap.timeline({
          scrollTrigger: {
            trigger: faqSection,
            start: "top 85%",
            end: "bottom 35%",
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        });

        faqTl.fromTo([faqPath, faqSheen],
          { strokeDashoffset: lenFaq },
          { strokeDashoffset: 0, ease: "none" }
        );

        faqTl.fromTo(".aura-faq",
          { scale: 0.75, opacity: 0.3 },
          { scale: 1.15, opacity: 0.85, ease: "none" },
          0
        );
      }
    }

    // ══════════════════════════════════════════════════
    // SCENE 7 — FOOTER & NEWSLETTER CARD (Completes journey right to the bottom)
    // ══════════════════════════════════════════════════
    const footerPath = document.getElementById('ribbonFooterPath');
    const footerSheen = document.getElementById('ribbonFooterSheen');
    const footerSection = document.querySelector('.site-footer');
    const lenFooter = primePath(footerPath);
    primePath(footerSheen);

    if (footerSection && lenFooter > 0) {
      if (prefersReducedMotion) {
        if (footerPath) footerPath.style.strokeDashoffset = '0';
        if (footerSheen) footerSheen.style.strokeDashoffset = '0';
      } else {
        const footerTl = gsap.timeline({
          scrollTrigger: {
            trigger: footerSection,
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        });

        footerTl.fromTo([footerPath, footerSheen],
          { strokeDashoffset: lenFooter },
          { strokeDashoffset: 0, ease: "none" }
        );

        footerTl.fromTo(".aura-footer",
          { scale: 0.8, opacity: 0.3 },
          { scale: 1.15, opacity: 0.85, ease: "none" },
          0
        );
      }
    }

    // ══════════════════════════════════════════════════
    // AMBIENT LIVING WAVE UNDULATION
    // Gives the ambient background glow a gentle breathing pulse
    // ══════════════════════════════════════════════════
    if (!prefersReducedMotion) {
      gsap.to(".ribbon-glow-aura", {
        scale: 1.06,
        opacity: 0.9,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Refresh triggers once all assets/images are settled
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRibbonAnimation);
  } else {
    initRibbonAnimation();
  }
})();
