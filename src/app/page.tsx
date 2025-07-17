"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useLanguage } from "@/components/providers/LanguageProvider";
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
  Bot
} from "lucide-react";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(0);

  useEffect(() => {
    const launchDate = new Date('2025-08-10');
    const today = new Date();
    const timeDiff = launchDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysUntilLaunch(Math.max(0, daysDiff));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLanguageDropdownOpen]);

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
      title: "Precision Targeting & Networking",
      description: "Identifies key decision makers, potential partners, and qualified leads based on their activity and interests"
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
      title: "Точный таргетинг и нетворкинг",
      description: "Выявляет ключевых лиц, принимающих решения, потенциальных партнеров и квалифицированных лидов на основе их активности и интересов"
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
        "Basic contact filtering",
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
        "Advanced contact profiling & targeting",
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
        "Multi-team collaboration",
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
        "Базовая фильтрация контактов",
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
        "Продвинутое профилирование и таргетинг",
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
        "Командное сотрудничество",
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
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ThreadsAgent
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-cyan-400 transition-colors">
                {language === 'en' ? 'Features' : 'Возможности'}
              </a>
              <a href="#pricing" className="text-white/80 hover:text-cyan-400 transition-colors">
                {language === 'en' ? 'Pricing' : 'Цены'}
              </a>
              <a href="#contact" className="text-white/80 hover:text-cyan-400 transition-colors">
                {language === 'en' ? 'Contact' : 'Контакты'}
              </a>
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Languages className="w-4 h-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden min-w-[120px] z-50"
                  >
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-white/10 ${
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
                      className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-white/10 ${
                        language === 'ru' ? 'text-cyan-400 bg-cyan-400/20' : 'text-white'
                      }`}
                    >
                      🇷🇺 Русский
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Launch Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8">
            <Megaphone className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">
              {language === 'en' ? 'AI Business Networking' : 'AI бизнес-нетворкинг'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
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

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? "AI-powered agent that discovers, connects, and converts your ideal customers, partners, and business contacts on Threads. Transform social conversations into business opportunities through intelligent networking."
              : "AI-агент, который обнаруживает, соединяет и конвертирует ваших идеальных клиентов, партнеров и бизнес-контакты в Threads. Превращайте социальные разговоры в бизнес-возможности через интеллектуальный нетворкинг."
            }
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(language === 'en' ? [
              { icon: Target, text: "Contact Discovery" },
              { icon: MessageCircle, text: "Smart Networking" },
              { icon: BarChart3, text: "Business Analytics" }
            ] : [
              { icon: Target, text: "Поиск контактов" },
              { icon: MessageCircle, text: "Умный нетворкинг" },
              { icon: BarChart3, text: "Бизнес-аналитика" }
            ]).map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
              >
                <feature.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <Rocket className="w-6 h-6 group-hover:animate-bounce transition-transform" />
                <span>{language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}</span>
              </div>
            </button>
            
            <a 
              href="#features"
              className="group px-8 py-4 border-2 border-white/30 text-white font-medium text-lg rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <span>{language === 'en' ? 'See How It Works' : 'Как это работает'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Social Proof */}
          <p className="text-white/60 text-sm md:text-base">
            {language === 'en' 
              ? "Join 2,500+ businesses already building valuable networks with ThreadsAgent"
              : "Присоединяйтесь к 2 500+ бизнесам, которые уже строят ценные сети с ThreadsAgent"
            }
          </p>

          {/* Value Proposition */}
          <div className="mt-12 flex items-center justify-center space-x-6 text-white/60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">{language === 'en' ? 'No Spam' : 'Без спама'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserCheck className="w-5 h-5 text-blue-400" />
              <span className="text-sm">{language === 'en' ? 'Authentic' : 'Подлинно'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-sm">{language === 'en' ? 'Measurable' : 'Измеримо'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'How ThreadsAgent Discovers & Connects' : 'Как ThreadsAgent находит и соединяет'}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Advanced AI technology that finds, analyzes, and connects you with your ideal customers, partners, and business contacts on Threads"
                : "Продвинутая AI-технология, которая находит, анализирует и соединяет вас с идеальными клиентами, партнерами и бизнес-контактами в Threads"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-20 px-6 bg-gradient-to-r from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Proven Networking Results' : 'Доказанные результаты нетворкинга'}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Real businesses building valuable connections and discovering new opportunities with ThreadsAgent"
                : "Реальные бизнесы строят ценные связи и обнаруживают новые возможности с ThreadsAgent"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Simple, Transparent Pricing' : 'Простые, прозрачные цены'}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Choose the plan that fits your business size and customer acquisition goals"
                : "Выберите план, который подходит размеру вашего бизнеса и целям привлечения клиентов"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-black/40 backdrop-blur-xl border ${plan.popular ? 'border-cyan-400 scale-105' : 'border-white/20'} rounded-2xl p-8 hover:bg-black/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{language === 'en' ? 'Most Popular' : 'Популярный'}</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/60 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
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
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Ready to Transform Your Business Networking?' : 'Готовы трансформировать ваш бизнес-нетворкинг?'}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {language === 'en' 
              ? "Join thousands of businesses using AI to discover valuable contacts, build meaningful relationships, and unlock new opportunities through intelligent Threads networking."
              : "Присоединяйтесь к тысячам бизнесов, использующих AI для обнаружения ценных контактов, построения значимых отношений и открытия новых возможностей через интеллектуальный нетворкинг в Threads."
            }
          </p>
          
          <button 
            onClick={() => setIsPaymentModalOpen(true)}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <Rocket className="w-6 h-6 group-hover:animate-bounce transition-transform" />
              <span>{language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ThreadsAgent
              </span>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="mailto:support@threadsagent.com" className="text-white/60 hover:text-cyan-400 transition-colors">
                support@threadsagent.com
              </a>
              <a href="#features" className="text-white/60 hover:text-cyan-400 transition-colors">
                {language === 'en' ? 'Features' : 'Возможности'}
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2025 ThreadsAgent. {language === 'en' ? 'All rights reserved.' : 'Все права защищены.'}</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                {language === 'en' ? 'Start Your Free Trial' : 'Начать бесплатный пробный период'}
              </h3>
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-2">
                {language === 'en' ? 'Free' : 'Бесплатно'}
              </div>
              <div className="text-white/70">
                {language === 'en' ? '14-day free trial' : '14-дневный бесплатный пробный период'}
              </div>
              <div className="text-cyan-400 text-sm">
                {language === 'en' ? 'No credit card required' : 'Кредитная карта не требуется'}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-3 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                <Rocket className="w-5 h-5" />
                <span>{language === 'en' ? 'Start Free Trial' : 'Начать бесплатный пробный период'}</span>
              </button>
            </div>

            <div className="mt-6 text-center text-white/60 text-sm">
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
