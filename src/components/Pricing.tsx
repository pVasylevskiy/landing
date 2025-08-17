'use client'

import { useLanguage } from '@/lib/language-context'

export default function Pricing() {
  const { t } = useLanguage()
  
  const tiers = [
    {
      name: t('tierLanding'),
      id: 'tier-landing',
      href: '#',
      price: { monthly: `${t('from')} $500` },
      description: t('tierLandingDesc'),
      features: [
        t('adaptiveDesign'),
        t('seoOptimization'),
        t('contactForm'),
        t('googleAnalytics'),
        t('hosting1Year'),
        t('support1Month'),
      ],
      featured: false,
    },
    {
      name: t('tierCorporate'),
      id: 'tier-corporate',
      href: '#',
      price: { monthly: `${t('from')} $1,500` },
      description: t('tierCorporateDesc'),
      features: [
        t('upTo10Pages'),
        t('cmsSystem'),
        t('blogNews'),
        t('multilingual'),
        t('crmIntegration'),
        t('support3Months'),
      ],
      featured: true,
    },
    {
      name: t('tierApp'),
      id: 'tier-app',
      href: '#',
      price: { monthly: `${t('from')} $3,000` },
      description: t('tierAppDesc'),
      features: [
        t('userAuth'),
        t('database'),
        t('apiIntegration'),
        t('mobileVersion'),
        t('techSupport'),
        t('updates6Months'),
      ],
      featured: false,
    },
  ]
  
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="pricing-heading"
            className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400"
          >
            {t('pricing')}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {t('pricingTitle')}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
          {t('pricingDescription')}
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 gap-x-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 xl:p-10 ${
                tier.featured
                  ? 'border-2 border-primary-600 dark:border-primary-400 shadow-lg'
                  : 'shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <p className="rounded-full bg-primary-600/10 px-2.5 py-0.5 text-xs font-semibold leading-5 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
                      {t('popular')}
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tier.price.monthly}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-primary-600 dark:text-primary-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline-primary-600'
                    : 'bg-primary-600/10 text-primary-600 hover:bg-primary-600/20 dark:bg-primary-400/10 dark:text-primary-400 dark:hover:bg-primary-400/20'
                }`}
              >
                {t('startProjectPricing')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
