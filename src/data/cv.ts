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
    'Software Engineer with 8+ years of professional software-development experience.',
    'I am building independently verifiable portfolio evidence through personal projects. Employer-project implementation details, technologies, processes, and outcomes are confidential.',
    'I use AI-assisted development as a supporting tool and verify the results.',
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
        'Develop and maintain software. Project details, technologies, processes, and outcomes are confidential.',
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
      'Software Development',
      'Backend Development',
      'System Design',
      'Data Management',
      'Software Quality',
      'Technical Documentation',
    ],
    tools: ['AI-assisted Development'],
    languages: ['Russian (native)', 'English (level being assessed)'],
  },
  projects: [
    {
      name: 'Personal Finance Tracker',
      description:
        'A private personal learning project. Public evidence will be claimed only after confidentiality, history, licensing, data, and reproducibility review.',
      role: 'Private learning project',
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
