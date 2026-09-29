
export const profile = {
  name: 'Srithin Chillamcharla',
  shortName: 'Srithin',
  role: 'AI Agent Engineer at Emergent',
  location: 'Hyderabad, India',
  email: 'chillamcharlasrithin@gmail.com',
  github: 'https://github.com/srithin19',
  linkedin: 'https://www.linkedin.com/in/srithin-chillamcharla/',
};

export type Link = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  context: string;
  summary: string;
  stack: string[];
  links: Link[];
  image?: string;
};

export const aiProjects: Project[] = [
  {
    id: 'sdlc-agents',
    title: 'Multi-agent SDLC automation',
    context: 'EPAM Codemie',
    summary:
      'A team of specialised agents that carry a feature from requirements to deployment. Structured prompt chains and shared context let each agent pick up where the last one stopped, cutting cycle time by 35% and manual developer effort by 43%.',
    stack: ['Agent orchestration', 'Prompt chains', 'Tool calling', 'LLMs'],
    links: [],
  },
  {
    id: 'voice-agent',
    title: 'AI voice support agent',
    context: 'Emergent',
    summary:
      'A voice agent that listens to a customer, works out what is wrong, routes it to the right team (billing, app bugs, platform, sales) and raises a ticket or books a meeting. After the call it writes a summary with sentiment to the support log and drafts the follow-up message.',
    stack: ['ElevenLabs', 'LLM tool use', 'Python', 'Routing', 'RAG'],
    links: [],
  },
  {
    id: 'image-hiding',
    title: 'Neural image hiding',
    context: 'IEEE OTCON 2024',
    summary:
      'Research on hiding one image inside another with neural networks, recovering the hidden data with 95% accuracy. Published at the OPJU International Technology Conference.',
    stack: ['TensorFlow', 'Keras', 'NumPy', 'Research'],
    links: [{ label: 'Read the paper', href: 'https://doi.org/10.1109/OTCON60325.2024.10687749' }],
  },
  {
    id: 'style-transfer',
    title: 'Neural style transfer',
    context: 'Springer 2025',
    summary:
      'Co-authored research on neural style transfer in PyTorch: repainting a photo in the style of an artwork by optimising against content and style features from a pretrained CNN. Published in Intelligent Data Engineering and Analytics (Smart Innovation, Systems and Technologies).',
    stack: ['PyTorch', 'CNNs', 'Computer vision', 'Research'],
    links: [{ label: 'Read the paper', href: 'https://doi.org/10.1007/978-981-96-0139-4_18' }],
  },
  {
    id: 'chitti',
    title: 'CHITTI farming assistant',
    context: 'Chatbot',
    summary:
      'A conversational assistant for farmers that answers crop and farming questions in English, Hindi and Telugu.',
    stack: ['Conversational AI', 'Multilingual'],
    links: [
      { label: 'Try it', href: 'https://page.joonbot.com/b0ba934c-64a8-4eed-8bb0-3059c9442646' },
      { label: 'Code', href: 'https://github.com/srithin19/CHITTI-The-Chat-Bot-' },
    ],
  },
];

export const productProjects: Project[] = [
  {
    id: 'jyothi',
    title: 'Jyothi Power Projects',
    context: 'Client website',
    summary:
      'Bilingual Telugu and English site for an electrical infrastructure contractor in Telangana. Reusable sections, motion that stays out of the way, and a fast Vite build.',
    stack: ['React 19', 'TypeScript', 'Tailwind', 'Framer Motion'],
    links: [
      { label: 'Visit site', href: 'https://jyothi-power-projects.vercel.app' },
      { label: 'Code', href: 'https://github.com/srithin19/Jyothi-power-projects' },
    ],
  },
  {
    id: 'aquis',
    title: 'AQUIS',
    context: 'Mobile app',
    summary:
      'A local-first hydration companion with a mascot that reacts as you drink. Smart reminders, streaks and badges, backed by 68 Jest tests on a real SQLite store.',
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    links: [{ label: 'Code', href: 'https://github.com/srithin19/Aquis' }],
  },
  {
    id: 'smart-parking',
    title: 'Smart parking system',
    context: 'Full-stack app',
    summary:
      'Three-floor parking manager with a live floor plan, click-to-book slots for cars and bikes, and a scheduled daily reset.',
    stack: ['React', 'Spring Boot', 'MySQL'],
    links: [{ label: 'Code', href: 'https://github.com/srithin19/smart-parking' }],
  },
  {
    id: 'preventive',
    title: 'Preventive',
    context: 'Microsoft Future Ready Talent',
    summary:
      'Health information site with an Azure Health Bot for guided consultations, built during the Microsoft Future Ready Talent internship.',
    stack: ['Azure Static Web Apps', 'Azure Health Bot', 'JavaScript'],
    links: [{ label: 'Code', href: 'https://github.com/srithin19/project-azure' }],
  },
];

export type Role = {
  title: string;
  company: string;
  place: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    title: 'AI Agent Engineer',
    company: 'Emergent',
    place: 'Remote',
    period: 'Aug 2026 to now',
    points: [
      'Build end-to-end agent workflows that classify, prioritise and route customer issues across support systems.',
      'Curated support-ticket datasets that widened evaluation coverage for automated classification.',
      'Ground responses with RAG over support knowledge, and measure accuracy with agent evaluation workflows.',
      'Forward deployed engineer for European clients, turning requirements into AI-powered full-stack apps.',
    ],
    tags: ['LLM agents', 'RAG', 'Evaluation', 'Forward deployed'],
  },
  {
    title: 'Software Engineer',
    company: 'EPAM Systems',
    place: 'Hyderabad',
    period: 'Jun 2024 to Jul 2026',
    points: [
      'Shipped full-stack features for enterprise workflows with React, TypeScript, Django and FastAPI.',
      'Designed REST APIs on PostgreSQL and MySQL and tuned queries, cutting response times by about 20%.',
      'Built a reusable React and Redux component set plus real-time updates over WebSockets and Django Channels.',
      'Reached 96% test coverage with PyTest, Jest and React Testing Library. Performance Champion, Q2 2025.',
    ],
    tags: ['React', 'FastAPI', 'Django', 'AWS'],
  },
  {
    title: 'Research Intern',
    company: 'Vardhaman College of Engineering',
    place: 'Hyderabad',
    period: 'Jun 2023 to Feb 2024',
    points: [
      'Researched neural networks for secure data hiding in images, reaching 95% retrieval accuracy.',
      'Implemented the encryption and decryption pipeline in Python with TensorFlow and Keras.',
    ],
    tags: ['TensorFlow', 'Research'],
  },
];

export type SkillGroup = {
  id: 'ai' | 'backend' | 'frontend' | 'cloud';
  group: string;
  note: string;
  /** The skills that lead the card, shown larger. */
  primary: string[];
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    id: 'ai',
    group: 'AI and GenAI',
    note: 'What I spend most of my time on: agents that plan, call tools and hand work to each other.',
    primary: ['Generative AI', 'AI agents', 'Agent orchestration', 'RAG'],
    items: ['LLMs', 'Prompt engineering', 'Prompt chains', 'Tool calling', 'Function calling', 'MCP', 'Multi-agent systems', 'LangChain', 'LangGraph', 'LlamaIndex', 'OpenAI APIs', 'Claude API', 'Hugging Face', 'Vector databases', 'Embeddings', 'Semantic search', 'Fine-tuning', 'AI evaluation', 'Guardrails', 'TensorFlow', 'Keras'],
  },
  {
    id: 'backend',
    group: 'Backend',
    note: 'Where the agents live',
    primary: ['Java', 'Spring Boot', 'Python'],
    items: ['Spring MVC', 'Spring Security', 'Hibernate / JPA', 'Maven', 'Microservices', 'FastAPI', 'Django', 'Django Channels', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT auth', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'JUnit', 'PyTest'],
  },
  {
    id: 'frontend',
    group: 'Frontend',
    note: 'Where people meet them',
    primary: ['React.js', 'TypeScript'],
    items: ['JavaScript (ES6+)', 'Next.js', 'Redux', 'React Router', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'GSAP', 'Framer Motion', 'Vite', 'Jest', 'React Testing Library', 'Responsive design'],
  },
  {
    id: 'cloud',
    group: 'Cloud and delivery',
    note: 'How it ships',
    primary: ['AWS', 'Docker'],
    items: ['Lambda', 'EC2', 'S3', 'API Gateway', 'CloudWatch', 'Azure Static Web Apps', 'Vercel', 'Kubernetes', 'Git', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Linux', 'Postman'],
  },
];

export const education = {
  school: 'Jawaharlal Nehru Technological University, Hyderabad',
  degree: 'B.Tech in Information Technology',
  period: '2020 to 2024',
  grade: 'CGPA 8.37',
};

export const certifications = [
  'Claude Certified Architect, Anthropic',
  'EPAM Certified Generative AI and Agentic AI',
  'Salesforce Certified AI Associate',
  'Performance Champion, Q2 2025, EPAM Systems',
];
