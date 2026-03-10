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
    'Java-разработчик с опытом более 8 лет в финансах и корпоративных системах.',
    'Собираю интерфейсы на Vaadin по макетам из Figma и пишу бизнес-логику на Java.',
    'Уверенно работаю и с новыми функциями, и с модернизацией легаси в командах любого масштаба.',
  ],
  experience: [
    {
      company: 'Банк России',
      companyUrl: 'https://www.cbr.ru',
      location: 'Москва, Россия',
      role: 'Java-разработчик',
      start: '2019-12',
      end: 'present',
      highlights: [
        'Разрабатываю функциональность платформы банковских операций в рамках ИТ-стратегии.',
        'Реализую компоненты интерфейса на Vaadin по макетам из Figma и адаптирую стили.',
        'Пишу Java-бизнес-логику для ключевых пользовательских сценариев.',
      ],
    },
    {
      company: 'Банк России',
      companyUrl: 'https://www.cbr.ru',
      location: 'Москва, Россия',
      role: 'Младший Java-разработчик',
      start: '2017-10',
      end: '2019-12',
      highlights: [
        'Поддерживал фронтенды внутренних приложений на JSP, CSS и JavaScript.',
        'Добавил покрытие тестами на JUnit, чтобы повысить надёжность изменений.',
      ],
    },
  ],
  education: [
    {
      school: 'Московский авиационный институт (национальный исследовательский университет)',
      degree: 'Магистр',
      field: 'Менеджмент (системное управление, информатика и электроэнергетика)',
      year: '2023',
      type: 'degree',
    },
    {
      school: 'Московский авиационный институт (национальный исследовательский университет)',
      degree: 'Бакалавр',
      field: 'Прикладная информатика (в экономике и гуманитарных областях)',
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
    core: ['Java', 'SQL', 'Бэкенд-разработка', 'Тестирование (JUnit)'],
    tools: ['Git', 'GitLab', 'Jira', 'Vaadin', 'React', 'CSS', 'JavaScript', 'JSP', 'Figma'],
    languages: ['Русский (родной)', 'Английский (C1)'],
  },
  projects: [
    {
      name: 'Платформа банковских операций',
      description: 'Разрабатывал UI-компоненты и Java-бизнес-логику для внутренних процессов.',
      role: 'Java-разработчик',
      tech: ['Java', 'Vaadin', 'SQL', 'Figma'],
    },
    {
      name: 'Личный сайт',
      description: 'Спроектировал и собрал персональный сайт-портфолио на Astro.',
      role: 'Автор',
      tech: ['Astro', 'TypeScript', 'CSS'],
    },
  ],
};
