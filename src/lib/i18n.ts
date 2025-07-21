export type Language = 'en' | 'ru';

export const translations = {
  en: {
    // Navigation
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      contact: 'Contact'
    },
    // Home page
    home: {
      title: 'Enhance Your Threads Experience',
      subtitle: 'Business intelligence platform for Threads analytics',
      description: 'Powerful business intelligence platform that analyzes your Threads conversations with advanced research tools and actionable insights.',
      getExtension: 'Get Platform Access',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        enhanced: {
          title: 'Advanced Analytics',
          description: 'Comprehensive conversation analysis with business intelligence'
        },
        productivity: {
          title: 'Research Tools',
          description: 'Professional tools to analyze trends and identify opportunities'
        },
        analytics: {
          title: 'Insights Dashboard',
          description: 'Detailed business analytics and market insights for your industry'
        },
        automation: {
          title: 'Market Intelligence',
          description: 'Analyze market trends and networking patterns for strategic decisions'
        }
      },
      cta: {
        title: 'Ready to Get Started?',
        description: 'Join thousands of businesses who have enhanced their market research',
        button: 'Start Research'
      }
    },
    // Promo page (AI features)
    promo: {
      badge: 'Research Platform Available',
      title: 'Research and Analyze People in Threads with AI',
      subtitle: 'Advanced analytics system that analyzes Threads conversations to provide business intelligence and market research insights based on specified criteria.',
      features: [
        { text: 'Smart Analytics' },
        { text: 'AI Profile Research' },
        { text: 'Precise Insights' }
      ],
      cta: 'Start Research',
      launch: 'Available in',
      days: 'days',
      price: 'Professional plan for 1 month - $49',
      howItWorks: {
        title: 'How Threads Research Works',
        description: 'Connect your account, set research criteria and get analytics automatically',
        steps: [
          {
            title: 'Connect Account',
            description: 'Securely connect your Threads account to our analytics platform'
          },
          {
            title: 'Set Research Criteria',
            description: 'Define analysis parameters: interests, demographics, activity patterns'
          },
          {
            title: 'Get Insights',
            description: 'Receive comprehensive analytics and business intelligence reports'
          }
        ]
      },
      plans: {
        title: 'Choose Your Research Plan',
        description: 'Each plan includes monthly analytics credits for AI-powered business research',
        starter: {
          name: 'Researcher',
          description: 'For market research beginners',
          tokens: '110 research credits/month',
          people: '~20 detailed profiles with 90%+ accuracy',
          features: [
            'Up to 110 AI research queries per month',
            'Basic analytics criteria',
            'Email support',
            'Export research data'
          ]
        },
        professional: {
          name: 'Business',
          description: 'For active business analysts',
          tokens: '500 research credits/month',
          people: '~90 detailed profiles with 90%+ accuracy',
          features: [
            'Up to 500 AI research queries per month',
            'Advanced analytics filters',
            'Priority support',
            'API access',
            'Detailed business reports'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          description: 'For research teams and agencies',
          tokens: '5,000 research credits/month',
          people: '~833 detailed profiles with 90%+ accuracy',
          features: [
            'Up to 5,000 AI research queries per month',
            'Custom research criteria',
            'Personal research manager',
            'CRM integrations',
            'White label analytics'
          ]
        }
      }
    },
    // Common
    common: {
      backToHome: 'Back to Home',
      comingSoon: 'Coming Soon'
    }
  },
  ru: {
    // Navigation
    nav: {
      features: 'Возможности',
      pricing: 'Цены',
      contact: 'Контакты'
    },
    // Home page
    home: {
      title: 'Улучшите Ваш Опыт в Threads',
      subtitle: 'Платформа бизнес-аналитики для анализа Threads',
      description: 'Мощная платформа бизнес-аналитики, которая анализирует ваши разговоры в Threads с продвинутыми инструментами исследования и практическими инсайтами.',
      getExtension: 'Получить Доступ к Платформе',
      learnMore: 'Узнать Больше',
      features: {
        title: 'Ключевые Функции',
        enhanced: {
          title: 'Продвинутая Аналитика',
          description: 'Комплексный анализ разговоров с бизнес-аналитикой'
        },
        productivity: {
          title: 'Инструменты Исследования',
          description: 'Профессиональные инструменты для анализа трендов и выявления возможностей'
        },
        analytics: {
          title: 'Панель Инсайтов',
          description: 'Детальная бизнес-аналитика и рыночные инсайты для вашей отрасли'
        },
        automation: {
          title: 'Рыночная Аналитика',
          description: 'Анализируйте рыночные тренды и паттерны нетворкинга для стратегических решений'
        }
      },
      cta: {
        title: 'Готовы Начать?',
        description: 'Присоединяйтесь к тысячам бизнесов, которые улучшили свои рыночные исследования',
        button: 'Начать Исследование'
      }
    },
    // Promo page (AI features)
    promo: {
      badge: 'Исследовательская платформа доступна',
      title: 'Исследуйте и анализируйте людей в Threads с помощью AI',
      subtitle: 'Продвинутая аналитическая система, которая анализирует разговоры в Threads для предоставления бизнес-аналитики и инсайтов рыночных исследований на основе заданных критериев.',
      features: [
        { text: 'Умная аналитика' },
        { text: 'AI исследование профилей' },
        { text: 'Точные инсайты' }
      ],
      cta: 'Начать исследование',
      launch: 'Доступно через',
      days: 'дней',
      price: 'Professional план на месяц за $49',
      howItWorks: {
        title: 'Как работает исследование Threads',
        description: 'Подключите аккаунт, установите критерии исследования и получайте аналитику автоматически',
        steps: [
          {
            title: 'Подключите аккаунт',
            description: 'Безопасно подключите ваш Threads аккаунт к нашей аналитической платформе'
          },
          {
            title: 'Установите критерии исследования',
            description: 'Определите параметры анализа: интересы, демография, паттерны активности'
          },
          {
            title: 'Получайте инсайты',
            description: 'Получайте комплексную аналитику и отчеты бизнес-аналитики'
          }
        ]
      },
      plans: {
        title: 'Выберите ваш исследовательский план',
        description: 'Каждый план включает месячные аналитические кредиты для AI-исследований бизнеса',
        starter: {
          name: 'Исследователь',
          description: 'Для начинающих маркетинговых исследователей',
          tokens: '110 исследовательских кредитов/месяц',
          people: '~20 детальных профилей с точностью 90%+',
          features: [
            'До 110 AI исследовательских запросов в месяц',
            'Базовые критерии аналитики',
            'Email поддержка',
            'Экспорт исследовательских данных'
          ]
        },
        professional: {
          name: 'Бизнес',
          description: 'Для активных бизнес-аналитиков',
          tokens: '500 исследовательских кредитов/месяц',
          people: '~90 детальных профилей с точностью 90%+',
          features: [
            'До 500 AI исследовательских запросов в месяц',
            'Продвинутые аналитические фильтры',
            'Приоритетная поддержка',
            'API доступ',
            'Детальные бизнес-отчеты'
          ]
        },
        enterprise: {
          name: 'Корпоративный',
          description: 'Для исследовательских команд и агентств',
          tokens: '5,000 исследовательских кредитов/месяц',
          people: '~833 детальных профилей с точностью 90%+',
          features: [
            'До 5,000 AI исследовательских запросов в месяц',
            'Кастомные критерии исследования',
            'Персональный менеджер исследований',
            'Интеграции с CRM',
            'Белый лейбл аналитики'
          ]
        }
      }
    },
    // Common
    common: {
      backToHome: 'Вернуться на главную',
      comingSoon: 'Скоро'
    }
  }
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  
  return (typeof value === 'string' ? value : key);
};

export const defaultLanguage: Language = 'en'; 