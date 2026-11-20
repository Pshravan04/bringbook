/**
 * BRINGBOOK — main.js
 * Editorial Digital Library Explorer (16 Disciplines),
 * Book Search, Detail Drawer, Sticky Bar, Smooth Anchors & Carousel.
 */

'use strict';

/* ═══════════════════════════════════════════════
   COMPLETE 16-DISCIPLINE CATEGORY & BOOK DATA
═══════════════════════════════════════════════ */
const CATEGORIES = {
  business: {
    id: 'business',
    title: 'Business & Startups',
    tagline: 'Blueprints for building, funding, and scaling enduring companies.',
    badge: 'POPULAR FOR FOUNDERS',
    count: '1,840 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3m0 0l7.5-7.5a2.12 2.12 0 1 1 3 3L12 15z"/></svg>`,
    books: [
      {
        title: 'Zero to One',
        author: 'Peter Thiel with Blake Masters',
        desc: 'Notes on startups, how to build monopolies, and creating the future through vertical progress.',
        cover: 'images/cover-zero-to-one.jpg',
        format: 'PDF + EPUB',
        badge: 'Bestseller'
      },
      {
        title: 'The Lean Startup',
        author: 'Eric Ries',
        desc: 'How constant innovation creates radically successful businesses using validated learning.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Classic'
      },
      {
        title: 'Good to Great',
        author: 'Jim Collins',
        desc: 'Why some companies make the leap to enduring greatness and others fail to transition.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Essential'
      },
      {
        title: 'Rework',
        author: 'Jason Fried & David Heinemeier Hansson',
        desc: 'A better, faster, easier way to succeed in business without traditional bureaucracy.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Actionable'
      },
      {
        title: 'The Hard Thing About Hard Things',
        author: 'Ben Horowitz',
        desc: 'Building a business when there are no easy answers from Silicon Valley’s top venture capitalist.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Founders'
      },
      {
        title: 'Blue Ocean Strategy',
        author: 'W. Chan Kim & Renée Mauborgne',
        desc: 'How to create uncontested market space and make the competition completely irrelevant.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Strategy'
      },
      {
        title: 'Built to Last',
        author: 'Jim Collins & Jerry I. Porras',
        desc: 'Successful habits of visionary companies that outlasted generations of market competitors.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Leadership'
      },
      {
        title: 'The E-Myth Revisited',
        author: 'Michael E. Gerber',
        desc: 'Why most small businesses don’t work and what to do about it through systematized operations.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Systems'
      }
    ]
  },
  ai: {
    id: 'ai',
    title: 'AI & Technology',
    tagline: 'Frontier machine intelligence, neural architectures, and computational futures.',
    badge: 'TRENDING IN 2026',
    count: '980 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`,
    books: [
      {
        title: 'AI Superpowers',
        author: 'Kai-Fu Lee',
        desc: 'China, Silicon Valley, and the new world order of deep learning and industrial automation.',
        cover: 'images/cover-ai-superpowers.jpg',
        format: 'PDF + EPUB',
        badge: 'Must Read'
      },
      {
        title: 'Life 3.0: Being Human in AI',
        author: 'Max Tegmark',
        desc: 'How artificial intelligence will affect crime, war, justice, jobs, society, and our human future.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Cosmology'
      },
      {
        title: 'Human Compatible',
        author: 'Stuart Russell',
        desc: 'Artificial intelligence and the fundamental problem of control and human alignment.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Alignment'
      },
      {
        title: 'Deep Learning Basics',
        author: 'Ian Goodfellow & Yoshua Bengio',
        desc: 'Mathematical and conceptual foundations of neural networks, convolutions, and optimization.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Technical'
      },
      {
        title: 'The Master Algorithm',
        author: 'Pedro Domingos',
        desc: 'How the quest for the ultimate learning machine will remake our world and economy.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Algorithms'
      },
      {
        title: 'The Age of AI',
        author: 'Henry A. Kissinger & Eric Schmidt',
        desc: 'And our human future: philosophical, geopolitical, and societal ramifications of synthetic minds.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Geopolitics'
      },
      {
        title: 'The Alignment Problem',
        author: 'Brian Christian',
        desc: 'Machine learning and human values: why teaching computers ethics is our century’s defining test.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Ethics'
      },
      {
        title: 'Superintelligence',
        author: 'Nick Bostrom',
        desc: 'Paths, dangers, and strategies for navigating recursive self-improving cognitive systems.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Foundational'
      }
    ]
  },
  finance: {
    id: 'finance',
    title: 'Finance & Money',
    tagline: 'Mastering personal capital, cash flow, debt elimination, and monetary freedom.',
    badge: 'WEALTH MASTERY',
    count: '1,120 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 6v12"/></svg>`,
    books: [
      {
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        desc: 'Timeless lessons on wealth, greed, and happiness through behavioral economics.',
        cover: 'images/cover-psychology-of-money.jpg',
        format: 'PDF + EPUB',
        badge: 'Essential'
      },
      {
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        desc: 'What the rich teach their kids about money that the poor and middle class do not.',
        cover: 'images/cover-rich-dad.jpg',
        format: 'PDF + EPUB',
        badge: 'All-Time Classic'
      },
      {
        title: 'The Intelligent Investor',
        author: 'Benjamin Graham',
        desc: 'The definitive book on value investing, margin of safety, and emotional discipline.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Buffett Pick'
      },
      {
        title: 'I Will Teach You to Be Rich',
        author: 'Ramit Sethi',
        desc: 'No guilt, no excuses, no BS: a 6-week program that works on automated personal finance.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Practical'
      },
      {
        title: 'Your Money or Your Life',
        author: 'Vicki Robin & Joe Dominguez',
        desc: 'Transforming your relationship with money and achieving financial independence.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'FIRE Movement'
      },
      {
        title: 'The Millionaire Next Door',
        author: 'Thomas J. Stanley & William D. Danko',
        desc: 'The surprising secrets of America’s wealthy: frugality, asset allocation, and discipline.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Data-Driven'
      },
      {
        title: 'The Total Money Makeover',
        author: 'Dave Ramsey',
        desc: 'A proven plan for financial fitness: debt snowballing and emergency reserves.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Debt-Free'
      },
      {
        title: 'One Up On Wall Street',
        author: 'Peter Lynch',
        desc: 'How to use what you already know to make money in the market by America’s #1 fund manager.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Legendary'
      }
    ]
  },
  marketing: {
    id: 'marketing',
    title: 'Marketing & Sales',
    tagline: 'Copywriting, customer psychology, brand storytelling, and high-conversion funnels.',
    badge: 'CLIENT ACQUISITION',
    count: '890 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12A10 10 0 0 0 12 2v10z"/><path d="M12 22A10 10 0 0 0 22 12H12z"/><path d="M12 12L2.5 7.5M12 12l-9.5 4.5"/></svg>`,
    books: [
      {
        title: 'Influence: Psychology of Persuasion',
        author: 'Robert B. Cialdini',
        desc: 'The 6 universal principles of ethical persuasion: reciprocity, scarcity, authority, and consensus.',
        cover: 'images/cover-influence.jpg',
        format: 'PDF + EPUB',
        badge: 'Masterwork'
      },
      {
        title: 'Building a StoryBrand',
        author: 'Donald Miller',
        desc: 'Clarify your message so customers will listen using the classic 7-part hero framework.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Storytelling'
      },
      {
        title: '$100M Offers',
        author: 'Alex Hormozi',
        desc: 'How to make offers so good people feel stupid saying no: value equations and pricing models.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'High-Ticket'
      },
      {
        title: 'Contagious: Why Things Catch On',
        author: 'Jonah Berger',
        desc: 'The secret science behind social transmission, viral sharing, and word-of-mouth phenomena.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Virality'
      },
      {
        title: 'This Is Marketing',
        author: 'Seth Godin',
        desc: 'You can’t be seen until you learn to see: permission marketing for the modern era.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Modern'
      },
      {
        title: 'Ogilvy on Advertising',
        author: 'David Ogilvy',
        desc: 'Candid, timeless advice from the father of modern advertising on headlines, copy, and layout.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Classic'
      },
      {
        title: 'SPIN Selling',
        author: 'Neil Rackham',
        desc: 'Situation, Problem, Implication, Need-Payoff: the research-backed enterprise sales methodology.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'B2B Sales'
      },
      {
        title: 'Never Split the Difference',
        author: 'Chris Voss',
        desc: 'Negotiating as if your life depended on it from a former lead international hostage negotiator.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Negotiation'
      }
    ]
  },
  selfhelp: {
    id: 'selfhelp',
    title: 'Self-Help & Mindset',
    tagline: 'Rewiring belief systems, mental models, and personal resilience.',
    badge: 'TRANSFORMATIVE CLASSICS',
    count: '1,560 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    books: [
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        desc: 'An easy and proven way to build good habits and break bad ones through tiny 1% daily changes.',
        cover: 'images/cover-atomic-habits.jpg',
        format: 'PDF + EPUB',
        badge: '#1 Global Hit'
      },
      {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        desc: 'The landmark philosophy of individual achievement and transmuting desire into physical reality.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Classic'
      },
      {
        title: 'Man’s Search for Meaning',
        author: 'Viktor E. Frankl',
        desc: 'Psychiatrist’s harrowing experience in concentration camps and his theory of logotherapy.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Masterpiece'
      },
      {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        desc: 'A guide to spiritual enlightenment, mindfulness, and freeing consciousness from past and future.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Spiritual'
      },
      {
        title: 'Can’t Hurt Me',
        author: 'David Goggins',
        desc: 'Master your mind and defy the odds: conquering mental barriers through the 40% rule.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Resilience'
      },
      {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        desc: 'A counterintuitive approach to living a good life by choosing what truly matters.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Direct'
      },
      {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        desc: 'How we can learn to fulfill our potential through a growth mindset rather than a fixed one.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Psychology'
      },
      {
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen R. Covey',
        desc: 'Powerful lessons in personal change: proactivity, beginning with the end in mind, and synergy.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Timeless'
      }
    ]
  },
  productivity: {
    id: 'productivity',
    title: 'Productivity & Habits',
    tagline: 'Deep cognitive focus, time management systems, and distraction elimination.',
    badge: 'PEAK PERFORMANCE',
    count: '740 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
    books: [
      {
        title: 'Deep Work',
        author: 'Cal Newport',
        desc: 'Rules for focused success in a distracted world: cultivating rare, high-value cognitive output.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Essential'
      },
      {
        title: 'Getting Things Done (GTD)',
        author: 'David Allen',
        desc: 'The art of stress-free productivity through systematic inbox capture and project horizons.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'System'
      },
      {
        title: 'The ONE Thing',
        author: 'Gary Keller & Jay Papasan',
        desc: 'The surprisingly simple truth behind extraordinary results: domino focus on the lead priority.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Focus'
      },
      {
        title: 'Essentialism',
        author: 'Greg McKeown',
        desc: 'The disciplined pursuit of less: doing only what is vital and eliminating everything else.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Clarity'
      },
      {
        title: 'Make Time',
        author: 'Jake Knapp & John Zeratsky',
        desc: 'How to focus on what matters every day from former design sprint leaders at Google Ventures.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Tactical'
      },
      {
        title: 'Four Thousand Weeks',
        author: 'Oliver Burkeman',
        desc: 'Time management for mortals: philosophical perspective on finite lifespan and choices.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Wisdom'
      },
      {
        title: 'Eat That Frog!',
        author: 'Brian Tracy',
        desc: '21 great ways to stop procrastinating and get more done in less time starting with hardest task.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Action'
      },
      {
        title: 'The Compound Effect',
        author: 'Darren Hardy',
        desc: 'Jumpstart your income, your life, your success through small, unsexy daily decisions.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Momentum'
      }
    ]
  },
  freelancing: {
    id: 'freelancing',
    title: 'Freelancing & Skills',
    tagline: 'Solo agency models, high-ticket consulting, and digital nomad independence.',
    badge: 'HIGH-INCOME CRAFT',
    count: '580 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    books: [
      {
        title: 'Company of One',
        author: 'Paul Jarvis',
        desc: 'Why staying small is the next big thing for business: profitability without headcount scale.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Solo Business'
      },
      {
        title: 'The $100 Startup',
        author: 'Chris Guillebeau',
        desc: 'Reinvent the way you make a living, do what you love, and create a new future on a micro budget.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Micro-Startups'
      },
      {
        title: 'Book Yourself Solid',
        author: 'Michael Port',
        desc: 'The fastest, easiest, and most reliable system for getting more clients than you can handle.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Client Engine'
      },
      {
        title: 'The Freelancer’s Bible',
        author: 'Sara Horowitz',
        desc: 'Everything you need to know to have the career of your dreams on your own contractual terms.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Handbook'
      },
      {
        title: 'The Million-Dollar One-Person Business',
        author: 'Elaine Pofeldt',
        desc: 'Make great money, work the way you like, and have the life you really want with solo operations.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Case Studies'
      },
      {
        title: 'Show Your Work!',
        author: 'Austin Kleon',
        desc: '10 ways to share your creativity and get discovered by building in public organically.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Audience'
      },
      {
        title: 'So Good They Can’t Ignore You',
        author: 'Cal Newport',
        desc: 'Why skills trump passion in the quest for work you love: building career capital.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Mastery'
      },
      {
        title: 'Free Agent Nation',
        author: 'Daniel H. Pink',
        desc: 'The future of working for yourself: independence, agile contracts, and portfolio livelihoods.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Future of Work'
      }
    ]
  },
  investing: {
    id: 'investing',
    title: 'Investing & Stocks',
    tagline: 'Build financial knowledge, understand markets and discover timeless investment strategies.',
    badge: 'LONG-TERM COMPOUNDING',
    count: '680 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    books: [
      {
        title: 'The Little Book of Common Sense Investing',
        author: 'John C. Bogle',
        desc: 'The only way to guarantee your fair share of stock market returns through broad index funds.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Indexing'
      },
      {
        title: 'A Random Walk Down Wall Street',
        author: 'Burton G. Malkiel',
        desc: 'The time-tested strategy for successful investing: efficient markets, risk parity, and asset mixes.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Princeton Classic'
      },
      {
        title: 'Common Stocks and Uncommon Profits',
        author: 'Philip A. Fisher',
        desc: 'The 15-point checklist for evaluating growth businesses and visionary management teams.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Growth'
      },
      {
        title: 'The Warren Buffett Way',
        author: 'Robert G. Hagstrom',
        desc: 'Investment principles of the world’s greatest investor: business, management, and value tenets.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Omaha Method'
      },
      {
        title: 'Security Analysis',
        author: 'Benjamin Graham & David L. Dodd',
        desc: 'The legendary value investing bible that founded modern balance sheet forensics and intrinsic value.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'The Bible'
      },
      {
        title: 'Principles: Life and Work',
        author: 'Ray Dalio',
        desc: 'Systematic decision-making, radical transparency, and the economic machine from Bridgewater founder.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'All-Weather'
      },
      {
        title: 'The Bogleheads’ Guide to Investing',
        author: 'Taylor Larimore & Mel Lindauer',
        desc: 'A delightfully simple, comprehensive guide to low-cost asset allocation and financial peace of mind.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Practical'
      },
      {
        title: 'The Dhandho Investor',
        author: 'Mohnish Pabrai',
        desc: 'The low-risk value method to high returns: heads I win, tails I don’t lose much.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Asymmetric'
      }
    ]
  },
  leadership: {
    id: 'leadership',
    title: 'Leadership & Management',
    tagline: 'High-output management, executive presence, and organizational velocity.',
    badge: 'EXECUTIVE & TEAMS',
    count: '540 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    books: [
      {
        title: 'Leaders Eat Last',
        author: 'Simon Sinek',
        desc: 'Why some teams pull together and others don’t: creating circles of psychological safety.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Culture'
      },
      {
        title: 'Start with Why',
        author: 'Simon Sinek',
        desc: 'How great leaders inspire everyone to take action around the golden circle.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Purpose'
      },
      {
        title: 'High Output Management',
        author: 'Andrew S. Grove',
        desc: 'The legendary Intel CEO’s handbook on managerial leverage, one-on-ones, and production principles.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Silicon Valley Standard'
      },
      {
        title: 'Extreme Ownership',
        author: 'Jocko Willink & Leif Babin',
        desc: 'How U.S. Navy SEALs lead and win: total accountability for everything on your battlefield.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Accountability'
      },
      {
        title: 'Dare to Lead',
        author: 'Brené Brown',
        desc: 'Brave work, tough conversations, and whole hearts in organizations.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Empathy'
      },
      {
        title: 'The Five Dysfunctions of a Team',
        author: 'Patrick Lencioni',
        desc: 'A leadership fable on conquering absence of trust, fear of conflict, and lack of commitment.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Teamwork'
      },
      {
        title: 'Measure What Matters',
        author: 'John Doerr',
        desc: 'How Google, Bono, and the Gates Foundation rock the world with OKRs (Objectives and Key Results).',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'OKRs'
      },
      {
        title: 'Trillion Dollar Coach',
        author: 'Eric Schmidt & Jonathan Rosenberg',
        desc: 'The leadership handbook of Silicon Valley’s Bill Campbell, mentor to Steve Jobs and Larry Page.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Coaching'
      }
    ]
  },
  writing: {
    id: 'writing',
    title: 'Writing & Storytelling',
    tagline: 'Clear prose, dramatic narrative design, and persuasive editorial craft.',
    badge: 'CLEAR THINKING',
    count: '460 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    books: [
      {
        title: 'On Writing Well',
        author: 'William Zinsser',
        desc: 'The classic guide to writing nonfiction: simplicity, clarity, pruning clutter, and finding voice.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Nonfiction'
      },
      {
        title: 'Bird by Bird',
        author: 'Anne Lamott',
        desc: 'Some instructions on writing and life: overcoming perfectionism with terrible first drafts.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Creative Process'
      },
      {
        title: 'The Elements of Style',
        author: 'William Strunk Jr. & E.B. White',
        desc: 'The foundational English handbook: omit needless words, keep related words together.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Grammar Bible'
      },
      {
        title: 'Everybody Writes',
        author: 'Ann Handley',
        desc: 'Your go-to guide to creating ridiculously good content for blogs, social, and newsletters.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Content Strategy'
      },
      {
        title: 'Made to Stick',
        author: 'Chip Heath & Dan Heath',
        desc: 'Why some ideas survive and others die: simple, unexpected, concrete, credible, emotional stories.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Sticky Ideas'
      },
      {
        title: 'Talk Like TED',
        author: 'Carmine Gallo',
        desc: 'The 9 public-speaking secrets of the world’s top minds: passion, multisensory delivery, and timing.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Speaking'
      },
      {
        title: 'On Writing: A Memoir of the Craft',
        author: 'Stephen King',
        desc: 'Part biography, part masterclass from one of the most prolific storytellers in history.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Narrative Craft'
      },
      {
        title: 'Story: Substance, Structure, Style',
        author: 'Robert McKee',
        desc: 'The principles of screenwriting and long-form narrative arcs that captivate audiences.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Screenwriting'
      }
    ]
  },
  career: {
    id: 'career',
    title: 'Career & Jobs',
    tagline: 'Strategic positioning, networking, interview mastery, and career reinvention.',
    badge: 'CAREER ACCELERATION',
    count: '560 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    books: [
      {
        title: 'Never Eat Alone',
        author: 'Keith Ferrazzi',
        desc: 'And other secrets to success, one relationship at a time: genuine generosity in professional networks.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Networking'
      },
      {
        title: 'Range: Why Generalists Triumph',
        author: 'David Epstein',
        desc: 'How conceptual flexibility, late specialization, and broad curiosity outperform narrow specialization.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Generalists'
      },
      {
        title: 'Designing Your Life',
        author: 'Bill Burnett & Dave Evans',
        desc: 'How to build a well-lived, joyful life using Stanford design thinking and rapid prototyping.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Stanford D.School'
      },
      {
        title: 'The Squiggly Career',
        author: 'Helen Tupper & Sarah Ellis',
        desc: 'Ditch the ladder, embrace the opportunity, and navigate non-linear modern work trajectories.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Modern Paths'
      },
      {
        title: 'Cracking the Coding Interview',
        author: 'Gayle Laakmann McDowell',
        desc: '189 programming questions and solutions for software engineers targeting tier-1 tech firms.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Tech Standard'
      },
      {
        title: 'The Alliance',
        author: 'Reid Hoffman, Ben Casnocha, Chris Yeh',
        desc: 'Managing talent in the networked age through tours of duty rather than false lifetime loyalty.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Talent'
      },
      {
        title: 'What Color Is Your Parachute?',
        author: 'Richard N. Bolles',
        desc: 'The practical manual for job-hunters and career-changers updated with modern recruiting realities.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Job Hunting'
      },
      {
        title: 'Who Moved My Cheese?',
        author: 'Spencer Johnson',
        desc: 'An amazing way to deal with change in your work and in your life without paralyzing fear.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Change'
      }
    ]
  },
  psychology: {
    id: 'psychology',
    title: 'Psychology & Human Nature',
    tagline: 'Cognitive biases, evolutionary biology, behavioral instincts, and subconscious triggers.',
    badge: 'HUMAN BEHAVIOR',
    count: '720 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a9 9 0 0 0-9 9c0 3.6 2.1 6.7 5.2 8.1.5.2.8.7.8 1.2V22h6v-1.7c0-.5.3-1 .8-1.2C18.9 17.7 21 14.6 21 11a9 9 0 0 0-9-9z"/><path d="M9 10h.01M15 10h.01M10 14a3.5 3.5 0 0 0 4 0"/></svg>`,
    books: [
      {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        desc: 'System 1 and System 2 thinking, heuristics, prospect theory, and cognitive blind spots.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Nobel Prize'
      },
      {
        title: 'Predictably Irrational',
        author: 'Dan Ariely',
        desc: 'The hidden forces that shape our decisions from free trials to social norms versus market norms.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Behavioral Econ'
      },
      {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        desc: 'Why we do what we do in life and business: the neurological habit loop of cue, routine, reward.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Neuroscience'
      },
      {
        title: 'Quiet: The Power of Introverts',
        author: 'Susan Cain',
        desc: 'In a world that can’t stop talking: why thoughtful solitude drives innovation and deep mastery.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Personality'
      },
      {
        title: 'Blink: Thinking Without Thinking',
        author: 'Malcolm Gladwell',
        desc: 'The power of thin-slicing and instant impressions: when rapid intuition outperforms deliberate analysis.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Intuition'
      },
      {
        title: 'Flow: Optimal Experience',
        author: 'Mihaly Csikszentmihalyi',
        desc: 'The state of complete immersion and peak enjoyment when challenges match high skill level.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Peak State'
      },
      {
        title: 'Incognito: Lives of the Brain',
        author: 'David Eagleman',
        desc: 'Exploring the massive neurological machinery operating entirely beneath conscious awareness.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Brain Science'
      },
      {
        title: 'Stumbling on Happiness',
        author: 'Daniel Gilbert',
        desc: 'Why the human imagination is a terrible forecaster of what will actually bring us joy.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Wellbeing'
      }
    ]
  },
  philosophy: {
    id: 'philosophy',
    title: 'Philosophy & Wisdom',
    tagline: 'Stoicism, Eastern principles, ethics, and timeless frameworks for tranquility.',
    badge: 'TIMELESS FRAMEWORKS',
    count: '610 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    books: [
      {
        title: 'Meditations',
        author: 'Marcus Aurelius',
        desc: 'Private diary of Rome’s philosopher-emperor on duty, serenity, mortality, and emotional control.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Stoic Classic'
      },
      {
        title: 'Letters from a Stoic',
        author: 'Seneca',
        desc: 'Epistles on friendship, wealth, grief, resilience, and making the best use of our finite hours.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Stoic Wisdom'
      },
      {
        title: 'The Daily Stoic',
        author: 'Ryan Holiday & Stephen Hanselman',
        desc: '366 meditations on wisdom, perseverance, and the art of living translated from original texts.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Daily Practice'
      },
      {
        title: 'The Obstacle Is the Way',
        author: 'Ryan Holiday',
        desc: 'The ancient art of turning adversity into triumph drawn from Stoic Marcus Aurelius.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Modern Stoicism'
      },
      {
        title: 'Tao Te Ching',
        author: 'Lao Tzu',
        desc: 'The 81 verses on the Way of effortless action (wu wei), harmony, simplicity, and natural balance.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Eastern Wisdom'
      },
      {
        title: 'Enchiridion',
        author: 'Epictetus',
        desc: 'The handbook of freedom: distinguishing between what is up to us and what is not up to us.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Discipline'
      },
      {
        title: 'The Republic',
        author: 'Plato',
        desc: 'Socrates’ dialogues on justice, the philosopher king, the allegory of the cave, and the ideal state.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Western Canon'
      },
      {
        title: 'Ikigai: The Japanese Secret to Long Life',
        author: 'Héctor García & Francesc Miralles',
        desc: 'Discovering your reason for being at the intersection of passion, mission, vocation, and profession.',
        cover: 'images/cover-ikigai.jpg',
        format: 'PDF + EPUB',
        badge: 'Longevity'
      }
    ]
  },
  biographies: {
    id: 'biographies',
    title: 'Biographies & Memoirs',
    tagline: 'Inside the minds, daily routines, and triumphs of history’s most audacious figures.',
    badge: 'TITANS OF HISTORY',
    count: '520 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    books: [
      {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        desc: 'The exclusive biography of Apple’s visionary founder, perfectionist drive, and reality distortion field.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Silicon Valley'
      },
      {
        title: 'Shoe Dog: A Memoir by Nike Creator',
        author: 'Phil Knight',
        desc: 'The candid, harrowing account of building Nike from selling Japanese running shoes out of a car trunk.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Founders'
      },
      {
        title: 'Elon Musk',
        author: 'Walter Isaacson',
        desc: 'Inside the chaotic, hyper-intense world of Tesla, SpaceX, Neuralink, and mission-first leadership.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Hardcore'
      },
      {
        title: 'Leonardo da Vinci',
        author: 'Walter Isaacson',
        desc: 'The life of humanity’s most creative genius: cross-disciplinary art, anatomy, optics, and curiosity.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Polymath'
      },
      {
        title: 'When Breath Becomes Air',
        author: 'Paul Kalanithi',
        desc: 'A young neurosurgeon faced with terminal cancer reflects on doctoring, morality, and purpose.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Memoir'
      },
      {
        title: 'Open: An Autobiography',
        author: 'Andre Agassi',
        desc: 'The brutal, beautifully written confessional of a world champion tennis star who hated tennis.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Sports'
      },
      {
        title: 'Educated',
        author: 'Tara Westover',
        desc: 'A memoir of a girl who, kept out of school in rural Idaho, taught herself mathematics and entered Cambridge.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'NYT #1'
      },
      {
        title: 'Titan: Life of John D. Rockefeller',
        author: 'Ron Chernow',
        desc: 'The monumental rise of Standard Oil, industrial monopoly, and the world’s first billionaire philanthropist.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Industrial'
      }
    ]
  },
  health: {
    id: 'health',
    title: 'Health & Longevity',
    tagline: 'Metabolic medicine, sleep hygiene, zone-2 endurance, and nutritional science.',
    badge: 'BIOHACKING & WELLNESS',
    count: '490 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    books: [
      {
        title: 'Outlive: Science of Longevity',
        author: 'Peter Attia, MD',
        desc: 'A groundbreaking manifesto on living better and longer by addressing chronic diseases before symptoms start.',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'Longevity #1'
      },
      {
        title: 'Why We Sleep',
        author: 'Matthew Walker, PhD',
        desc: 'Unlocking the power of sleep and dreams for memory consolidation, hormonal reset, and immunity.',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'Neuroscience'
      },
      {
        title: 'Breath: The New Science of a Lost Art',
        author: 'James Nestor',
        desc: 'How nasal breathing, carbon dioxide tolerance, and lung capacity transform physical endurance.',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'Breathwork'
      },
      {
        title: 'Lifespan: Why We Age',
        author: 'David A. Sinclair, PhD',
        desc: 'Harvard geneticist reveals cellular information theory of aging and sirtuin activation.',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'Epigenetics'
      },
      {
        title: 'The 4-Hour Body',
        author: 'Timothy Ferriss',
        desc: 'An uncommon guide to rapid fat-loss, incredible strength, and becoming superhuman through MED.',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'Biohacking'
      },
      {
        title: 'Fast This Way',
        author: 'Dave Asprey',
        desc: 'Burn fat, heal inflammation, and boost energy through intermittent fasting and bulletproof biology.',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'Fasting'
      },
      {
        title: 'The Obesity Code',
        author: 'Jason Fung, MD',
        desc: 'Unlocking the secrets of weight loss through insulin regulation and intermittent fasting protocols.',
        cover: null,
        palette: 'palette-blue',
        format: 'PDF + EPUB',
        badge: 'Metabolism'
      },
      {
        title: 'How Not to Die',
        author: 'Michael Greger, MD',
        desc: 'Discover the foods scientifically proven to prevent and reverse the top 15 causes of premature death.',
        cover: null,
        palette: 'palette-purple',
        format: 'PDF + EPUB',
        badge: 'Nutrition'
      }
    ]
  },
  hindi: {
    id: 'hindi',
    title: 'Hindi Bestsellers & Classics',
    tagline: 'लोकप्रिय हिंदी अनुवाद, चाणक्य नीति, और भारतीय प्रेरणादायक साहित्य।',
    badge: '1,500+ हिंदी पुस्तकें',
    count: '1,680 Titles',
    icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/><circle cx="12" cy="10" r="3"/></svg>`,
    books: [
      {
        title: 'जीत आपकी (You Can Win)',
        author: 'शिव खेड़ा (Shiv Khera)',
        desc: 'सकारात्मक सोच से सफलता हासिल करने की सबसे लोकप्रिय भारतीय पुस्तक। कामयाबी की सीढ़ियां।',
        cover: null,
        palette: 'palette-crimson',
        format: 'PDF + EPUB',
        badge: 'सर्वश्रेष्ठ पुस्तक'
      },
      {
        title: 'चाणक्य नीति (Chanakya Neeti)',
        author: 'आचार्य चाणक्य',
        desc: 'कूटनीति, अर्थनीति, जीवन प्रबंधन और सफलता के कालातीत सूत्र हर युग के लिए।',
        cover: null,
        palette: 'palette-amber',
        format: 'PDF + EPUB',
        badge: 'प्राचीन ज्ञान'
      },
      {
        title: 'द साइकोलॉजी ऑफ मनी (हिंदी)',
        author: 'मॉर्गन हॉउसल (अनुवादित)',
        desc: 'धन और खुशी पर कालातीत पाठ: अमीर बनने और बने रहने के मनोवैज्ञानिक रहस्य।',
        cover: 'images/cover-psychology-of-money.jpg',
        format: 'PDF + EPUB',
        badge: 'वित्तीय ज्ञान'
      },
      {
        title: 'रिच डैड पुअर डैड (हिंदी संस्करण)',
        author: 'रॉबर्ट टी. कियोसाकी',
        desc: 'अमीर लोग अपने बच्चों को पैसे के बारे में क्या सिखाते हैं जो गरीब और मध्यम वर्ग नहीं सिखाते।',
        cover: 'images/cover-rich-dad.jpg',
        format: 'PDF + EPUB',
        badge: 'बेस्टसेलर'
      },
      {
        title: 'रहस्य (The Secret Hindi)',
        author: 'रोंडा बर्न (Rhonda Byrne)',
        desc: 'आकर्षण का नियम (Law of Attraction) और जीवन में मनचाही सफलता पाने का महामंत्र।',
        cover: null,
        palette: 'palette-navy',
        format: 'PDF + EPUB',
        badge: 'रहस्य'
      },
      {
        title: 'बॉडी लैंग्वेज (हिंदी)',
        author: 'एलन पीज (Allan Pease)',
        desc: 'अशाब्दिक संचार को समझना: दूसरों के हाव-भाव और विचारों को पढ़ने की वैज्ञानिक कला।',
        cover: null,
        palette: 'palette-slate',
        format: 'PDF + EPUB',
        badge: 'संचार कौशल'
      },
      {
        title: 'गोदान (Godan)',
        author: 'मुंशी प्रेमचंद (Munshi Premchand)',
        desc: 'भारतीय ग्रामीण समाज, किसान जीवन और मानवीय संघर्षों का अमर कालजयी महाकाव्य।',
        cover: null,
        palette: 'palette-forest',
        format: 'PDF + EPUB',
        badge: 'साहित्यिक क्लासिक'
      },
      {
        title: 'रश्मिरथी (Rashmirathi)',
        author: 'रामधारी सिंह दिनकर',
        desc: 'महाभारत के कर्ण के चरित्र पर आधारित ओजस्वी एवं प्रेरणादायी हिंदी काव्य।',
        cover: null,
        palette: 'palette-teal',
        format: 'PDF + EPUB',
        badge: 'वीर रस काव्य'
      }
    ]
  }
};

let currentCatId = 'investing'; // Default to Investing & Stocks per user prompt showcase
let currentSearchQuery = '';

/* ═══════════════════════════════════════════════
   EDITORIAL LIBRARY EXPLORER RENDERER
═══════════════════════════════════════════════ */

function generateCoverHTML(book) {
  if (book.cover) {
    return `<img src="${book.cover}" alt="${book.title} cover" class="lbr-cover-img" loading="lazy" />`;
  }
  const palette = book.palette || 'palette-navy';
  const shortAuthor = book.author.split(' ')[0] || '';
  return `
    <div class="lbr-cover-placeholder ${palette}">
      <span class="lcp-ribbon-tag">BOOK</span>
      <span class="lcp-title-text">${book.title}</span>
      <span class="lcp-author-text">${shortAuthor}</span>
    </div>
  `;
}

function renderBookRow(book, index) {
  return `
    <article class="lib-book-row" data-book-idx="${index}" tabindex="0" role="button" aria-label="View details for ${book.title}">
      <div class="lbr-cover-col">
        ${generateCoverHTML(book)}
      </div>
      <div class="lbr-info-col">
        <div class="lbr-header-line">
          <h4 class="lbr-title">${book.title}</h4>
          <span class="lbr-badge-pill">${book.badge || 'Essential'}</span>
        </div>
        <div class="lbr-author">&mdash; ${book.author}</div>
        <p class="lbr-desc">${book.desc}</p>
      </div>
      <div class="lbr-meta-col">
        <span class="lbr-format-tag">${book.format || 'PDF + EPUB'}</span>
        <span class="lbr-arrow-action">
          <span>Details</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </article>
  `;
}

function renderCategoryBooks(catKey, filterText = '', animate = true) {
  const cat = CATEGORIES[catKey] || CATEGORIES.business;
  const listEl = document.getElementById('libBooksList');
  const titleEl = document.getElementById('libCatTitle');
  const badgeEl = document.getElementById('libCatBadge');
  const descEl = document.getElementById('libCatDesc');
  const countTagEl = document.getElementById('libCountTag');
  const emptyStateEl = document.getElementById('libEmptyState');
  const searchInput = document.getElementById('libBookSearch');
  const clearBtn = document.getElementById('libClearSearch');

  if (!listEl) return;

  // Update header text
  if (titleEl) titleEl.textContent = cat.title;
  if (badgeEl) badgeEl.textContent = cat.badge;
  if (descEl) descEl.textContent = cat.tagline;

  // Filter books by query
  const query = filterText.trim().toLowerCase();
  const filtered = cat.books.filter(b => {
    if (!query) return true;
    return b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query);
  });

  // Handle empty state
  if (filtered.length === 0) {
    listEl.innerHTML = '';
    if (emptyStateEl) {
      emptyStateEl.style.display = 'block';
      const qSpan = document.getElementById('lesQuery');
      if (qSpan) qSpan.textContent = filterText;
    }
  } else {
    if (emptyStateEl) emptyStateEl.style.display = 'none';
    listEl.innerHTML = filtered.map((b, i) => renderBookRow(b, i)).join('');
  }

  // Update counter
  if (countTagEl) {
    countTagEl.innerHTML = `Showing <strong>${filtered.length}</strong> curated titles &bull; <span>${cat.count}</span>`;
  }

  // Clear button visibility
  if (clearBtn) {
    clearBtn.style.display = query ? 'flex' : 'none';
  }

  // GSAP Entrance animation
  if (animate && typeof gsap !== 'undefined' && filtered.length > 0) {
    gsap.fromTo('.lib-book-row',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.28, stagger: 0.035, ease: "power2.out" }
    );
  }

  // Bind click handlers to book rows for details modal
  document.querySelectorAll('.lib-book-row').forEach(row => {
    row.addEventListener('click', () => {
      const idx = parseInt(row.dataset.bookIdx, 10);
      const book = filtered[idx];
      if (book) openBookModal(book, cat);
    });
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        row.click();
      }
    });
  });
}

function openBookModal(book, cat) {
  const modal = document.getElementById('bookPreviewModal');
  if (!modal) return;

  const modalCover = document.getElementById('bpmCover');
  const modalTitle = document.getElementById('bpmTitle');
  const modalAuthor = document.getElementById('bpmAuthor');
  const modalCategory = document.getElementById('bpmCategory');
  const modalBadge = document.getElementById('bpmBadge');
  const modalDesc = document.getElementById('bpmDesc');

  if (modalTitle) modalTitle.textContent = book.title;
  if (modalAuthor) modalAuthor.textContent = `by ${book.author}`;
  if (modalCategory) modalCategory.textContent = cat.title;
  if (modalBadge) modalBadge.textContent = book.badge || 'Essential Reading';
  if (modalDesc) modalDesc.textContent = book.desc;

  if (modalCover) {
    modalCover.innerHTML = generateCoverHTML(book);
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookModal() {
  const modal = document.getElementById('bookPreviewModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initCategoryExplorer() {
  const sidebarNav = document.getElementById('sidebarCatNav');
  const mobileSelect = document.getElementById('mobileCategorySelect');
  if (!sidebarNav) return;

  // Build desktop sidebar category buttons
  sidebarNav.innerHTML = Object.values(CATEGORIES).map(cat => `
    <button class="sidebar-cat-btn ${cat.id === currentCatId ? 'active' : ''}" 
            data-cat="${cat.id}" 
            role="tab" 
            aria-selected="${cat.id === currentCatId ? 'true' : 'false'}">
      <span class="scb-left">
        <span class="scb-icon" aria-hidden="true">${cat.icon}</span>
        <span class="scb-name">${cat.title}</span>
      </span>
      <span class="scb-count">${cat.count.replace(' Titles', '')}</span>
    </button>
  `).join('');

  // Build mobile select options
  if (mobileSelect) {
    mobileSelect.innerHTML = Object.values(CATEGORIES).map(cat => `
      <option value="${cat.id}" ${cat.id === currentCatId ? 'selected' : ''}>
        ${cat.title} (${cat.count})
      </option>
    `).join('');

    mobileSelect.addEventListener('change', (e) => {
      switchCategory(e.target.value);
    });
  }

  function switchCategory(catKey) {
    if (catKey === currentCatId && !currentSearchQuery) return;
    currentCatId = catKey;
    currentSearchQuery = '';

    const searchInput = document.getElementById('libBookSearch');
    if (searchInput) searchInput.value = '';

    // Update active state in sidebar
    document.querySelectorAll('.sidebar-cat-btn').forEach(btn => {
      const isActive = btn.dataset.cat === catKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (mobileSelect) {
      mobileSelect.value = catKey;
    }

    renderCategoryBooks(currentCatId, '', true);
  }

  // Click on sidebar buttons
  sidebarNav.querySelectorAll('.sidebar-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchCategory(btn.dataset.cat);
    });
  });

  // Search input binding with debounce
  const searchInput = document.getElementById('libBookSearch');
  const clearBtn = document.getElementById('libClearSearch');
  const resetBtn = document.getElementById('lesResetBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderCategoryBooks(currentCatId, currentSearchQuery, false);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      currentSearchQuery = '';
      renderCategoryBooks(currentCatId, '', true);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      renderCategoryBooks(currentCatId, '', true);
    });
  }

  // Modal close events
  const modalCloseBtn = document.getElementById('bpmCloseBtn');
  const modalBackdrop = document.getElementById('bpmBackdrop');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBookModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeBookModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBookModal();
  });

  // Initial render
  renderCategoryBooks(currentCatId, '', false);
}

/* ═══════════════════════════════════════════════
   STICKY BOTTOM BAR
═══════════════════════════════════════════════ */
function initStickyBar() {
  const bar = document.getElementById('stickyBar');
  const hero = document.getElementById('hero');
  if (!bar || !hero) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  }, { threshold: 0.1 });

  observer.observe(hero);
}

/* ═══════════════════════════════════════════════
   SMOOTH ANCHOR SCROLL
═══════════════════════════════════════════════ */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();

      // If modal is open, close it first
      closeBookModal();

      const header = document.querySelector('.site-header');
      const offset = header ? header.offsetHeight + 16 : 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });

      // If scrolling to #access, auto-focus name input
      if (id === 'access') {
        setTimeout(() => {
          const nameInp = document.getElementById('cust-name');
          const box = document.getElementById('checkout-box');
          if (box) box.classList.add('highlight');
          if (nameInp && !nameInp.value) nameInp.focus();
          setTimeout(() => { if (box) box.classList.remove('highlight'); }, 2000);
        }, 400);
      }
    });
  });
}

/* ═══════════════════════════════════════════════
   UTM CAPTURE
═══════════════════════════════════════════════ */
function captureUTM() {
  const params = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(k => {
    const v = params.get(k);
    if (v) {
      try { sessionStorage.setItem(k, v); } catch (_) {}
    }
  });
}

/* ═══════════════════════════════════════════════
   HERO VISUAL VIEW TOGGLE (Bringbook Fan vs 3D Stack)
═══════════════════════════════════════════════ */
function initHeroVisualToggle() {
  const fanBtn = document.getElementById('btn-view-fan');
  const stackBtn = document.getElementById('btn-view-3d');
  const fanView = document.getElementById('hero-fan-view');
  const stackView = document.getElementById('hero-3d-view');

  if (!fanBtn || !stackBtn || !fanView || !stackView) return;

  fanBtn.addEventListener('click', () => {
    fanBtn.classList.add('active');
    stackBtn.classList.remove('active');
    fanView.style.display = 'flex';
    stackView.style.display = 'none';
  });

  stackBtn.addEventListener('click', () => {
    stackBtn.classList.add('active');
    fanBtn.classList.remove('active');
    fanView.style.display = 'none';
    stackView.style.display = 'flex';
  });
}

/* ═══════════════════════════════════════════════
   EDITORIAL CAROUSEL (Authentic Images from divylibrary.in)
═══════════════════════════════════════════════ */
const STORY_SLIDES = [
  {
    src: 'images/influencer.png',
    alt: 'Bringbook Reader & Collection Showcase',
    caption: 'Featured: Bringbook Reader & Master Digital Collection'
  },
  {
    src: 'images/collection-english-1.jpg',
    alt: 'English Bestsellers (Atomic Habits, Think & Grow Rich, Ikigai)',
    caption: 'Shelf 01: English Bestsellers (Atomic Habits, Think & Grow Rich, Ikigai)'
  },
  {
    src: 'images/collection-business.jpg',
    alt: 'Business & Sales (Zero to One, The 10X Rule, Sales Bible)',
    caption: 'Shelf 02: Business & Startups (Zero to One, The 10X Rule, Sales Bible)'
  },
  {
    src: 'images/collection-hindi-1.jpg',
    alt: 'Hindi Bestsellers (रिच डैड पुअर डैड, जीत आपकी, बॉडी लैंग्वेज)',
    caption: 'Shelf 03: Hindi Bestsellers (रिच डैड पुअर डैड, जीत आपकी, बॉडी लैंग्वेज)'
  },
  {
    src: 'images/collection-hindi-2.jpg',
    alt: 'Hindi Wealth & Wisdom (द साइकोलॉजी ऑफ मनी, चाणक्य नीति)',
    caption: 'Shelf 04: Wealth & Wisdom (द साइकोलॉजी ऑफ मनी, चाणक्य नीति)'
  },
  {
    src: 'images/ebook-stack.png',
    alt: '12,000+ eBook Master Archive on Mobile & Tablets',
    caption: 'Shelf 05: Complete 12,000+ eBook Multi-Device Cloud Archive'
  }
];

let currentSlideIdx = 0;

function initStoryCarousel() {
  const imgEl = document.querySelector('.story-img');
  const captionEl = document.getElementById('story-caption');
  const prevBtn = document.querySelector('.sc-prev');
  const nextBtn = document.querySelector('.sc-next');
  if (!imgEl || !prevBtn || !nextBtn) return;

  function updateSlide(idx) {
    currentSlideIdx = (idx + STORY_SLIDES.length) % STORY_SLIDES.length;
    const current = STORY_SLIDES[currentSlideIdx];
    imgEl.style.opacity = '0.35';
    imgEl.style.transform = 'scale(0.98)';
    setTimeout(() => {
      imgEl.src = current.src;
      imgEl.alt = current.alt;
      if (captionEl) captionEl.textContent = current.caption;
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }, 180);
  }

  prevBtn.addEventListener('click', () => updateSlide(currentSlideIdx - 1));
  nextBtn.addEventListener('click', () => updateSlide(currentSlideIdx + 1));
}

/* ═══════════════════════════════════════════════
   FANNED COVERS SHORTCUT
═══════════════════════════════════════════════ */
const COVER_CATEGORY_MAP = {
  'fb-left-outer': 'selfhelp',     // Atomic Habits
  'fb-left-mid':   'ai',           // AI Superpowers
  'fb-center':     'business',     // Zero to One
  'fb-right-mid':  'finance',      // Psychology of Money
  'fb-right-outer':'investing'     // Rich Dad Poor Dad
};

function initFannedCoverInteractions() {
  const books = document.querySelectorAll('.fanned-book');
  books.forEach(b => {
    b.addEventListener('click', () => {
      let targetCat = 'business';
      for (const [cls, cat] of Object.entries(COVER_CATEGORY_MAP)) {
        if (b.classList.contains(cls)) {
          targetCat = cat;
          break;
        }
      }
      const tab = document.querySelector(`.sidebar-cat-btn[data-cat="${targetCat}"]`);
      if (tab) tab.click();

      const collections = document.getElementById('collections');
      if (collections) {
        collections.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════
   3D BOOK HOVER & CURSOR-TRACKING TILT
═══════════════════════════════════════════════ */
function init3DBookInteractions() {
  const books = document.querySelectorAll('.fanned-book');
  if (!books.length) return;

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (isTouchDevice) return;

  books.forEach(book => {
    const card = book.querySelector('.book-card-3d');
    if (!card) return;

    book.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = Math.max(0, Math.min(1, x / rect.width));
      const normY = Math.max(0, Math.min(1, y / rect.height));

      const tiltX = ((0.5 - normY) * 14).toFixed(2);
      const tiltY = ((normX - 0.5) * 18).toFixed(2);

      const pointerX = (normX * 100).toFixed(1);
      const pointerY = (normY * 100).toFixed(1);

      card.style.setProperty('--tilt-x', `${tiltX}deg`);
      card.style.setProperty('--tilt-y', `${tiltY}deg`);
      card.style.setProperty('--pointer-x', `${pointerX}%`);
      card.style.setProperty('--pointer-y', `${pointerY}%`);
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.25s ease';
    });

    book.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.45s ease';
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--pointer-x', '50%');
      card.style.setProperty('--pointer-y', '50%');
    });
  });
}

/* ═══════════════════════════════════════════════
   HERO ENTRANCE SEQUENCE
═══════════════════════════════════════════════ */
function initHeroEntrance() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      requestAnimationFrame(() => {
        document.body.classList.add('hero-loaded');
      });
    });
  } else {
    requestAnimationFrame(() => {
      document.body.classList.add('hero-loaded');
    });
  }
}

/* ═══════════════════════════════════════════════
   BOOTSTRAP
═══════════════════════════════════════════════ */
initHeroEntrance();

document.addEventListener('DOMContentLoaded', () => {
  captureUTM();
  initCategoryExplorer();
  initHeroVisualToggle();
  initStoryCarousel();
  initFannedCoverInteractions();
  init3DBookInteractions();
  initStickyBar();
  initSmoothAnchors();
});
