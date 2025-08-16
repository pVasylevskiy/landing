export const translations = {
  ru: {
    // Header
    home: 'Главная',
    features: 'Возможности',
    pricing: 'Цены',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'Создаю современные',
    heroTitleHighlight: 'веб-приложения',
    heroDescription: 'Разрабатываю быстрые, масштабируемые и удобные веб-приложения с использованием Next.js, React и TypeScript. От идеи до запуска.',
    startProject: 'Начать проект',
    learnMore: 'Узнать больше',
    
    // Features
    technologies: 'Технологии',
    featuresTitle: 'Всё что нужно для современного веба',
    featuresDescription: 'Использую проверенные технологии и лучшие практики для создания быстрых, надёжных и масштабируемых веб-приложений.',
    responsiveDesign: 'Responsive Design',
    responsiveDescription: 'Адаптивный дизайн для всех устройств с мобильным first подходом и поддержкой до 1440px.',
    performance: 'Performance',
    performanceDescription: 'Оптимизация производительности с автоматическим code splitting, lazy loading и оптимизацией изображений.',
    seoReady: 'SEO Ready',
    seoDescription: 'Готовность к поисковой оптимизации с серверным рендерингом, мета-тегами и структурированными данными.',
    
    // Pricing
    pricingTitle: 'Выберите подходящий тариф',
    pricingDescription: 'Прозрачное ценообразование без скрытых комиссий. Каждый проект индивидуален.',
    popular: 'Популярный',
    startProjectPricing: 'Начать проект',
    
    // FAQ
    faqTitle: 'Часто задаваемые вопросы',
    faqDescription: 'Ответы на популярные вопросы о разработке и сотрудничестве.',
    
    // Footer
    contactTitle: 'Свяжитесь со мной',
    contactDescription: 'Оставьте свои данные, и я свяжусь с вами для обсуждения проекта',
    name: 'Имя',
    email: 'Email',
    phone: 'Телефон',
    message: 'Сообщение',
    sendMessage: 'Отправить сообщение',
    sending: 'Отправка...',
    messageSent: 'Сообщение отправлено!',
    messageSentDescription: 'Я свяжусь с вами в ближайшее время.',
    writeEmail: 'Написать письмо',
    contactDescriptionFooter: 'Свяжитесь со мной для обсуждения вашего проекта',
    
    // Placeholders
    namePlaceholder: 'Ваше имя',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+7 (999) 123-45-67',
    messagePlaceholder: 'Опишите ваш проект или задайте вопрос...',
    
    // Copyright
    copyright: 'Все права защищены.',
    madeWith: 'Создано с ❤️ на Next.js',
  },
  en: {
    // Header
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    
    // Hero
    heroTitle: 'I create modern',
    heroTitleHighlight: 'web applications',
    heroDescription: 'I develop fast, scalable and user-friendly web applications using Next.js, React and TypeScript. From idea to launch.',
    startProject: 'Start Project',
    learnMore: 'Learn More',
    
    // Features
    technologies: 'Technologies',
    featuresTitle: 'Everything you need for modern web',
    featuresDescription: 'I use proven technologies and best practices to create fast, reliable and scalable web applications.',
    responsiveDesign: 'Responsive Design',
    responsiveDescription: 'Adaptive design for all devices with mobile-first approach and support up to 1440px.',
    performance: 'Performance',
    performanceDescription: 'Performance optimization with automatic code splitting, lazy loading and image optimization.',
    seoReady: 'SEO Ready',
    seoDescription: 'Search engine optimization readiness with server-side rendering, meta tags and structured data.',
    
    // Pricing
    pricingTitle: 'Choose the right plan',
    pricingDescription: 'Transparent pricing without hidden fees. Each project is individual.',
    popular: 'Popular',
    startProjectPricing: 'Start Project',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Answers to popular questions about development and collaboration.',
    
    // Footer
    contactTitle: 'Contact Me',
    contactDescription: 'Leave your details and I will contact you to discuss your project',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message sent!',
    messageSentDescription: 'I will contact you soon.',
    writeEmail: 'Write Email',
    contactDescriptionFooter: 'Contact me to discuss your project',
    
    // Placeholders
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+1 (555) 123-4567',
    messagePlaceholder: 'Describe your project or ask a question...',
    
    // Copyright
    copyright: 'All rights reserved.',
    madeWith: 'Made with ❤️ on Next.js',
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.ru
