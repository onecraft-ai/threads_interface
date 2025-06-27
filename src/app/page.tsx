"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useState, useEffect } from "react";
import { 
  Brain, 
  Target, 
  Zap, 
  Search, 
  BarChart3, 
  Cpu, 
  Sparkles,
  CreditCard,
  Bitcoin,
  X,
  Check,
  Rocket,
  Download,
  Settings,
  Chrome,
  RefreshCw,
  Monitor
} from "lucide-react";

export default function Home() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto'>('card');
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(0);

  useEffect(() => {
    // Рассчитываем количество дней до 10 августа
    const launchDate = new Date('2025-08-10');
    const today = new Date();
    const timeDiff = launchDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysUntilLaunch(Math.max(0, daysDiff)); // Не показываем отрицательные дни
  }, []);

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
                Threads AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-cyan-400 transition-colors">
                Возможности
              </a>
              <a href="#pricing" className="text-white/80 hover:text-cyan-400 transition-colors">
                Цены
              </a>
              <a href="#contact" className="text-white/80 hover:text-cyan-400 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8">
            <Rocket className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Предзаказ открыт</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Найдите{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              нужных людей
            </span>
            <br />
            в Threads с помощью AI
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Умная система автоматически сканирует ленту Threads через ваш аккаунт, 
            используя искусственный интеллект для поиска нужных людей по заданным критериям.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Target, text: "Умное сканирование" },
              { icon: Brain, text: "AI анализ профилей" },
              { icon: Sparkles, text: "Точная фильтрация" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
              >
                <feature.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <Rocket className="w-6 h-6 group-hover:animate-bounce transition-transform" />
                <span>Оформить предзаказ</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            
            <p className="text-white/60 text-sm md:text-base">
              Запуск через {daysUntilLaunch} {
                daysUntilLaunch % 10 === 1 && daysUntilLaunch % 100 !== 11 ? 'день' :
                (daysUntilLaunch % 10 >= 2 && daysUntilLaunch % 10 <= 4) && (daysUntilLaunch % 100 < 10 || daysUntilLaunch % 100 >= 20) ? 'дня' :
                'дней'
              } • Professional план на месяц за $9
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Возможности нового поколения
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Наш AI анализирует миллионы профилей и взаимодействий в реальном времени
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Умное сканирование",
                description: "Система автоматически анализирует ленту Threads, собирая данные о пользователях и их активности"
              },
              {
                icon: Brain,
                title: "AI Анализ на сервере",
                description: "Мощные алгоритмы машинного обучения обрабатывают данные и находят людей по вашим критериям"
              },
              {
                icon: BarChart3,
                title: "Веб-панель управления",
                description: "Настраивайте критерии поиска и просматривайте результаты в удобном веб-интерфейсе"
              },
              {
                icon: Cpu,
                title: "Облачная обработка",
                description: "Вся обработка данных выполняется на наших серверах быстро и эффективно"
              }
            ].map((feature, index) => (
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

      {/* Demo Section */}
      <div className="relative z-10 py-20 px-6 bg-gradient-to-r from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Как работает Threads AI
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Подключите свой аккаунт, настройте критерии поиска и получайте результаты автоматически
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "1",
                  icon: Monitor,
                  title: "Подключите аккаунт",
                  description: "Безопасно подключите ваш Threads аккаунт к нашей системе с помощью расширения"
                },
                {
                  step: "2", 
                  icon: Settings,
                  title: "Настройте критерии",
                  description: "Задайте параметры поиска: интересы, локация, активность в веб-панели"
                },
                {
                  step: "3",
                  icon: RefreshCw,
                  title: "Получайте результаты",
                  description: "Система автоматически сканирует и находит нужных людей"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
              {/* Browser Frame */}
              <div className="bg-black/60 rounded-2xl overflow-hidden border border-white/10">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-black/80 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-medium">Threads AI Dashboard</span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Система активна</span>
                    </div>
                    <span className="text-white/60 text-sm">threads-ai.com</span>
                  </div>
                </div>

                {/* Dashboard Interface */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Panel - Settings */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-cyan-400" />
                        Настройки поиска
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white/80 text-sm mb-2">Критерии поиска</label>
                          <div className="bg-white/10 border border-white/20 rounded-xl p-3 text-white/80 text-sm">
                            Крипто-энтузиасты с опытом DeFi, активные пользователи из Лондона
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-white/80 text-sm mb-2">Регион</label>
                          <div className="bg-white/10 border border-white/20 rounded-xl p-3 text-white/80 text-sm">
                            🇬🇧 Великобритания, Лондон
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-white/80 text-sm mb-2">Уровень активности</label>
                          <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                            <div className="flex items-center justify-between text-sm text-white/80 mb-2">
                              <span>Высокий</span>
                              <span>75%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full w-3/4"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 p-3 bg-cyan-500/20 border border-cyan-500/30 rounded-xl">
                          <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                          <span className="text-cyan-400 text-sm">Активное сканирование...</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Panel - Results */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-400" />
                        Найденные профили
                      </h3>
                      
                      <div className="space-y-4">
                        {[
                          {
                            avatar: "👨‍💼",
                            name: "Alex Thompson", 
                            username: "@alexthompson",
                            match: "98%",
                            status: "Новый",
                            time: "2 мин назад"
                          },
                          {
                            avatar: "👩‍💻",
                            name: "Sarah Chen",
                            username: "@sarahchen", 
                            match: "95%",
                            status: "Новый",
                            time: "5 мин назад"
                          },
                          {
                            avatar: "🧑‍🚀",
                            name: "Mike Johnson",
                            username: "@mikejohnson",
                            match: "92%", 
                            status: "Обработан",
                            time: "12 мин назад"
                          }
                        ].map((profile, index) => (
                          <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{profile.avatar}</span>
                                <div>
                                  <h4 className="text-white font-medium text-sm">{profile.name}</h4>
                                  <p className="text-white/60 text-xs">{profile.username}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1 text-green-400 text-xs font-medium mb-1">
                                  <Check className="w-3 h-3" />
                                  <span>{profile.match}</span>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  profile.status === 'Новый' 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : 'bg-gray-500/20 text-gray-400'
                                }`}>
                                  {profile.status}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60 text-xs">{profile.time}</span>
                              <button className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors">
                                Подробнее →
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm font-medium">Сканировано</span>
                      </div>
                      <div className="text-2xl font-bold text-white">2,847</div>
                      <div className="text-xs text-white/60">профилей за сегодня</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center space-x-2 text-green-400 mb-2">
                        <Target className="w-4 h-4" />
                        <span className="text-sm font-medium">Найдено</span>
                      </div>
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-xs text-white/60">релевантных профиля</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center space-x-2 text-purple-400 mb-2">
                        <BarChart3 className="w-4 h-4" />
                        <span className="text-sm font-medium">Точность</span>
                      </div>
                      <div className="text-2xl font-bold text-white">94%</div>
                      <div className="text-xs text-white/60">среднее совпадение</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-medium">Токенов</span>
                      </div>
                      <div className="text-2xl font-bold text-white">477</div>
                      <div className="text-xs text-white/60">осталось</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Выберите ваш план
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Каждый план включает месячный пакет токенов для AI анализа профилей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$9",
                period: "/месяц",
                description: "Для начинающих исследователей",
                tokens: "110 токенов/месяц",
                tokensDesc: "~20 нужных людей с точностью 90%+",
                features: [
                  "До 110 AI поисков в месяц",
                  "Базовые критерии фильтрации",
                  "Email поддержка",
                  "Экспорт результатов"
                ],
                popular: false,
                gradient: "from-blue-600 to-purple-600"
              },
              {
                name: "Professional",
                price: "$29",
                period: "/месяц", 
                description: "Для активных пользователей",
                tokens: "500 токенов/месяц",
                tokensDesc: "~90 нужных людей с точностью 90%+",
                features: [
                  "До 500 AI поисков в месяц",
                  "Расширенные фильтры",
                  "Приоритетная поддержка",
                  "API доступ",
                  "Детальная аналитика"
                ],
                popular: true,
                gradient: "from-cyan-500 to-purple-500"
              },
              {
                name: "Enterprise", 
                price: "$99",
                period: "/месяц",
                description: "Для команд и агентств",
                tokens: "5,000 токенов/месяц",
                tokensDesc: "~833 нужных людей с точностью 90%+",
                features: [
                  "До 5,000 AI поисков в месяц",
                  "Кастомные критерии",
                  "Персональный менеджер",
                  "Интеграции",
                  "Белый лейбл"
                ],
                popular: false,
                gradient: "from-purple-600 to-pink-600"
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-black/40 backdrop-blur-xl border ${plan.popular ? 'border-cyan-400 scale-105' : 'border-white/20'} rounded-2xl p-8 hover:bg-black/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Rocket className="w-4 h-4" />
                      <span>Популярный</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-cyan-400 text-sm font-medium mb-1">{plan.tokens}</div>
                  <div className="text-white/60 text-xs">{plan.tokensDesc}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' 
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 cursor-not-allowed opacity-60'
                  }`}
                  disabled={!plan.popular}
                >
                  {plan.popular ? 'Предзаказ за $9' : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60">
              Все планы включают 7-дневную бесплатную пробную версию • Отмена в любое время
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Threads AI
            </span>
          </div>
          <p className="text-white/70 mb-6">
            Революционный поиск людей в Threads с помощью искусственного интеллекта
          </p>
          <div className="flex justify-center space-x-6 text-white/60">
            <a href="#" className="hover:text-cyan-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Условия использования</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsPaymentModalOpen(false)} />
          <div className="relative bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Предзаказ Threads AI</h3>
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Предзаказ Threads AI</h2>
                <p className="text-white/80">Получите доступ к системе сразу после релиза + Professional план на месяц по цене Starter</p>
                <div className="text-3xl font-bold text-white mt-4 mb-2">$9</div>
                <div className="text-white/70">Единоразовый платеж • Экономия $20</div>
                <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                  <div className="text-cyan-400 font-medium mb-2">Что входит в предзаказ:</div>
                  <ul className="text-left text-white/80 text-sm space-y-1">
                    <li>• Professional план на 1 месяц ($29 стоимость)</li>
                    <li>• 500 токенов на месяц</li>
                    <li>• ~90 нужных людей</li>
                    <li>• Ранний доступ к системе</li>
                    <li>• Приоритетная поддержка</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Оплатить картой
                </button>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  <Bitcoin className="w-5 h-5" />
                  Оплатить криптой
                </button>
              </div>
              
              <div className="text-center text-white/60 text-sm flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Безопасная оплата • Возврат в течение 7 дней
              </div>
            </div>
          </div>
        </div>
      )}
    </BackgroundGradientAnimation>
  );
}
