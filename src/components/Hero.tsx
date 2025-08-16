'use client'

import { useLanguage } from '@/lib/language-context'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section
      id="home"
      className="pt-24 pb-16 sm:pt-32 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white xs:text-4xl sm:text-6xl"
          >
            {t('heroTitle')}{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {t('heroTitleHighlight')}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('heroDescription')}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 xs:flex-row xs:gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              aria-label="Перейти к форме заказа проекта"
            >
              {t('startProject')}
            </a>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {t('learnMore')} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-100/5 dark:ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-gradient-to-br from-primary-50 to-blue-50 p-8 dark:from-gray-800 dark:to-gray-900">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <span>Next.js 14</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className="mt-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
                Pavel.Dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
