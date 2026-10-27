import type { ProjectItem, ProjectCategory } from '../types/project';

export const REPOSITORY_URL =
  'https://github.com/sillico-sapiens/student-projects-agentic-engineering-p1-webinar';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'my-calculator',
    name: 'MyCalculator',
    tagline: 'Safe recursive-descent expression parser with calculation history',
    description:
      'A responsive calculator web app built with HTML5, CSS3, and vanilla JavaScript. Uses an algorithmic recursive-descent parser instead of eval(), with a 20-entry calculation history tape, full keyboard navigation, and theme persistence.',
    problemStatement:
      'Many introductory calculator projects dangerously rely on eval() or fail to enforce mathematical operator precedence (* and / evaluated before + and -) and chained unary negatives.',
    author: {
      name: 'Anjali',
      program: 'BCA College Project',
    },
    category: 'Utilities',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'localStorage'],
    sourcePath: 'Anjali_11262028_MyCalculator',
    sourceUrl: `${REPOSITORY_URL}/tree/main/Anjali_11262028_MyCalculator`,
    liveUrl: null,
    features: [
      'Custom recursive-descent parser (tokenizer + grammar) without eval() or Function()',
      'Strict mathematical operator precedence (*, / evaluated before +, -)',
      'Decimal point and negative number handling (e.g. 5 * -3)',
      'History tape storing the last 20 calculations with one-click result recall',
      'Full keyboard input support (digits, operators, Enter, Backspace, Escape)',
      'Division-by-zero protection and user-friendly error messages',
      'Light and dark theme toggle remembered in browser storage',
    ],
    status: 'Verified Complete',
    featured: true,
    license: 'MIT License',
    previewType: 'calculator',
    testedWithBrowser: true,
    runInstructions: [
      {
        title: 'Direct Browser Run',
        steps: 'Open Anjali_11262028_MyCalculator/index.html in any modern browser.',
      },
      {
        title: 'VS Code Live Server',
        steps:
          'Open the folder in VS Code, right-click index.html, and choose "Open with Live Server".',
      },
    ],
  },
  {
    id: 'carbon-tracker',
    name: 'EcoTrack — Campus Carbon Footprint Calculator',
    tagline: 'Student lifestyle emission analyzer grounded in IPCC & EPA benchmarks',
    description:
      'A zero-build single-page micro-application designed for university students to measure, understand, and reduce their daily carbon footprint across daily transit, dorm electricity, and dining habits.',
    problemStatement:
      'College students often want to live sustainably but lack transparent, contextual metrics showing how everyday transit and dorm energy choices translate into kilograms of CO2.',
    author: {
      name: 'Khushi',
      program: 'University Student Submission',
    },
    category: 'Sustainability',
    technologies: ['HTML5', 'Tailwind CSS (CDN)', 'Lucide Icons', 'JavaScript (ES6+)', 'localStorage'],
    sourcePath: 'Khushi_11262467_CarbonTracker',
    sourceUrl: `${REPOSITORY_URL}/tree/main/Khushi_11262467_CarbonTracker`,
    liveUrl: null,
    features: [
      'Interactive calculation engine evaluating transit (0.18 kg CO2/km), dorm power (0.42 kg CO2/kWh), and dietary choices',
      'Quick student lifestyle presets: Dorm Walker, Bus Commuter, and Car Commuter',
      'Animated cubic ease-out counter displaying daily CO2 emission results',
      'Proportional visual breakdown bar across transit, electricity, and food',
      'Four benchmark tiers: Eco Champion, Sustainable Scholar, Conscious Commuter, and High Impact Emitter',
      'Actionable recommendations targeting the user’s highest individual emission source',
      'Offline state persistence using browser localStorage with last-calculated timestamp',
    ],
    status: 'Verified Complete',
    featured: true,
    license: 'MIT License',
    previewType: 'carbon',
    testedWithBrowser: true,
    runInstructions: [
      {
        title: 'Python HTTP Server',
        steps:
          'Open terminal in Khushi_11262467_CarbonTracker/ and run: python -m http.server 8080. Navigate to http://localhost:8080.',
      },
      {
        title: 'Direct File Open',
        steps: 'Double-click index.html to launch directly in Chrome, Edge, or Firefox.',
      },
    ],
  },
  {
    id: 'hackathon-countdown-hub',
    name: 'Hackathon Countdown Hub',
    tagline: 'Real-time college competition ticker with color-coded urgency alerts',
    description:
      'Live ticking countdown clocks for upcoming college hackathons, workshops, and competitions. Built in a single afternoon with an agentic engineering workflow in Google Antigravity (Plan → Execute → Browser Verify → Polish) for Sillico Sapiens.',
    problemStatement:
      'Students participating in competitive programming and hackathons frequently miss application windows or project submission deadlines without high-visibility, urgency-ranked countdowns.',
    author: {
      name: 'Love Panchal',
      handle: '@lovepanchalhere',
      program: 'B.Tech CSE (AI & ML), MMDU',
      profileUrl: 'https://github.com/lovepanchalhere',
    },
    category: 'Events & Community',
    technologies: ['HTML5', 'Tailwind CSS (CDN)', 'Custom CSS Animations', 'JavaScript (ES6+)', 'localStorage'],
    sourcePath: 'LovePanchal_11262429_HackathonCountdownHub',
    sourceUrl: `${REPOSITORY_URL}/tree/main/LovePanchal_11262429_HackathonCountdownHub`,
    liveUrl: 'https://lovepanchalhere.github.io/hackathon-countdown-hub/',
    features: [
      'Live ticking Days / Hours / Mins / Secs counters refreshing dynamically every second',
      'Urgency status badges: Red (<24 hours), Amber (<7 days), and Green (further out)',
      'Interactive "Add Event" modal with form validation (future date required)',
      'Deterministic sorting displaying the nearest impending deadline first',
      '"Event Started!" state handling when deadlines pass',
      'Dark and light theme toggle remembered in localStorage',
      'Browser localStorage data persistence with zero external backend dependency',
    ],
    status: 'Verified Complete',
    featured: true,
    license: 'MIT License',
    previewType: 'countdown',
    testedWithBrowser: true,
    agenticWorkflowNote:
      'Tested and debugged inside Google Antigravity: real browser console testing caught an identifier re-declaration bug that static string matching missed.',
    runInstructions: [
      {
        title: 'Verified Live Demo',
        steps: 'Access the hosted deployment: https://lovepanchalhere.github.io/hackathon-countdown-hub/',
      },
      {
        title: 'Local HTTP Server',
        steps:
          'Run python -m http.server 8000 in LovePanchal_11262429_HackathonCountdownHub/ and open http://localhost:8000.',
      },
    ],
  },
  {
    id: 'msr-cafe',
    name: 'MSR Cafe - Artisanal Coffee & Neighborhood Bistro',
    tagline: 'Artisanal storefront & admin tracking console with offline database polyfill',
    description:
      'A warm, neighborhood cafe storefront and administrative management system built with HTML5, Tailwind CSS, and a Supabase client featuring automatic offline localStorage interceptor fallback.',
    problemStatement:
      'Campus bistro businesses require both a customer-facing digital ordering/reservation interface and an administrative backoffice order tracker that continues working even in offline development sandboxes.',
    author: {
      name: 'Manjeet Singh',
      program: 'Web Engineering Submission',
    },
    category: 'E-Commerce',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Supabase Client', 'localStorage Polyfill'],
    sourcePath: 'ManjeetSingh_11259011_MSRCafe',
    sourceUrl: `${REPOSITORY_URL}/tree/main/ManjeetSingh_11259011_MSRCafe`,
    liveUrl: null,
    features: [
      'Sticky navigation header with steaming cup animation and responsive cart count',
      'Filterable menu with real-time text query and customization sheets for sizing & milk add-ons',
      'Slide-over checkout drawer calculating 5% GST and order-type toggles (Dine-In, Takeaway, Delivery)',
      'Table reservation form capturing date, time slot, guest count, and seating preference',
      'Admin backoffice console accessible via hash routing (#admin) protected by PIN (1234)',
      'Interactive order status machine (Pending ➔ Preparing ➔ Completed ➔ Cancelled)',
      'Offline mock database fallback to browser localStorage when backend credentials are unset',
    ],
    status: 'Verified Complete',
    featured: false,
    license: 'MIT License',
    previewType: 'cafe',
    testedWithBrowser: true,
    runInstructions: [
      {
        title: 'Local Server',
        steps:
          'Open terminal in ManjeetSingh_11259011_MSRCafe/ and run: python -m http.server 8000.',
      },
      {
        title: 'Storefront',
        steps: 'Navigate to http://localhost:8000/ to view the customer menu and cart.',
      },
      {
        title: 'Admin Backoffice',
        steps: 'Navigate to http://localhost:8000/#admin and enter passcode 1234.',
      },
    ],
  },
  {
    id: 'aero-calc',
    name: 'AeroCalc — Modern Arithmetic Calculator',
    tagline: 'Sleek arithmetic tool with real-time preview and Web Audio click synthesizer',
    description:
      'A modern arithmetic calculator with ambient glowing backdrops, real-time expression preview, slide-out history tape drawer, clipboard copying, and zero-dependency Web Audio API sound synthesis.',
    problemStatement:
      'Everyday digital calculator interfaces rarely offer tangible acoustic feedback, visual mathematical operand breakdown, or easy clipboard export for quick problem solving.',
    author: {
      name: 'Rahul',
      program: 'Frontend Engineering Project',
    },
    category: 'Utilities',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Web Audio API', 'Google Fonts', 'localStorage'],
    sourcePath: 'Rahul_11255008_AeroCalc',
    sourceUrl: `${REPOSITORY_URL}/tree/main/Rahul_11255008_AeroCalc`,
    liveUrl: null,
    features: [
      'Real-time upper expression preview displaying preceding operands and active operators',
      'Zero-dependency Web Audio API synthesizer generating clean acoustic button-press feedback',
      'Slide-in calculation history tape drawer with individual clear and copy functions',
      'Clipboard copy badge allowing instant copying of computed result with toast notification',
      'Full keyboard navigation (0-9, operators, Backspace, Escape, Enter)',
      'Negation (±) and percentage (%) operators with input boundary safeguards',
      'Light and dark mode switching with subtle ambient radial background accents',
    ],
    status: 'Verified Complete',
    featured: false,
    license: 'MIT License',
    previewType: 'aerocalc',
    testedWithBrowser: true,
    runInstructions: [
      {
        title: 'Direct Browser Run',
        steps: 'Double-click Rahul_11255008_AeroCalc/index.html to launch immediately.',
      },
      {
        title: 'Local HTTP Server',
        steps:
          'Run python -m http.server 5500 in Rahul_11255008_AeroCalc/ and navigate to http://localhost:5500.',
      },
    ],
  },
  {
    id: 'study-pomodoro',
    name: 'StudyPomodoro',
    tagline: 'Circular SVG focus timer with university deep-work blocks and harmonic chimes',
    description:
      'An interactive study clock and session tracker tailored for university students balancing coursework, problem sets, and exam revision with circular SVG countdown animations and drift-free background timers.',
    problemStatement:
      'University students studying long hours frequently lose track of focus pacing or experience auditory fatigue from harsh timer alarm buzzers.',
    author: {
      name: 'Sahajpreet Singh',
      program: 'Student Engineering Submission',
    },
    category: 'Productivity & Focus',
    technologies: ['HTML5', 'Tailwind CSS v3 (CDN)', 'Lucide Icons', 'JavaScript (ES6+)', 'Web Audio API', 'localStorage'],
    sourcePath: 'SahajpreetSingh_11262265_StudyPomodoro',
    sourceUrl: `${REPOSITORY_URL}/tree/main/SahajpreetSingh_11262265_StudyPomodoro`,
    liveUrl: null,
    features: [
      'Smooth, precision circular SVG progress countdown gauge with ambient glowing backdrops',
      'Active study objective task anchor bar with inline editing and quick university tags',
      'Quick switching between Standard (25/5 min) and University Deep Work (50/10 min) blocks',
      'Zero-dependency Web Audio API dual-harmonic sine-wave synthesizer for peaceful completion chime',
      'Drift-free background timer synchronized to Date.now() updating browser tab title in real-time',
      'Persistent session analytics: all-time completed intervals, daily progress bar, and study streak',
      'Comprehensive keyboard shortcuts (Space to start/pause, R/Esc to reset, S to skip, T to focus)',
    ],
    status: 'Verified Complete',
    featured: true,
    license: 'MIT License',
    previewType: 'pomodoro',
    testedWithBrowser: true,
    runInstructions: [
      {
        title: 'Direct Browser Run',
        steps: 'Launch SahajpreetSingh_11262265_StudyPomodoro/index.html directly in your browser.',
      },
      {
        title: 'Local HTTP Server',
        steps:
          'Run python -m http.server 3000 in SahajpreetSingh_11262265_StudyPomodoro/ and open http://localhost:3000.',
      },
    ],
  },
];

export const CATEGORIES: ProjectCategory[] = [
  'All',
  'Utilities',
  'Sustainability',
  'Events & Community',
  'E-Commerce',
  'Productivity & Focus',
];

export const ALL_TECHNOLOGIES: string[] = Array.from(
  new Set(PROJECTS.flatMap((p) => p.technologies))
).sort();
