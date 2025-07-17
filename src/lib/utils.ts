import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export function getSEOData(language: 'en' | 'ru'): SEOData {
  const seoData = {
    en: {
      title: "ThreadsHelper - AI-Powered Business Networking & Contact Discovery for Threads",
      description: "Transform your Threads networking with AI-powered contact discovery, automated commenting, and intelligent business relationship building. Find customers, partners, and valuable contacts automatically.",
      keywords: [
        "Threads AI agent",
        "business networking automation", 
        "contact discovery",
        "automated commenting",
        "social media AI",
        "business relationship building",
        "Threads marketing tool",
        "AI customer acquisition",
        "social selling automation",
        "networking software",
        "contact finder",
        "business development AI",
        "Threads automation",
        "AI networking tool",
        "business contact discovery"
      ],
      ogTitle: "ThreadsHelper - AI Business Networking & Contact Discovery",
      ogDescription: "AI-powered agent that discovers valuable contacts, automates commenting, and builds business relationships on Threads. Transform social conversations into opportunities.",
      twitterTitle: "ThreadsHelper - AI Business Networking & Contact Discovery", 
      twitterDescription: "AI-powered agent for automated contact discovery and business networking on Threads. Build relationships through intelligent comment automation."
    },
    ru: {
      title: "ThreadsHelper - AI-Агент для Бизнес-Нетворкинга и Поиска Контактов в Threads",
      description: "Трансформируйте ваш нетворкинг в Threads с помощью AI-поиска контактов, автоматического комментирования и интеллектуального построения бизнес-отношений. Находите клиентов, партнеров и ценные контакты автоматически.",
      keywords: [
        "Threads AI агент",
        "автоматизация бизнес-нетворкинга",
        "поиск контактов",
        "автоматическое комментирование", 
        "AI для социальных сетей",
        "построение бизнес-отношений",
        "Threads маркетинг инструмент",
        "AI привлечение клиентов",
        "автоматизация социальных продаж",
        "программа для нетворкинга",
        "поиск контактов",
        "AI для бизнес-развития",
        "автоматизация Threads",
        "AI инструмент нетворкинга",
        "поиск бизнес-контактов"
      ],
      ogTitle: "ThreadsHelper - AI Бизнес-Нетворкинг и Поиск Контактов",
      ogDescription: "AI-агент, который находит ценные контакты, автоматизирует комментирование и строит бизнес-отношения в Threads. Превращайте социальные разговоры в возможности.",
      twitterTitle: "ThreadsHelper - AI Бизнес-Нетворкинг и Поиск Контактов",
      twitterDescription: "AI-агент для автоматического поиска контактов и бизнес-нетворкинга в Threads. Стройте отношения через интеллектуальную автоматизацию комментариев."
    }
  };
  
  return seoData[language];
}

export function generateStructuredData(language: 'en' | 'ru') {
  const isEnglish = language === 'en';
  
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ThreadsHelper",
    "description": isEnglish 
      ? "AI-powered business networking agent that discovers contacts, automates commenting, and builds relationships on Threads."
      : "AI-агент для бизнес-нетворкинга, который находит контакты, автоматизирует комментирование и строит отношения в Threads.",
    "url": "https://threadshelper.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer", 
      "price": "49",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "author": {
      "@type": "Organization",
      "name": "ThreadsHelper Team"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "247"
    },
    "featureList": isEnglish ? [
      "AI-powered contact discovery",
      "Automated comment generation", 
      "Business relationship building",
      "Networking analytics",
      "CRM integration",
      "Real-time insights"
    ] : [
      "AI-поиск контактов",
      "Автоматическая генерация комментариев",
      "Построение бизнес-отношений", 
      "Аналитика нетворкинга",
      "Интеграция с CRM",
      "Аналитика в реальном времени"
    ]
  };
}
