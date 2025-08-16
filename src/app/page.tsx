import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900" role="main">
      <Header />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Features />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <FAQ />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
