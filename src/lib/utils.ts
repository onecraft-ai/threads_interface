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
      title: "ThreadsHelper - AI-Powered Business Intelligence & Market Research for Threads",
      description: "Transform your Threads insights with AI-powered business intelligence, market research analytics, and professional networking intelligence. Analyze conversations, research contacts, and discover opportunities.",
      keywords: [
        "Threads business intelligence",
        "market research platform", 
        "conversation analytics",
        "business intelligence software",
        "social media analytics",
        "networking intelligence",
        "Threads analytics tool",
        "AI market research",
        "business data analysis",
        "research software",
        "contact research",
        "business development analytics",
        "Threads insights",
        "AI analytics tool",
        "business research platform"
      ],
      ogTitle: "ThreadsHelper - AI Business Intelligence & Market Research",
      ogDescription: "AI-powered business intelligence platform that analyzes Threads conversations for market research, contact discovery, and networking insights. Transform social data into business opportunities.",
      twitterTitle: "ThreadsHelper - AI Business Intelligence & Market Research", 
      twitterDescription: "AI-powered platform for advanced business intelligence and market research on Threads. Analyze conversations and discover networking opportunities."
    },
    ru: {
      title: "ThreadsHelper - AI Бизнес-Аналитика и Маркетинговые Исследования для Threads",
      description: "Трансформируйте ваши инсайты Threads с AI-аналитикой, платформой маркетинговых исследований и профессиональной сетевой аналитикой. Анализируйте разговоры, исследуйте контакты и находите возможности.",
      keywords: [
        "Threads бизнес-аналитика",
        "платформа маркетинговых исследований",
        "аналитика разговоров", 
        "программное обеспечение бизнес-аналитики",
        "аналитика социальных сетей",
        "сетевая аналитика",
        "инструмент аналитики Threads",
        "AI маркетинговые исследования",
        "анализ бизнес-данных",
        "программное обеспечение исследований",
        "исследование контактов",
        "аналитика развития бизнеса",
        "инсайты Threads",
        "AI инструмент аналитики",
        "платформа бизнес-исследований"
      ],
      ogTitle: "ThreadsHelper - AI Бизнес-Аналитика и Маркетинговые Исследования",
      ogDescription: "AI-платформа бизнес-аналитики, которая анализирует разговоры в Threads для маркетинговых исследований, обнаружения контактов и сетевых инсайтов. Превращайте социальные данные в бизнес-возможности.",
      twitterTitle: "ThreadsHelper - AI Бизнес-Аналитика и Маркетинговые Исследования",
      twitterDescription: "AI-платформа для продвинутой бизнес-аналитики и маркетинговых исследований в Threads. Анализируйте разговоры и находите возможности нетворкинга."
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
      ? "AI-powered business intelligence platform that analyzes Threads conversations for market research, contact discovery, and networking insights."
      : "AI-платформа бизнес-аналитики, которая анализирует разговоры в Threads для маркетинговых исследований, обнаружения контактов и сетевых инсайтов.",
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
      "AI-powered business intelligence",
      "Market research analytics", 
      "Conversation insights analysis",
      "Networking intelligence",
      "Contact research tools",
      "Business data visualization"
    ] : [
      "AI-бизнес аналитика",
      "Аналитика маркетинговых исследований",
      "Анализ инсайтов разговоров", 
      "Сетевая аналитика",
      "Инструменты исследования контактов",
      "Визуализация бизнес-данных"
    ]
  };
}
