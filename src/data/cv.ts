import type { Locale } from '../i18n/locales';

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

export const cvByLocale: Record<Locale, Cv> = {
  en: {
    summary: [
      'Java backend developer with 8+ years in finance and enterprise systems.',
      'Builds Vaadin-based UIs from Figma and ships Java business logic.',
      'Comfortable with new features and legacy modernization in teams of any size.',
    ],
    experience: [
      {
        company: 'Central Bank of the Russian Federation',
        companyUrl: 'https://www.cbr.ru',
        location: 'Moscow, Russia',
        role: 'Java Developer',
        start: '2019-12',
        end: 'present',
        highlights: [
          'Built banking operations platform features as part of the IT strategy.',
          'Implemented Vaadin UI components from Figma and customized styles.',
          'Delivered Java business logic for core workflows.',
        ],
      },
      {
        company: 'Central Bank of the Russian Federation',
        companyUrl: 'https://www.cbr.ru',
        location: 'Moscow, Russia',
        role: 'Junior Java Developer',
        start: '2017-10',
        end: '2019-12',
        highlights: [
          'Maintained JSP, CSS, and JavaScript frontends for internal apps.',
          'Introduced JUnit test coverage to improve reliability.',
        ],
      },
    ],
    education: [
      {
        school: 'Moscow Aviation Institute (National Research University)',
        degree: 'MSc',
        field: 'Management (Systems Management, Informatics, and Power Engineering)',
        year: '2023',
        type: 'degree',
      },
      {
        school: 'Moscow Aviation Institute (National Research University)',
        degree: 'BSc',
        field: 'Applied Informatics (Engineering Economics and Humanities)',
        year: '2017',
        type: 'degree',
      },
      {
        school: 'Luxoft',
        degree: 'Course',
        field: 'JVA-008 Java SE 7',
        year: '2019',
        type: 'course',
      },
      {
        school: 'Moscow Aviation Institute',
        degree: 'Course',
        field: 'Java fundamentals',
        year: '2017',
        type: 'course',
      },
    ],
    skills: {
      core: ['Java', 'SQL', 'Backend development', 'Testing (JUnit)'],
      tools: [
        'Git',
        'GitLab',
        'Jira',
        'Vaadin',
        'React',
        'CSS',
        'JavaScript',
        'JSP',
        'Figma',
      ],
      languages: ['Russian (native)', 'English (C1)'],
    },
    projects: [
      {
        name: 'Banking Operations Platform',
        description:
          'Built UI components and Java business logic for internal workflows.',
        role: 'Java Developer',
        tech: ['Java', 'Vaadin', 'SQL', 'Figma'],
      },
      {
        name: 'Personal Website',
        description: 'Designed and built a React-based portfolio site.',
        role: 'Creator',
        tech: ['React', 'JavaScript', 'CSS'],
      },
    ],
  },
  ru: {
    summary: [
      'Java backend-разработчик с опытом 8+ лет в финансах и enterprise-системах.',
      'Делаю интерфейсы на Vaadin по макетам Figma и реализую бизнес-логику на Java.',
      'Одинаково уверенно работаю с новыми функциями и модернизацией легаси.',
    ],
    experience: [
      {
        company: 'Центральный банк Российской Федерации',
        companyUrl: 'https://www.cbr.ru',
        location: 'Москва, Россия',
        role: 'Java-разработчик',
        start: '2019-12',
        end: 'present',
        highlights: [
          'Разрабатывал функции платформы банковских операций в рамках ИТ-стратегии.',
          'Реализовывал UI-компоненты Vaadin по Figma и настраивал стили.',
          'Поставлял Java-бизнес-логику для ключевых рабочих процессов.',
        ],
      },
      {
        company: 'Центральный банк Российской Федерации',
        companyUrl: 'https://www.cbr.ru',
        location: 'Москва, Россия',
        role: 'Младший Java-разработчик',
        start: '2017-10',
        end: '2019-12',
        highlights: [
          'Поддерживал внутренние приложения на JSP, CSS и JavaScript.',
          'Добавил покрытие JUnit-тестами для повышения надежности.',
        ],
      },
    ],
    education: [
      {
        school: 'Московский авиационный институт (НИУ)',
        degree: 'Магистр',
        field:
          'Менеджмент (управление системами, информатика и электроэнергетика)',
        year: '2023',
        type: 'degree',
      },
      {
        school: 'Московский авиационный институт (НИУ)',
        degree: 'Бакалавр',
        field:
          'Прикладная информатика (инженерная экономика и гуманитарные дисциплины)',
        year: '2017',
        type: 'degree',
      },
      {
        school: 'Luxoft',
        degree: 'Курс',
        field: 'JVA-008 Java SE 7',
        year: '2019',
        type: 'course',
      },
      {
        school: 'Московский авиационный институт',
        degree: 'Курс',
        field: 'Основы Java',
        year: '2017',
        type: 'course',
      },
    ],
    skills: {
      core: ['Java', 'SQL', 'Backend-разработка', 'Тестирование (JUnit)'],
      tools: [
        'Git',
        'GitLab',
        'Jira',
        'Vaadin',
        'React',
        'CSS',
        'JavaScript',
        'JSP',
        'Figma',
      ],
      languages: ['Русский (родной)', 'Английский (C1)'],
    },
    projects: [
      {
        name: 'Платформа банковских операций',
        description:
          'Реализовал UI-компоненты и бизнес-логику на Java для внутренних процессов.',
        role: 'Java-разработчик',
        tech: ['Java', 'Vaadin', 'SQL', 'Figma'],
      },
      {
        name: 'Личный сайт',
        description: 'Спроектировал и реализовал портфолио-сайт на React.',
        role: 'Автор',
        tech: ['React', 'JavaScript', 'CSS'],
      },
    ],
  },
};

export const getCv = (locale: Locale): Cv => cvByLocale[locale];

export const cv = cvByLocale.en;
