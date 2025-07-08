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
      subtitle: 'Browser extension for advanced Threads functionality',
      description: 'Powerful browser extension that enhances your Threads experience with advanced features and improved workflow.',
      getExtension: 'Get Extension',
      learnMore: 'Learn More',
      features: {
        title: 'Key Features',
        enhanced: {
          title: 'Enhanced Interface',
          description: 'Improved user interface with additional functionality'
        },
        productivity: {
          title: 'Productivity Tools',
          description: 'Advanced tools to boost your productivity on Threads'
        },
        analytics: {
          title: 'Analytics Dashboard',
          description: 'Detailed analytics and insights for your Threads activity'
        },
        automation: {
          title: 'Smart Automation',
          description: 'Automate routine tasks and streamline your workflow'
        }
      },
      cta: {
        title: 'Ready to Get Started?',
        description: 'Join thousands of users who have enhanced their Threads experience',
        button: 'Download Extension'
      }
    },
    // Promo page (AI features)
    promo: {
      badge: 'Pre-order Open',
      title: 'Find the Right People in Threads with AI',
      subtitle: 'Smart system automatically scans Threads feed through your account, using artificial intelligence to find people based on specified criteria.',
      features: [
        { text: 'Smart Scanning' },
        { text: 'AI Profile Analysis' },
        { text: 'Precise Filtering' }
      ],
      cta: 'Pre-order Now',
      launch: 'Launch in',
      days: 'days',
      price: 'Professional plan for 1 month - $9',
      howItWorks: {
        title: 'How Threads AI Works',
        description: 'Connect your account, set search criteria and get results automatically',
        steps: [
          {
            title: 'Connect Account',
            description: 'Securely connect your Threads account to our system using extension'
          },
          {
            title: 'Set Criteria',
            description: 'Define search parameters: interests, location, activity in web panel'
          },
          {
            title: 'Get Results',
            description: 'System automatically scans and finds the right people'
          }
        ]
      },
      plans: {
        title: 'Choose Your Plan',
        description: 'Each plan includes monthly token package for AI profile analysis',
        starter: {
          name: 'Starter',
          description: 'For research beginners',
          tokens: '110 tokens/month',
          people: '~20 relevant people with 90%+ accuracy',
          features: [
            'Up to 110 AI searches per month',
            'Basic filtering criteria',
            'Email support',
            'Export results'
          ]
        },
        professional: {
          name: 'Professional',
          description: 'For active users',
          tokens: '500 tokens/month',
          people: '~90 relevant people with 90%+ accuracy',
          features: [
            'Up to 500 AI searches per month',
            'Advanced filters',
            'Priority support',
            'API access',
            'Detailed analytics'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          description: 'For teams and agencies',
          tokens: '5,000 tokens/month',
          people: '~833 relevant people with 90%+ accuracy',
          features: [
            'Up to 5,000 AI searches per month',
            'Custom criteria',
            'Personal manager',
            'Integrations',
            'White label'
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
      subtitle: 'Браузерное расширение для расширенного функционала Threads',
      description: 'Мощное браузерное расширение, которое улучшает ваш опыт в Threads с дополнительными функциями и улучшенным рабочим процессом.',
      getExtension: 'Получить Расширение',
      learnMore: 'Узнать Больше',
      features: {
        title: 'Ключевые Функции',
        enhanced: {
          title: 'Улучшенный Интерфейс',
          description: 'Улучшенный пользовательский интерфейс с дополнительным функционалом'
        },
        productivity: {
          title: 'Инструменты Продуктивности',
          description: 'Продвинутые инструменты для повышения продуктивности в Threads'
        },
        analytics: {
          title: 'Панель Аналитики',
          description: 'Детальная аналитика и инсайты вашей активности в Threads'
        },
        automation: {
          title: 'Умная Автоматизация',
          description: 'Автоматизация рутинных задач и оптимизация рабочего процесса'
        }
      },
      cta: {
        title: 'Готовы Начать?',
        description: 'Присоединяйтесь к тысячам пользователей, которые улучшили свой опыт в Threads',
        button: 'Скачать Расширение'
      }
    },
    // Promo page (AI features)
    promo: {
      badge: 'Предзаказ открыт',
      title: 'Найдите нужных людей в Threads с помощью AI',
      subtitle: 'Умная система автоматически сканирует ленту Threads через ваш аккаунт, используя искусственный интеллект для поиска нужных людей по заданным критериям.',
      features: [
        { text: 'Умное сканирование' },
        { text: 'AI анализ профилей' },
        { text: 'Точная фильтрация' }
      ],
      cta: 'Оформить предзаказ',
      launch: 'Запуск через',
      days: 'дней',
      price: 'Professional план на месяц за $9',
      howItWorks: {
        title: 'Как работает Threads AI',
        description: 'Подключите свой аккаунт, настройте критерии поиска и получайте результаты автоматически',
        steps: [
          {
            title: 'Подключите аккаунт',
            description: 'Безопасно подключите ваш Threads аккаунт к нашей системе с помощью расширения'
          },
          {
            title: 'Настройте критерии',
            description: 'Задайте параметры поиска: интересы, локация, активность в веб-панели'
          },
          {
            title: 'Получайте результаты',
            description: 'Система автоматически сканирует и находит нужных людей'
          }
        ]
      },
      plans: {
        title: 'Выберите ваш план',
        description: 'Каждый план включает месячный пакет токенов для AI анализа профилей',
        starter: {
          name: 'Starter',
          description: 'Для начинающих исследователей',
          tokens: '110 токенов/месяц',
          people: '~20 нужных людей с точностью 90%+',
          features: [
            'До 110 AI поисков в месяц',
            'Базовые критерии фильтрации',
            'Email поддержка',
            'Экспорт результатов'
          ]
        },
        professional: {
          name: 'Professional',
          description: 'Для активных пользователей',
          tokens: '500 токенов/месяц',
          people: '~90 нужных людей с точностью 90%+',
          features: [
            'До 500 AI поисков в месяц',
            'Расширенные фильтры',
            'Приоритетная поддержка',
            'API доступ',
            'Детальная аналитика'
          ]
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Для команд и агентств',
          tokens: '5,000 токенов/месяц',
          people: '~833 нужных людей с точностью 90%+',
          features: [
            'До 5,000 AI поисков в месяц',
            'Кастомные критерии',
            'Персональный менеджер',
            'Интеграции',
            'Белый лейбл'
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