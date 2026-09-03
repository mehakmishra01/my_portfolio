export const contact = {
  name: 'Mahak Mishra',
  handle: '@mahakmishra01',
  email: 'mehakmishra021@gmail.com',
  phone: '8591267730',
  linkedin: 'https://www.linkedin.com/in/mahak-mishra-0a8338309/',
  github: 'https://github.com/mehakmishra01',
  instagram: 'https://www.instagram.com/thenexthing_/',
  substack: 'https://substack.com/@mangel01',
} as const

export const navLinks = [
  { label: 'About', href: '#bento' },
  { label: 'Work', href: '#work' },
  { label: 'Beyond', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
] as const

export const socialLinks = [
  { label: 'GitHub', href: contact.github, icon: 'github' as const },
  { label: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' as const },
  { label: 'Instagram', href: contact.instagram, icon: 'instagram' as const },
  { label: 'Substack', href: contact.substack, icon: 'substack' as const },
] as const

export const stats = [
  { value: '8+', label: 'Projects Built' },
  { value: '4+', label: 'Tech Stacks' },
  { value: 'Open', label: 'To Opportunities' },
] as const

export const tools = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Git', color: '#F05032' },
  { name: 'Tailwind', color: '#06B6D4' },
] as const

export const personalInterests = [
  {
    title: '01 — Writing',
    description: 'Thoughts, reflections, and words that needed somewhere to exist.',
    href: contact.substack,
  },
  {
    title: '02 — Singing',
    description: 'A way of feeling what words cannot always express.',
    href: contact.instagram,
  },
  {
    title: '03 — Reading',
    description: 'Stories that linger, minds that haunt, questions that remain.',
    href: null,
  },
] as const

export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Responsive apps and landing pages with modern frameworks.',
    emoji: '⚡',
  },
  {
    icon: 'layout',
    title: 'UI/UX Design',
    description: 'Clean interfaces with thoughtful interactions and visual hierarchy.',
    emoji: '✦',
  },
  {
    icon: 'api',
    title: 'API Integration',
    description: 'Real-time data and third-party service connections.',
    emoji: '◈',
  },
  {
    icon: 'product',
    title: 'Product Building',
    description: 'From concept to launch — full product lifecycle.',
    emoji: '→',
  },
] as const

export const projects = [
  {
    title: 'AspireX Coaching Platform',
    description: 'Complete digital platform for coaching institutes — student lifecycle, multi-center ops, and automated workflows.',
    tags: ['Full Stack', 'Product'],
    github: 'https://www.aspirexlearning.com/',
    image: '/projects/aspirex.svg',
    featured: true,
  },
  {
    title: 'JobSingha',
    description: 'AI-powered finance hiring platform for Singapore — job matching with Fit Score for seekers and employers.',
    tags: ['Full Stack', 'Product'],
    github: 'https://jobsingha.com/',
    image: '/projects/jobsingha.png',
    featured: false,
  },
  {
    title: 'AirCare',
    description: 'Real-time air quality and weather dashboard.',
    tags: ['Web App', 'API'],
    github: 'https://github.com/mehakmishra01/AirCare',
    image: '/projects/aircare.svg',
    featured: false,
  },
  {
    title: 'Amazon Clone',
    description: 'Full-featured e-commerce frontend replica.',
    tags: ['React', 'E-commerce'],
    github: 'https://github.com/mehakmishra01/amazon_clone',
    image: '/projects/amazon.svg',
    featured: false,
  },
  {
    title: 'Journaling App',
    description: 'Personal journaling and reflection platform.',
    tags: ['Full Stack', 'Product'],
    github: 'https://github.com/mehakmishra01/journaling',
    image: '/projects/journal.svg',
    featured: false,
  },
] as const

export const processSteps = [
  { number: '01', title: 'Discover', description: 'Understanding goals, users, and constraints.' },
  { number: '02', title: 'Define', description: 'Scoping features and mapping architecture.' },
  { number: '03', title: 'Design', description: 'Wireframes, UI refinement, visual direction.' },
  { number: '04', title: 'Develop', description: 'Clean code with performance in mind.' },
  { number: '05', title: 'Deliver', description: 'Launch, iterate, and ensure quality.' },
] as const
