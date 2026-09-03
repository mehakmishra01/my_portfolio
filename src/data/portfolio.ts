export const contact = {
  email: 'mehakmishra021@gmail.com',
  phone: '8591267730',
  linkedin: 'https://www.linkedin.com/in/mahak-mishra-0a8338309/',
  github: 'https://github.com/mehakmishra01',
} as const

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const

export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description:
      'Building responsive, performant web applications with modern frameworks — from landing pages to full-stack products.',
  },
  {
    icon: 'layout',
    title: 'UI/UX Design',
    description:
      'Crafting intuitive interfaces with clean visual hierarchy, thoughtful interactions, and user-centered design principles.',
  },
  {
    icon: 'api',
    title: 'API Integration',
    description:
      'Connecting applications to real-time data sources, third-party services, and backend systems with reliable architecture.',
  },
  {
    icon: 'product',
    title: 'Product Building',
    description:
      'Taking ideas from concept to launch — scoping features, writing clean code, and shipping products that solve real problems.',
  },
] as const

export const projects = [
  {
    title: 'AspireX Marketing',
    description: 'Marketing website for AspireX AI Board Helper.',
    tags: ['Web Design', 'UI/UX'],
    github: 'https://github.com/mehakmishra01/aspireX-marketing-website',
    image: '/projects/aspirex.jpg',
  },
  {
    title: 'AirCare',
    description: 'Real-time air quality & weather dashboard.',
    tags: ['Web App', 'API'],
    github: 'https://github.com/mehakmishra01/AirCare',
    image: '/projects/aircare.jpg',
  },
  {
    title: 'Amazon Clone',
    description: 'Full-featured e-commerce frontend replica.',
    tags: ['React', 'E-commerce'],
    github: 'https://github.com/mehakmishra01/amazon_clone',
    image: '/projects/amazon.jpg',
  },
  {
    title: 'Journaling App',
    description: 'Personal journaling & reflection platform.',
    tags: ['Full Stack', 'Product'],
    github: 'https://github.com/mehakmishra01/journaling',
    image: '/projects/journal.jpg',
  },
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understanding goals, users, and constraints through research and conversation.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Scoping features, setting priorities, and mapping the architecture.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Wireframing layouts, refining UI, and establishing visual direction.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Writing clean, tested code with attention to performance and accessibility.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Launching, iterating based on feedback, and ensuring long-term quality.',
  },
] as const
