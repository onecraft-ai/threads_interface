"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { DownloadSection } from "@/components/ui/download-section";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSEOData, generateStructuredData } from "@/lib/utils";
import { useState, useEffect } from "react";
import { 
  Zap, 
  Target,
  Sparkles,
  X,
  Rocket,
  Users,
  TrendingUp,
  Globe,
  ArrowRight,
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
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(0);
  const [cssUrl, setCssUrl] = useState('https://threadshelper.com/boathouse-styles.css');

  useEffect(() => {
    const launchDate = new Date('2025-08-10');
    const today = new Date();
    const timeDiff = launchDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysUntilLaunch(Math.max(0, daysDiff));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      setCssUrl(`${window.location.protocol}//${window.location.host}/boathouse-styles.css`);
    }
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

  // Close modals on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDownloadModalOpen(false);
        setIsPaymentModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

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
      title: "Business Contact Research",
      description: "Advanced research tools that help you discover and analyze your ideal customers, partners, and business contacts in Threads discussions"
    },
    {
      icon: Target,
      title: "Networking Intelligence",
      description: "Get detailed insights and analytics on potential business relationships, conversation patterns, and networking opportunities"
    },
    {
      icon: UserCheck,
      title: "Relationship Mapping",
      description: "Visualize and track business relationships, identify key influencers, and understand network connections in your industry"
    },
    {
      icon: BarChart3,
      title: "Business Analytics Dashboard",
      description: "Comprehensive analytics on contact research, networking insights, relationship building progress, and business opportunities"
    }
  ] : [
    {
      icon: MessageCircle,
      title: "Исследование бизнес-контактов",
      description: "Продвинутые инструменты исследования, которые помогают обнаруживать и анализировать идеальных клиентов, партнеров и бизнес-контакты в дискуссиях Threads"
    },
    {
      icon: Target,
      title: "Сетевая аналитика",
      description: "Получайте детальные инсайты и аналитику по потенциальным деловым отношениям, паттернам разговоров и возможностям нетворкинга"
    },
    {
      icon: UserCheck,
      title: "Картографирование отношений",
      description: "Визуализируйте и отслеживайте деловые отношения, определяйте ключевых влиятелей и понимайте сетевые связи в вашей отрасли"
    },
    {
      icon: BarChart3,
      title: "Панель бизнес-аналитики",
      description: "Комплексная аналитика по исследованию контактов, сетевым инсайтам, прогрессу построения отношений и бизнес-возможностям"
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
      <section className="relative z-10 pt-36 sm:pt-40 md:pt-32 lg:pt-24 pb-16 px-6 min-h-[90vh] flex items-center">
        <div className="text-center max-w-6xl mx-auto w-full">
          {/* Launch Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6 sm:mb-8 mt-8 sm:mt-12 md:mt-6 lg:mt-0" role="banner">
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
                {" "}Business Intelligence
              </>
            ) : (
              <>
                Ваша{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Threads
                </span>
                {" "}Бизнес-Аналитика
              </>
            )}
          </h1>

          {/* Subtitle - SEO-optimized description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4" role="doc-subtitle">
            {language === 'en' 
              ? "Advanced business intelligence platform that analyzes Threads conversations to discover valuable contacts, research market trends, and identify networking opportunities. Get actionable insights for strategic business development."
              : "Продвинутая платформа бизнес-аналитики, которая анализирует разговоры в Threads для обнаружения ценных контактов, исследования рыночных трендов и выявления возможностей нетворкинга. Получайте практические инсайты для стратегического развития бизнеса."
            }
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4" role="list">
            {(language === 'en' ? [
              { icon: Target, text: "Contact Research" },
              { icon: MessageCircle, text: "Conversation Analytics" },
              { icon: BarChart3, text: "Business Intelligence" }
            ] : [
              { icon: Target, text: "Исследование контактов" },
              { icon: MessageCircle, text: "Аналитика разговоров" },
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6 sm:mb-8 px-4">
            <button 
              onClick={() => setIsDownloadModalOpen(true)}
              className="group btn-primary relative px-10 sm:px-14 py-4 sm:py-5 text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:scale-105 w-full sm:w-auto animate-shimmer hover:neon-cyan"
              aria-label={language === 'en' ? 'Start Free Trial of ThreadsHelper' : 'Начать бесплатный пробный период ThreadsHelper'}
            >
              <div className="flex items-center justify-center space-x-3 relative z-10">
                <div className="p-1 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce transition-transform" aria-hidden="true" />
                </div>
                <span className="group-hover:text-glow transition-all">
                  {language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}
                </span>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              </div>
            </button>
            
            <a 
              href="#features"
              className="group interactive-card px-8 sm:px-10 py-4 sm:py-5 glass border-2 border-white/30 text-white font-semibold text-base sm:text-lg rounded-full hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-500 w-full sm:w-auto relative overflow-hidden animate-shimmer"
              aria-label={language === 'en' ? 'Learn how ThreadsHelper works' : 'Узнать, как работает ThreadsHelper'}
            >
              {/* Hover фон */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center justify-center space-x-3 relative z-10">
                <span className="group-hover:text-glow transition-all">
                  {language === 'en' ? 'See How It Works' : 'Как это работает'}
                </span>
                <div className="p-1 rounded-full bg-white/10 group-hover:bg-cyan-400/20 transition-all">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" aria-hidden="true" />
                </div>
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
              <span className="text-xs sm:text-sm">{language === 'en' ? 'Research Only' : 'Только исследования'}</span>
            </div>
            <div className="flex items-center space-x-2" role="listitem">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" aria-hidden="true" />
              <span className="text-xs sm:text-sm">{language === 'en' ? 'Analytics' : 'Аналитика'}</span>
            </div>
            <div className="flex items-center space-x-2" role="listitem">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" aria-hidden="true" />
              <span className="text-xs sm:text-sm">{language === 'en' ? 'Insights' : 'Инсайты'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'How ThreadsHelper Analyzes & Researches' : 'Как ThreadsHelper анализирует и исследует'}
            </h2>
                      <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            {language === 'en' 
              ? "Your personal AI agent that operates directly from your account, analyzing your unique profile, scanning your network environment, and monitoring conversations around you to discover opportunities tailored specifically for your business goals and networking style"
              : "Ваш персональный AI-агент, который работает напрямую от вашего аккаунта, анализируя ваш уникальный профиль, сканируя ваше сетевое окружение и мониторя разговоры вокруг вас, чтобы находить возможности, созданные специально для ваших бизнес-целей и стиля нетворкинга"
            }
          </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <article 
                key={index}
                className="group interactive-card p-6 sm:p-8 glass border border-white/20 rounded-3xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 relative overflow-hidden animate-bounce-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Фоновый градиент */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Анимированные частицы */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-cyan-400/30 rounded-full animate-float" style={{animationDelay: `${index * 0.3}s`}}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-purple-400/40 rounded-full animate-float" style={{animationDelay: `${index * 0.5}s`}}></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300 inline-block">
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors filter drop-shadow-lg" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-glow transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Декоративная линия */}
                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                </div>
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
              {language === 'en' ? 'Proven Research Results' : 'Доказанные результаты исследований'}
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
              {language === 'en' 
                ? "Real businesses discovering valuable insights and identifying new opportunities with ThreadsHelper analytics platform"
                : "Реальные бизнесы обнаруживают ценные инсайты и выявляют новые возможности с аналитической платформой ThreadsHelper"
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

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-8 overflow-visible relative">
            <iframe 
              src={`https://my.boathouse.co/api/v1/pricingtableiframe?p=0bfc51c7-4c7a-4320-686e-08ddaec4447a&l=CREATEACCOUNTURL&s=${cssUrl}`}
              frameBorder="0"
              className="w-full h-[700px] rounded-lg"
              title={language === 'en' ? 'ThreadsHelper Pricing Plans' : 'Планы цен ThreadsHelper'}
            />
            {/* Прозрачный оверлей для перехвата кликов */}
            <div 
              className="absolute inset-0 rounded-lg cursor-pointer"
              onClick={() => setIsDownloadModalOpen(true)}
              title={language === 'ru' ? 'Начать бесплатный пробный период' : 'Start Free Trial'}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Ready to Transform Your Business Intelligence?' : 'Готовы трансформировать вашу бизнес-аналитику?'}
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 px-4">
            {language === 'en' 
              ? "Join thousands of businesses using advanced analytics to discover valuable insights, research market opportunities, and make data-driven networking decisions through intelligent Threads analysis."
              : "Присоединяйтесь к тысячам бизнесов, использующих продвинутую аналитику для обнаружения ценных инсайтов, исследования рыночных возможностей и принятия решений на основе данных через интеллектуальный анализ Threads."
            }
          </p>
          
          <button 
            onClick={() => setIsDownloadModalOpen(true)}
            className="group btn-primary px-10 sm:px-12 py-4 sm:py-5 text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:scale-105 animate-shimmer hover:neon-cyan"
            aria-label={language === 'en' ? 'Start Free Trial - Transform Your Business Networking' : 'Начать бесплатный пробный период - Трансформируйте ваш бизнес-нетворкинг'}
          >
            <div className="flex items-center space-x-3 relative z-10">
              <div className="p-1 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce transition-transform" aria-hidden="true" />
              </div>
              <span className="group-hover:text-glow transition-all">
                {language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}
              </span>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </button>
        </div>
      </section>

      {/* Download Section - перемещена в конец */}
      <DownloadSection />

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
              <a 
                href="https://threads.fra1.digitaloceanspaces.com/Threads%20Helper%20Privacy%20Policy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                aria-label={language === 'en' ? 'View Privacy Policy' : 'Политика конфиденциальности'}
              >
                {language === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности'}
              </a>
              <a 
                href="https://threads.fra1.digitaloceanspaces.com/Threads%20Helper%20Terms%20of%20Use.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                aria-label={language === 'en' ? 'View Terms of Use' : 'Условия использования'}
              >
                {language === 'en' ? 'Terms of Use' : 'Условия использования'}
              </a>
              <a 
                href="https://threads.fra1.digitaloceanspaces.com/Threads%20Helper%20Refund%20Policy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                aria-label={language === 'en' ? 'View Refund Policy' : 'Политика возврата'}
              >
                {language === 'en' ? 'Refund Policy' : 'Политика возврата'}
              </a>
            </nav>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center text-white/60">
            <p className="text-sm sm:text-base">&copy; 2025 ThreadsHelper. {language === 'en' ? 'All rights reserved.' : 'Все права защищены.'}</p>
          </div>
        </div>
      </footer>

      {/* Download Modal */}
      {isDownloadModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsDownloadModalOpen(false)}
        >
          <div 
            className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {language === 'ru' ? 'Скачать приложение' : 'Download App'}
                </h3>
                <p className="text-white/70">
                  {language === 'ru' 
                    ? 'Скачайте настольное приложение для работы с Threads'
                    : 'Download desktop application for Threads'
                  }
                </p>
              </div>
              <button 
                onClick={() => setIsDownloadModalOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Дубль секции загрузки */}
            <div className="p-6">
              <DownloadSection />
            </div>
          </div>
        </div>
      )}

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
              <button 
                onClick={() => {
                  setIsPaymentModalOpen(false);
                  setIsDownloadModalOpen(true);
                }}
                className="group btn-primary w-full flex items-center justify-center space-x-3 py-4 text-white rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all text-sm sm:text-base animate-shimmer hover:neon-cyan"
              >
                <div className="p-1 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce transition-transform" />
                </div>
                <span className="group-hover:text-glow transition-all">
                  {language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}
                </span>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
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
