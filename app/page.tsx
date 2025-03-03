'use client'

import { spacing, typography } from './styles'
import { faqData } from './data/faq'
import { servicesData } from './data/services'
import { caseStudiesData } from './data/case-studies'
import { useState, useEffect, Suspense } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import dynamic from 'next/dynamic'

// Dynamically import components with proper loading states
const Accordion = dynamic(() => import("@/components/ui/accordion").then(mod => mod.Accordion), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-neutral-100 h-96 rounded-lg" />
})

const AccordionContent = dynamic(() => import("@/components/ui/accordion").then(mod => mod.AccordionContent), { 
  ssr: false,
  loading: () => <div className="animate-pulse h-4 bg-neutral-100" />
})

const AccordionItem = dynamic(() => import("@/components/ui/accordion").then(mod => mod.AccordionItem), { 
  ssr: false,
  loading: () => <div className="animate-pulse h-12 bg-neutral-100 mb-2" />
})

const AccordionTrigger = dynamic(() => import("@/components/ui/accordion").then(mod => mod.AccordionTrigger), { 
  ssr: false,
  loading: () => <div className="animate-pulse h-6 bg-neutral-100" />
})

// Lazy load JsonLd component
const JsonLd = dynamic(() => import('./components/JsonLd'), {
  ssr: false,
  loading: () => null
})

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Memoize navigation items
  const navItems = [
    { name: "Services", id: "services" },
    { name: "Case Studies", id: "case-studies" },
    { name: "About Us", id: "about-us" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" }
  ]

  // Optimize scroll handler
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const header = document.querySelector('header')
      const headerHeight = header?.getBoundingClientRect().height || 0
      const offsetPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!mounted) {
    return null // or return a loading skeleton
  }

  return (
    <div className="min-h-screen font-sans">
      <JsonLd />
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation */}
      <header className={`fixed w-full z-50 backdrop-blur-md safe-top transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md' : 'bg-white/80'}`} role="banner">
        <div className={`${spacing.container} py-3 sm:py-4 flex items-center justify-between ${spacing.gap}`}>
          <Link href="#" className="link-underline group" aria-label="Profusion - Back to homepage">
            <span className="relative inline-block font-black text-2xl sm:text-3xl tracking-tighter text-primary">
              Profusion
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" 
                    aria-hidden="true" />
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="nav-link relative group text-sm"
                aria-label={`Navigate to ${item.name} section`}
              >
                <span className="relative inline-block">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" 
                        aria-hidden="true" />
                </span>
              </Link>
            ))}
          </nav>
          <Button 
            className={`bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full ${spacing.button} text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shrink-0 min-h-[44px] min-w-[44px] px-6 py-3`}
            aria-label="Book a free 30-minute strategy call"
          >
            <Link href="https://cal.com/profusion/30min" className="flex items-center justify-center whitespace-nowrap min-h-[44px] min-w-[44px] px-2">
              Book a Call
            </Link>
          </Button>
        </div>
      </header>

      <main id="main-content" role="main">
        {/* Hero - White Background */}
        <section 
          className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-21 md:pb-27 bg-white text-neutral-900" 
          aria-labelledby="hero-title"
        >
          <div className={spacing.container}>
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h1 id="hero-title" className="space-y-2 sm:space-y-3 md:space-y-4">
                <span className={`block ${typography.h1}`}>Enterprise Expertise</span>
                <span className={`block ${typography.h1} text-red-700`}>Startup Speed</span>
                <span className={`block ${typography.h1}`}>Fixed Pricing</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-700 max-w-2xl mx-auto">
                Enterprise-grade audit, design, development & operations for SMEs. Built by former UBS, HSBC & Aviva senior experts.
              </p>
              <div className="px-4 sm:px-0">
                <Button className="bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full px-6 sm:px-10 py-2.5 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto min-h-[44px] min-w-[44px]">
                  <Link href="https://cal.com/profusion/30min" className="flex items-center justify-center min-h-[44px] min-w-[44px] px-2">
                    Book Your Free 30-Min Strategy Call
                  </Link>
                </Button>
              </div>
              <p className="text-sm sm:text-base italic text-neutral-600">
                No pressure, no obligation—just actionable insights you can implement immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Services - Black Background */}
        <section 
          id="services" 
          className="pt-6 sm:pt-16 md:pt-16 pb-6 sm:pb-16 md:pb-16 bg-neutral-900 text-white"
          aria-labelledby="services-title"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-500">Services</p>
              <h2 id="services-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Our Expertise, Your Edge</h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-300 mt-4 max-w-2xl mx-auto px-4">
                Fixed prices. No surprises. Payment plans available.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`bg-neutral-800 p-6 sm:p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105 scale-in-child stagger-delay-${index + 1}`}
                  role="listitem"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight text-white">{service.title}</h3>
                  <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-neutral-300">{service.price}</p>
                  <p className="text-sm sm:text-base mb-4 sm:mb-6 text-neutral-400 leading-relaxed">{service.description}</p>
                  {service.items.length > 0 && (
                    <ul className="space-y-2 sm:space-y-3 text-sm">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-5 w-5 mr-2 flex-shrink-0 text-red-700" />
                          <span className="text-neutral-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies - White Background */}
        <section 
          id="case-studies" 
          className="pt-6 sm:pt-16 md:pt-16 pb-6 sm:pb-16 md:pb-16 bg-white text-neutral-900"
          aria-labelledby="case-studies-title"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-700">Case Studies</p>
              <h2 id="case-studies-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mt-2">Real Results, Real Impact</h2>
              <p className="text-lg sm:text-xl font-medium text-neutral-700 mt-4 max-w-2xl mx-auto">
                Enterprise-grade solutions that deliver measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12" role="list">
              {caseStudiesData.map((study, index) => (
                <div
                  key={index}
                  className={`bg-neutral-100 p-8 rounded-2xl hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 scale-in-child stagger-delay-${index + 1}`}
                  role="listitem"
                >
                  <h3 className="card-title text-primary">{study.title}</h3>
                  <p className="card-price text-neutral-700">{study.price}</p>
                  <p className="card-description text-neutral-600">{study.description}</p>
                  <ul className="space-y-3 text-sm mb-6">
                    {study.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0 text-red-700" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-4 border-red-700 pl-4 italic text-neutral-700">
                    "{study.quote}"
                  </blockquote>
                  <p className="mt-2 text-sm font-medium text-neutral-600">{study.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our DNA - Black Background */}
        <section 
          id="about-us" 
          className="pt-6 sm:pt-16 md:pt-16 pb-6 sm:pb-16 md:pb-16 bg-neutral-900 text-white"
          aria-labelledby="dna-title"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-500">About Us</p>
              <h2 id="dna-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Enterprise DNA, Startup Spirit</h2>
              <p className="text-lg sm:text-xl font-medium text-neutral-300 mt-4 max-w-2xl mx-auto">
                Where enterprise rigor meets startup hustle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12" role="list">
              {[
                {
                  title: "Obsession with Outcomes",
                  price: "Our Focus",
                  description: "We don't just deliver projects—we drive transformations. Every engagement is measured by the lasting impact it creates for your business.",
                  items: [
                    "Measurable ROI on every project",
                    "Continuous optimization post-launch"
                  ]
                },
                {
                  title: "No Hierarchies, Just Expertise",
                  price: "Direct Access",
                  description: "Work directly with former HSBC, UBS, and Aviva veterans. No account managers, no middlemen—just seasoned experts who've solved similar challenges.",
                  items: [
                    "Direct access to senior experts",
                    "20+ years enterprise experience"
                  ]
                },
                {
                  title: "Speed Without Compromise",
                  price: "Rapid Delivery",
                  description: "Enterprise-grade quality at startup velocity. Our battle-tested frameworks let us move fast while maintaining bank-level standards.",
                  items: [
                    "2-4 week delivery timeframes",
                    "Bank-level quality standards"
                  ]
                },
                {
                  title: "Bold Ideas, Backed by Proof",
                  price: "Innovation",
                  description: "Innovation isn't just creativity—it's calculated risk-taking. We blend corporate wisdom with startup agility to deliver proven results.",
                  items: [
                    "Data-driven decision making",
                    "Enterprise-tested methodologies"
                  ]
                },
                {
                  title: "Partners, Not Vendors",
                  price: "Partnership",
                  description: "Your success is our metric. We invest in understanding your business deeply and align our incentives with your growth trajectory.",
                  items: [
                    "Success-based pricing models",
                    "Long-term growth alignment"
                  ]
                },
                {
                  title: "Enterprise-Grade Security",
                  price: "Protection",
                  description: "Security isn't an add-on—it's woven into our DNA. Every solution inherits two decades of financial sector security practices from UBS and HSBC.",
                  items: [
                    "Bank-level security protocols",
                    "Zero security incidents to date"
                  ]
                },
              ].map((trait, index) => (
                <div
                  key={index}
                  className={`bg-neutral-800 p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105 scale-in-child stagger-delay-${index + 1}`}
                  role="listitem"
                >
                  <h3 className="card-title text-white">{trait.title}</h3>
                  <p className="card-price text-neutral-300">{trait.price}</p>
                  <p className="card-description text-neutral-400">{trait.description}</p>
                  <ul className="space-y-3 text-sm">
                    {trait.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0 text-red-700" />
                        <span className="text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - White Background */}
        <section 
          id="faq" 
          className="pt-6 sm:pt-16 md:pt-16 pb-6 sm:pb-16 md:pb-16 bg-white text-neutral-900"
          aria-labelledby="faq-title"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-700">FAQ</p>
              <h2 id="faq-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mt-2">Your Questions, Our Answers</h2>
              <p className="text-lg sm:text-xl font-medium text-neutral-700 mt-4 max-w-2xl mx-auto">
                What you need to know about working with us.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Suspense fallback={
                <div className="animate-pulse bg-neutral-100 h-96 rounded-lg" />
              }>
                <Accordion type="single" collapsible>
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-neutral-200">
                      <AccordionTrigger className="text-lg font-semibold text-left hover:text-red-700 transition-colors py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-neutral-700 pb-6 text-lg">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Contact - Black Background */}
        <section 
          id="contact" 
          className="pt-6 sm:pt-16 md:pt-16 pb-6 sm:pb-16 md:pb-16 bg-neutral-900 text-white"
          aria-labelledby="contact-title"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-500">Contact</p>
              <h2 id="contact-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Ready, Steady, Go!</h2>
              <p className="text-lg sm:text-xl font-medium text-neutral-300 mt-4 max-w-3xl mx-auto">
                No pressure, no obligation—just actionable insights you can implement immediately.
              </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
              <Button 
                className="bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full px-10 py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[200px] sm:min-w-[auto] min-h-[44px]"
              >
                <Link href="mailto:hello@profusion.io" className="flex items-center justify-center min-h-[44px] min-w-[44px] px-2">
                  hello@profusion.io
                </Link>
              </Button>
              <Button
                className="bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full px-10 py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[200px] sm:min-w-[auto] min-h-[44px]"
                aria-label="Book your free 30-minute strategy call"
              >
                <Link href="https://cal.com/profusion/30min" className="flex items-center justify-center min-h-[44px] min-w-[44px] px-2">
                  Book Your Free 30-Min Strategy Call
                </Link>
              </Button>
            </div>
            <p className="text-neutral-300 text-center mt-10 text-sm sm:text-base italic">
              We are fully remote, but maintain physical presence in London, Hamburg, Krakow, Istanbul, and Bangalore.
            </p>
          </div>
        </section>
      </main>

      {/* Footer - White Background */}
      <footer className="py-8 sm:py-12 bg-white text-neutral-900" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
            {/* Logo and Copyright */}
            <div className="text-center sm:text-left w-full sm:w-1/4">
              <Link href="#" className="link-underline group">
                <span className="relative inline-block font-black text-xl text-primary">
                  Profusion
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" 
                        aria-hidden="true" />
                </span>
              </Link>
              <p className="text-sm text-neutral-700 mt-2">
                © {new Date().getFullYear()} Profusion. All rights reserved.<br />
                <span className="text-neutral-500">
                  Profusion is the trading name of Eksik Limited.<br className="hidden sm:block" />
                </span>
                <span className="text-neutral-500">
                  Registered in England and Wales (#14514083).
                </span>
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-row flex-wrap justify-center w-full sm:w-2/4 order-first sm:order-none">
              <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 mx-auto">
                <Link href="#services" onClick={(e) => handleNavClick(e, 'services')} className="group">
                  <span className="relative inline-block text-sm text-neutral-700">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
                <Link href="#case-studies" onClick={(e) => handleNavClick(e, 'case-studies')} className="group">
                  <span className="relative inline-block text-sm text-neutral-700">
                    Case Studies
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
                <Link href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')} className="group">
                  <span className="relative inline-block text-sm text-neutral-700">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
                <Link href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="group">
                  <span className="relative inline-block text-sm text-neutral-700">
                    FAQ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
                <Link href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="group">
                  <span className="relative inline-block text-sm text-neutral-700">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </nav>

            {/* Social and Legal Links */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-1/4 justify-end">
              <div className="flex items-center gap-4">
                <Link href="https://linkedin.com/in/hasanakyol" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-red-700 transition-colors" aria-label="Visit Hasan Akyol's LinkedIn profile">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link href="https://twitter.com/imoffactually" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-red-700 transition-colors" aria-label="Visit Hasan Akyol's Twitter profile">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm mt-4 sm:mt-0 sm:ml-4">
                <Link href="/terms" className="group">
                  <span className="relative inline-block text-sm text-neutral-700">
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
                <Link href="/privacy" className="group">
                  <span className="relative inline-block text-sm text-neutral-700">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}