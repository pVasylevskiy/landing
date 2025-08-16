'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Сколько времени занимает разработка?',
    answer:
      'Время разработки зависит от сложности проекта. Простой лендинг - 2-3 недели, корпоративный сайт - 1-2 месяца, веб-приложение - 2-6 месяцев.',
  },
  {
    question: 'Работаете ли вы с существующими проектами?',
    answer:
      'Да, я могу доработать, переписать или модернизировать существующие проекты. Сначала проведу аудит и предложу оптимальное решение.',
  },
  {
    question: 'Предоставляете ли вы техническую поддержку?',
    answer:
      'Да, каждый проект включает период технической поддержки. Также могу заключить договор на долгосрочное обслуживание.',
  },
  {
    question: 'Какие технологии используете?',
    answer:
      'Основной стек: Next.js 14, React 18, TypeScript, Tailwind CSS. Также работаю с Node.js, PostgreSQL, MongoDB и другими технологиями по необходимости.',
  },
  {
    question: 'Делаете ли вы мобильные приложения?',
    answer:
      'Да, разрабатываю мобильные приложения с использованием React Native или веб-версии с PWA функциональностью.',
  },
  {
    question: 'Как происходит процесс разработки?',
    answer:
      '1. Обсуждение требований и планирование\n2. Создание дизайна и прототипа\n3. Разработка и тестирование\n4. Запуск и настройка\n5. Поддержка и обновления',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10">
          <h2
            id="faq-heading"
            className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white"
          >
            Часто задаваемые вопросы
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    type="button"
                  >
                    <span
                      id={`faq-question-${index}`}
                      className="text-base font-semibold leading-7"
                    >
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <svg
                          className="h-6 w-6 text-primary-600 dark:text-primary-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd
                    id={`faq-answer-${index}`}
                    className="mt-2 pr-12"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
