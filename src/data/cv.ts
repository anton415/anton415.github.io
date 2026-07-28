export type CvExperience = {
  company: string;
  companyUrl?: string;
  location?: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
};

export type CvEducation = {
  school: string;
  degree: string;
  field: string;
  year: string;
  type?: 'degree' | 'course';
};

export type CvSkills = {
  core: string[];
  tools: string[];
  languages: string[];
};

export type CvProject = {
  name: string;
  description: string;
  role?: string;
  tech?: string[];
};

export type Cv = {
  summary: string[];
  experience: CvExperience[];
  education: CvEducation[];
  skills: CvSkills;
  projects: CvProject[];
};

export const cv: Cv = {
  summary: [
    'My strongest production experience is in Java, Spring, Hibernate, SQL, REST APIs, ActiveMQ, testing, code review, and long-lived system maintenance.',
    'I am expanding my capabilities beyond implementation into system design, data integrity, automated delivery, observability, reliability, and production ownership. AI-assisted development is one supporting tool within this broader engineering practice.',
  ],
  experience: [
    {
      company: 'Central Bank of the Russian Federation',
      companyUrl: 'https://www.cbr.ru',
      location: 'Moscow, Russia',
      role: 'Java Developer',
      start: '2017-10',
      end: 'present',
      highlights: [
        'Develop and maintain backend logic with Java, Spring, and Hibernate for business-critical internal systems.',
        'Implement business processes, REST APIs, SQL-backed workflows, and integrations through ActiveMQ.',
        'Support and gradually improve long-lived legacy systems, including production troubleshooting and deployments.',
        'Write and maintain unit tests, review code, and contribute to predictable, maintainable delivery.',
        'Develop Vaadin UI components for internal users where required by the product.',
      ],
    },
  ],
  education: [
    {
      school: 'Moscow Aviation Institute (National Research University)',
      degree: "Master's degree",
      field: 'Management',
      year: '2023',
      type: 'degree',
    },
    {
      school: 'Moscow Aviation Institute (National Research University)',
      degree: "Bachelor's degree",
      field: 'Applied Informatics',
      year: '2017',
      type: 'degree',
    },
    {
      school: 'Luxoft',
      degree: 'Professional course',
      field: 'JVA-008 Java SE 7',
      year: '2019',
      type: 'course',
    },
    {
      school: 'Moscow Aviation Institute',
      degree: 'Professional course',
      field: 'Java Programming Fundamentals',
      year: '2017',
      type: 'course',
    },
  ],
  skills: {
    core: [
      'Java',
      'Software Development',
      'Spring Framework',
      'SQL',
      'REST APIs',
      'Unit Testing',
      'Code Review',
      'Git',
      'Linux',
      'Hibernate',
    ],
    tools: ['ActiveMQ', 'JUnit', 'PostgreSQL', 'Docker', 'Vaadin', 'React', 'Go', 'Python'],
    languages: ['Russian (native)', 'English (C1)'],
  },
  projects: [
    {
      name: 'Personal Finance Tracker',
      description:
        'My primary engineering learning project for practising architecture, testing, data integrity, delivery, and production ownership.',
      role: 'Active learning project',
    },
    {
      name: 'Share Trip',
      description: 'A Go project developed as part of the Job4j course.',
      role: 'Active course project',
    },
    {
      name: 'Personal website',
      description: 'A static professional profile and portfolio surface.',
      role: 'Portfolio surface',
    },
  ],
};
