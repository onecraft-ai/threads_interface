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
  Languages
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
      icon: Sparkles,
      title: "Enhanced Interface",
      description: "Beautiful and intuitive interface that makes Threads more enjoyable to use"
    },
    {
      icon: Zap,
      title: "Smart Tools",
      description: "Powerful productivity features that help you get more done in less time"
    },
    {
      icon: Target,
      title: "AI-Powered Features",
      description: "Advanced AI capabilities for better content discovery and engagement"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays secure with our privacy-focused approach"
    }
  ] : [
    {
      icon: Sparkles,
      title: "Улучшенный интерфейс",
      description: "Красивый и интуитивный интерфейс, который делает Threads более приятным в использовании"
    },
    {
      icon: Zap,
      title: "Умные инструменты",
      description: "Мощные функции продуктивности, которые помогают достигать большего за меньшее время"
    },
    {
      icon: Target,
      title: "AI возможности",
      description: "Продвинутые возможности ИИ для лучшего поиска контента и взаимодействия"
    },
    {
      icon: Shield,
      title: "Приватность прежде всего",
      description: "Ваши данные остаются в безопасности благодаря нашему подходу, ориентированному на конфиденциальность"
    }
  ];

  const plans = language === 'en' ? [
    {
      name: "Starter",
      price: 9,
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Enhanced Threads interface",
        "Basic productivity tools",
        "Email support",
        "Chrome extension"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 29,
      period: "/month",
      description: "For power users",
      features: [
        "All Starter features",
        "AI-powered tools",
        "Advanced analytics",
        "Priority support",
        "Early access to new features"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 99,
      period: "/month",
      description: "For teams and businesses",
      features: [
        "All Professional features",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ] : [
    {
      name: "Starter",
      price: 9,
      period: "/месяц",
      description: "Идеально для начала",
      features: [
        "Улучшенный интерфейс Threads",
        "Базовые инструменты продуктивности",
        "Email поддержка",
        "Расширение для Chrome"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 29,
      period: "/месяц",
      description: "Для продвинутых пользователей",
      features: [
        "Все функции Starter",
        "AI-инструменты",
        "Расширенная аналитика",
        "Приоритетная поддержка",
        "Ранний доступ к новинкам"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 99,
      period: "/месяц",
      description: "Для команд и бизнеса",
      features: [
        "Все функции Professional",
        "Командная работа",
        "Кастомные интеграции",
        "Персональная поддержка",
        "White-label опции"
      ],
      popular: false
    }
  ];

  const stats = language === 'en' ? [
    { icon: Users, number: "15K+", label: "Happy Users" },
    { icon: TrendingUp, number: "98%", label: "Satisfaction Rate" },
    { icon: Globe, number: "65+", label: "Countries" }
  ] : [
    { icon: Users, number: "15K+", label: "Довольных пользователей" },
    { icon: TrendingUp, number: "98%", label: "Уровень удовлетворенности" },
    { icon: Globe, number: "65+", label: "Стран" }
  ];

  return (
    <BackgroundGradientAnimation>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ThreadsHelper
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
            <Rocket className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">
              {language === 'en' ? 'Coming Soon' : 'Скоро запуск'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            {language === 'en' ? (
              <>
                Make Threads{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Amazing
                </span>
              </>
            ) : (
              <>
                Сделай Threads{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Невероятным
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? "The ultimate browser extension that transforms your Threads experience with powerful tools, beautiful design, and smart features."
              : "Идеальное браузерное расширение, которое трансформирует ваш опыт в Threads с помощью мощных инструментов, красивого дизайна и умных функций."
            }
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(language === 'en' ? [
              { icon: Sparkles, text: "Beautiful Design" },
              { icon: Zap, text: "Smart Tools" },
              { icon: Shield, text: "Privacy First" }
            ] : [
              { icon: Sparkles, text: "Красивый дизайн" },
              { icon: Zap, text: "Умные инструменты" },
              { icon: Shield, text: "Приватность" }
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
                <span>{language === 'en' ? 'Get Early Access' : 'Получить ранний доступ'}</span>
              </div>
            </button>
            
            <a 
              href="#features"
              className="group px-8 py-4 border-2 border-white/30 text-white font-medium text-lg rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <span>{language === 'en' ? 'Learn More' : 'Узнать больше'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Launch Info */}
          <p className="text-white/60 text-sm md:text-base">
            {language === 'en' 
              ? `Launching in ${daysUntilLaunch} ${getDayWord(daysUntilLaunch)} • Special launch price $9`
              : `Запуск через ${daysUntilLaunch} ${getDayWord(daysUntilLaunch)} • Специальная цена запуска $9`
            }
          </p>

          {/* Browser Support */}
          <div className="mt-12 flex items-center justify-center space-x-6 text-white/60">
            <div className="flex items-center space-x-2">
              <Chrome className="w-5 h-5" />
              <span className="text-sm">Chrome</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Firefox</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Edge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Powerful Features' : 'Мощные возможности'}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Everything you need to get the most out of Threads"
                : "Всё, что нужно для максимального использования Threads"
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
              {language === 'en' ? 'Simple Pricing' : 'Простые цены'}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Choose the plan that works best for you. Start with our special launch offer."
                : "Выберите план, который подходит именно вам. Начните со специального предложения запуска."
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
                  onClick={() => plan.popular && setIsPaymentModalOpen(true)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' 
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 cursor-not-allowed opacity-60'
                  }`}
                  disabled={!plan.popular}
                >
                  {plan.popular 
                    ? (language === 'en' ? 'Pre-order Now' : 'Предзаказ сейчас')
                    : (language === 'en' ? 'Coming Soon' : 'Скоро')
                  }
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
            {language === 'en' ? 'Ready to Transform Your Threads?' : 'Готовы трансформировать ваш Threads?'}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {language === 'en' 
              ? "Join thousands of users who are already enjoying a better Threads experience."
              : "Присоединяйтесь к тысячам пользователей, которые уже наслаждаются лучшим опытом в Threads."
            }
          </p>
          
          <button 
            onClick={() => setIsPaymentModalOpen(true)}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <Rocket className="w-6 h-6 group-hover:animate-bounce transition-transform" />
              <span>{language === 'en' ? 'Get Early Access' : 'Получить ранний доступ'}</span>
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
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ThreadsHelper
              </span>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="mailto:support@threadshelper.com" className="text-white/60 hover:text-cyan-400 transition-colors">
                support@threadshelper.com
              </a>
              <a href="#features" className="text-white/60 hover:text-cyan-400 transition-colors">
                {language === 'en' ? 'Features' : 'Возможности'}
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2025 ThreadsHelper. {language === 'en' ? 'All rights reserved.' : 'Все права защищены.'}</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                {language === 'en' ? 'Get Early Access' : 'Ранний доступ'}
              </h3>
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-2">$9</div>
              <div className="text-white/70">
                {language === 'en' ? 'Special launch price' : 'Специальная цена запуска'}
              </div>
              <div className="text-cyan-400 text-sm">
                {language === 'en' ? 'Save $20 - normally $29' : 'Экономия $20 - обычно $29'}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-3 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                <CreditCard className="w-5 h-5" />
                <span>{language === 'en' ? 'Pay with Card' : 'Оплата картой'}</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-3 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors">
                <Bitcoin className="w-5 h-5 text-white" />
                <span className="text-white">{language === 'en' ? 'Pay with Crypto' : 'Оплата криптой'}</span>
              </button>
            </div>

            <div className="mt-6 text-center text-white/60 text-sm flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>
                {language === 'en' ? 'Launch date: August 10, 2025' : 'Дата запуска: 10 августа 2025'}
              </span>
            </div>
          </div>
        </div>
      )}
    </BackgroundGradientAnimation>
  );
}
