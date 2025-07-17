"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSEOData, generateStructuredData } from "@/lib/utils";
import { useState, useEffect } from "react";
import { 
  Brain, 
  Zap, 
  Target,
  Sparkles,
  CreditCard,
  Bitcoin,
  X,
  Check,
  Rocket,
  Users,
  TrendingUp,
  Globe,
  Chrome,
  ArrowRight,
  Star,
  Shield,
  Clock,
  ChevronDown,
  Languages,
  MessageCircle,
  UserCheck,
  BarChart3,
  TrendingUp as TrendingUpIcon,
  Megaphone,
  Bot,
  Menu
} from "lucide-react";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(0);

  useEffect(() => {
    const launchDate = new Date('2025-08-10');
    const today = new Date();
    const timeDiff = launchDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysUntilLaunch(Math.max(0, daysDiff));
  }, []);

  // Update document metadata based on language
  useEffect(() => {
    const seoData = getSEOData(language);
    
    // Update title
    document.title = seoData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords.join(', '));
    
    // Update structured data
    const structuredData = generateStructuredData(language);
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
    // Update HTML lang attribute
    document.documentElement.lang = language === 'ru' ? 'ru' : 'en';
  }, [language]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false);
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLanguageDropdownOpen, isMobileMenuOpen]);

  const getDayWord = (days: number) => {
    if (language === 'ru') {
      if (days % 10 === 1 && days % 100 !== 11) return 'день';
      if ((days % 10 >= 2 && days % 10 <= 4) && (days % 100 < 10 || days % 100 >= 20)) return 'дня';
      return 'дней';
    }
    return days === 1 ? 'day' : 'days';
  };

  const features = language === 'en' ? [
    {
      icon: MessageCircle,
      title: "Smart Contact Discovery",
      description: "AI-powered agent that finds and engages with your ideal customers, partners, and business contacts in Threads discussions"
    },
    {
      icon: Target,
      title: "Automated Comment Generation",
      description: "Automatically suggests and posts relevant, contextual comments that drive engagement and build relationships with key contacts"
    },
    {
      icon: UserCheck,
      title: "Authentic Relationship Building",
      description: "Builds genuine business relationships and trust through meaningful conversations with prospects and industry contacts"
    },
    {
      icon: BarChart3,
      title: "Contact & Engagement Analytics",
      description: "Track contact discovery, engagement metrics, relationship building progress, and business opportunities generated"
    }
  ] : [
    {
      icon: MessageCircle,
      title: "Умное обнаружение контактов",
      description: "AI-агент, который находит и взаимодействует с вашими идеальными клиентами, партнерами и бизнес-контактами в дискуссиях Threads"
    },
    {
      icon: Target,
      title: "Автоматическая генерация комментариев",
      description: "Автоматически предлагает и публикует релевантные, контекстные комментарии, которые повышают вовлеченность и строят отношения с ключевыми контактами"
    },
    {
      icon: UserCheck,
      title: "Подлинное построение отношений",
      description: "Строит настоящие деловые отношения и доверие через значимые разговоры с перспективами и отраслевыми контактами"
    },
    {
      icon: BarChart3,
      title: "Аналитика контактов и вовлечения",
      description: "Отслеживайте обнаружение контактов, метрики вовлечения, прогресс построения отношений и созданные бизнес-возможности"
    }
  ];

  const plans = language === 'en' ? [
    {
      name: "Starter",
      price: 49,
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 contact discoveries/month",
        "Basic auto-commenting (review mode)",
        "Standard networking analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 149,
      period: "/month",
      description: "For growing businesses",
      features: [
        "Up to 500 contact discoveries/month",
        "Advanced auto-commenting & suggestions",
        "Real-time networking insights",
        "Priority support",
        "Custom outreach templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 399,
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contact discovery",
        "Full auto-commenting automation",
        "Advanced relationship mapping",
        "Dedicated account manager",
        "Custom CRM integrations"
      ],
      popular: false
    }
  ] : [
    {
      name: "Starter",
      price: 49,
      period: "/месяц",
      description: "Идеально для малого бизнеса",
      features: [
        "До 100 обнаружений контактов/месяц",
        "Базовое авто-комментирование (режим проверки)",
        "Стандартная аналитика нетворкинга",
        "Email поддержка"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 149,
      period: "/месяц",
      description: "Для растущего бизнеса",
      features: [
        "До 500 обнаружений контактов/месяц",
        "Продвинутое авто-комментирование и предложения",
        "Аналитика нетворкинга в реальном времени",
        "Приоритетная поддержка",
        "Кастомные шаблоны для связи"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 399,
      period: "/месяц",
      description: "Для крупных организаций",
      features: [
        "Неограниченный поиск контактов",
        "Полная автоматизация комментирования",
        "Продвинутое картирование отношений",
        "Персональный менеджер",
        "Интеграции с CRM"
      ],
      popular: false
    }
  ];

  const stats = language === 'en' ? [
    { icon: Users, number: "2.5K+", label: "Active Users" },
    { icon: TrendingUpIcon, number: "15K+", label: "Business Contacts Found" },
    { icon: MessageCircle, number: "1M+", label: "Successful Connections" }
  ] : [
    { icon: Users, number: "2.5K+", label: "Активных пользователей" },
    { icon: TrendingUpIcon, number: "15K+", label: "Найдено бизнес-контактов" },
    { icon: MessageCircle, number: "1M+", label: "Успешных подключений" }
  ];

  return (
    <BackgroundGradientAnimation>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ThreadsHelper
              </span>
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="hidden sm:flex items-center space-x-6 sm:space-x-8">
                <a href="#features" className="text-white/80 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                  {language === 'en' ? 'Features' : 'Возможности'}
                </a>
                <a href="#pricing" className="text-white/80 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                  {language === 'en' ? 'Pricing' : 'Цены'}
                </a>
                <a href="#contact" className="text-white/80 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                  {language === 'en' ? 'Contact' : 'Контакты'}
                </a>
              </div>
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                  }}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Languages className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden min-w-[100px] sm:min-w-[120px] z-50"
                  >
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm transition-colors hover:bg-white/10 ${
                        language === 'en' ? 'text-cyan-400 bg-cyan-400/20' : 'text-white'
                      }`}
                    >
                      🇺🇸 English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('ru');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm transition-colors hover:bg-white/10 ${
                        language === 'ru' ? 'text-cyan-400 bg-cyan-400/20' : 'text-white'
                      }`}
                    >
                      🇷🇺 Русский
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="sm:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className="text-white/80 hover:text-cyan-400 transition-colors text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? 'Features' : 'Возможности'}
                </a>
                <a 
                  href="#pricing" 
                  className="text-white/80 hover:text-cyan-400 transition-colors text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? 'Pricing' : 'Цены'}
                </a>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-cyan-400 transition-colors text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? 'Contact' : 'Контакты'}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-6 min-h-[90vh] flex items-center">
        <div className="text-center max-w-6xl mx-auto w-full">
          {/* Launch Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6 sm:mb-8" role="banner">
            <Megaphone className="w-4 h-4 text-cyan-400 mr-2" aria-hidden="true" />
            <span className="text-cyan-400 font-semibold text-sm">
              {language === 'en' ? 'AI Business Networking' : 'AI бизнес-нетворкинг'}
            </span>
          </div>

          {/* Main Title - H1 for SEO */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            {language === 'en' ? (
              <>
                Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Threads
                </span>
                {" "}Business Connector
              </>
            ) : (
              <>
                Ваш{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Threads
                </span>
                {" "}Бизнес-Коннектор
              </>
            )}
          </h1>

          {/* Subtitle - SEO-optimized description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4" role="doc-subtitle">
            {language === 'en' 
              ? "AI-powered agent that discovers, connects, and converts your ideal customers, partners, and business contacts on Threads. Automatically generates and posts relevant comments to build relationships and unlock opportunities."
              : "AI-агент, который обнаруживает, соединяет и конвертирует ваших идеальных клиентов, партнеров и бизнес-контакты в Threads. Автоматически генерирует и публикует релевантные комментарии для построения отношений и открытия возможностей."
            }
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4" role="list">
            {(language === 'en' ? [
              { icon: Target, text: "Contact Discovery" },
              { icon: MessageCircle, text: "Auto-Commenting" },
              { icon: BarChart3, text: "Business Analytics" }
            ] : [
              { icon: Target, text: "Поиск контактов" },
              { icon: MessageCircle, text: "Авто-комментирование" },
              { icon: BarChart3, text: "Бизнес-аналитика" }
            ]).map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                role="listitem"
              >
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" aria-hidden="true" />
                <span className="text-white font-medium text-sm sm:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              aria-label={language === 'en' ? 'Start Free Trial of ThreadsHelper' : 'Начать бесплатный пробный период ThreadsHelper'}
            >
              <div className="flex items-center justify-center space-x-3">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce transition-transform" aria-hidden="true" />
                <span>{language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}</span>
              </div>
            </button>
            
            <a 
              href="#features"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-medium text-base sm:text-lg rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 w-full sm:w-auto"
              aria-label={language === 'en' ? 'Learn how ThreadsHelper works' : 'Узнать, как работает ThreadsHelper'}
            >
              <div className="flex items-center justify-center space-x-3">
                <span>{language === 'en' ? 'See How It Works' : 'Как это работает'}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </a>
          </div>

          {/* Social Proof */}
          <p className="text-white/60 text-sm sm:text-base mb-8 sm:mb-12 px-4">
            {language === 'en' 
              ? "Join 2,500+ businesses already building valuable networks with ThreadsHelper"
              : "Присоединяйтесь к 2 500+ бизнесам, которые уже строят ценные сети с ThreadsHelper"
            }
          </p>

          {/* Value Proposition */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/60 px-4" role="list">
            <div className="flex items-center space-x-2" role="listitem">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" aria-hidden="true" />
              <span className="text-xs sm:text-sm">{language === 'en' ? 'No Spam' : 'Без спама'}</span>
            </div>
            <div className="flex items-center space-x-2" role="listitem">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" aria-hidden="true" />
              <span className="text-xs sm:text-sm">{language === 'en' ? 'Auto-Comments' : 'Авто-комментарии'}</span>
            </div>
            <div className="flex items-center space-x-2" role="listitem">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" aria-hidden="true" />
              <span className="text-xs sm:text-sm">{language === 'en' ? 'Measurable' : 'Измеримо'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'How ThreadsHelper Discovers & Connects' : 'Как ThreadsHelper находит и соединяет'}
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              {language === 'en' 
                ? "Advanced AI technology that finds, analyzes, and automatically engages with your ideal customers, partners, and business contacts through intelligent comment generation"
                : "Продвинутая AI-технология, которая находит, анализирует и автоматически взаимодействует с идеальными клиентами, партнерами и бизнес-контактами через интеллектуальную генерацию комментариев"
              }
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <article 
                key={index}
                className="group p-4 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Proven Networking Results' : 'Доказанные результаты нетворкинга'}
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
              {language === 'en' 
                ? "Real businesses building valuable connections and discovering new opportunities with ThreadsHelper"
                : "Реальные бизнесы строят ценные связи и обнаруживают новые возможности с ThreadsHelper"
              }
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 sm:p-6" role="region" aria-labelledby={`stat-${index}`}>
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" aria-hidden="true" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2" id={`stat-${index}`}>{stat.number}</div>
                <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Simple, Transparent Pricing' : 'Простые, прозрачные цены'}
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
              {language === 'en' 
                ? "Choose the plan that fits your business size and customer acquisition goals"
                : "Выберите план, который подходит размеру вашего бизнеса и целям привлечения клиентов"
              }
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-black/40 backdrop-blur-xl border ${plan.popular ? 'border-cyan-400 scale-105' : 'border-white/20'} rounded-2xl p-6 sm:p-8 hover:bg-black/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{language === 'en' ? 'Most Popular' : 'Популярный'}</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-xs sm:text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/60 ml-1 text-sm sm:text-base">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' 
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Ready to Transform Your Business Networking?' : 'Готовы трансформировать ваш бизнес-нетворкинг?'}
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 px-4">
            {language === 'en' 
              ? "Join thousands of businesses using AI to discover valuable contacts, build meaningful relationships, and unlock new opportunities through intelligent Threads networking."
              : "Присоединяйтесь к тысячам бизнесов, использующих AI для обнаружения ценных контактов, построения значимых отношений и открытия новых возможностей через интеллектуальный нетворкинг в Threads."
            }
          </p>
          
          <button 
            onClick={() => setIsPaymentModalOpen(true)}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            aria-label={language === 'en' ? 'Start Free Trial - Transform Your Business Networking' : 'Начать бесплатный пробный период - Трансформируйте ваш бизнес-нетворкинг'}
          >
            <div className="flex items-center space-x-3">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce transition-transform" aria-hidden="true" />
              <span>{language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}</span>
            </div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ThreadsHelper
              </span>
            </div>
            
            <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <a 
                href="mailto:support@threadshelper.com" 
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                aria-label={language === 'en' ? 'Contact ThreadsHelper Support' : 'Связаться с поддержкой ThreadsHelper'}
              >
                support@threadshelper.com
              </a>
              <a 
                href="#features" 
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                aria-label={language === 'en' ? 'View ThreadsHelper Features' : 'Посмотреть возможности ThreadsHelper'}
              >
                {language === 'en' ? 'Features' : 'Возможности'}
              </a>
            </nav>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center text-white/60">
            <p className="text-sm sm:text-base">&copy; 2025 ThreadsHelper. {language === 'en' ? 'All rights reserved.' : 'Все права защищены.'}</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {language === 'en' ? 'Start Your Free Trial' : 'Начать бесплатный пробный период'}
              </h3>
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {language === 'en' ? 'Free' : 'Бесплатно'}
              </div>
              <div className="text-white/70 text-sm sm:text-base">
                {language === 'en' ? '14-day free trial' : '14-дневный бесплатный пробный период'}
              </div>
              <div className="text-cyan-400 text-xs sm:text-sm">
                {language === 'en' ? 'No credit card required' : 'Кредитная карта не требуется'}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-3 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-sm sm:text-base">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}</span>
              </button>
            </div>

            <div className="mt-4 sm:mt-6 text-center text-white/60 text-xs sm:text-sm">
              <span>
                {language === 'en' ? 'No commitment • Cancel anytime' : 'Никаких обязательств • Отменить в любое время'}
              </span>
            </div>
          </div>
        </div>
      )}
    </BackgroundGradientAnimation>
  );
}
