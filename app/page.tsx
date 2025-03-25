'use client'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen font-sans landscape-optimize portrait-optimize">
      <JsonLd />
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation */}
      <header className={`fixed w-full z-50 backdrop-blur-md safe-top landscape-optimize-header transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md' : 'bg-white/80'}`} role="banner">
        <div className={`container py-3 sm:py-4 flex items-center justify-between gap-4`}>
          <Link href="#" className="link-underline group touch-optimize" aria-label="Profusion - Back to homepage">
            <span className="relative inline-block font-black text-xl sm:text-2xl tracking-tighter text-primary">
              Profusion
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" 
                    aria-hidden="true" />
            </span>
          </Link>
          
          {/* Mobile Navigation Button */}
          <button
            className="md:hidden button-base touch-optimize p-2 min-w-[40px] min-h-[40px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="nav-link relative group text-sm touch-optimize"
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

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden fixed inset-0 bg-white z-[100] transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ height: '100dvh' }}
          >
            <div className="flex flex-col h-full bg-white">
              <div className="flex justify-between items-center p-4 border-b border-neutral-200 bg-white">
                <Link href="#" className="link-underline group" onClick={() => setMobileMenuOpen(false)}>
                  <span className="relative inline-block font-black text-2xl tracking-tighter text-primary">
                    Profusion
                  </span>
                </Link>
                <button
                  className="button-base touch-optimize p-2 min-w-[40px] min-h-[40px] hover:bg-neutral-100 rounded-full transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col flex-1 p-4 bg-white overflow-y-auto">
                <div className="flex flex-col flex-1 justify-center items-center space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        handleNavClick(e, item.id);
                        setMobileMenuOpen(false);
                      }}
                      className="text-2xl font-medium touch-optimize px-2 hover:bg-neutral-100 rounded-lg transition-colors text-center w-full py-4"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Button 
                  className="button-base bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 mt-8 w-full px-6 py-2 min-h-[40px]"
                  aria-label="Book a free 30-minute strategy call"
                >
                  <Link href="https://cal.com/eksik/30min" className="flex items-center justify-center whitespace-nowrap w-full px-2">
                    Book a Call
                  </Link>
                </Button>
              </nav>
            </div>
          </div>

          {/* Navigation Button */}
          <Button 
            className="button-base bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hidden md:flex touch-optimize px-6 py-2 min-w-[auto] min-h-[40px]"
            aria-label="Book a free 30-minute strategy call"
          >
            <Link href="https://cal.com/eksik/30min" className="flex items-center justify-center whitespace-nowrap px-2">
              Book a Call
            </Link>
          </Button>
        </div>
      </header>

      <main id="main-content" role="main" className="landscape-optimize-content">
        {/* Hero Section */}
        <section 
          className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-21 md:pb-27 bg-white text-neutral-900" 
          aria-labelledby="hero-title"
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h1 id="hero-title" className="space-y-2 sm:space-y-3 md:space-y-4 heading-responsive">
                <span className="block">Enterprise Expertise</span>
                <span className="block text-red-700">Startup Speed</span>
                <span className="block">Fixed Pricing</span>
              </h1>
              <p className="text-responsive font-medium text-neutral-700 max-w-2xl mx-auto">
                Enterprise-grade audit, design, development & operations for SMEs. Built by former UBS, HSBC & Aviva senior experts.
              </p>
              <div className="px-4 sm:px-0">
                <Button className="button-base bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full w-full sm:w-auto touch-optimize px-6 py-2 min-w-[180px] sm:min-w-[auto] min-h-[40px]">
                  <Link href="https://cal.com/eksik/30min" className="flex items-center justify-center text-base font-medium px-2">
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

        {/* Services Section */}
        <section 
          id="services" 
          className="pt-16 pb-16 bg-neutral-900 text-white"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-500">Services</p>
              <h2 id="services-title" className="heading-responsive font-extrabold tracking-tight text-white mt-2">Our Expertise, Your Edge</h2>
              <p className="text-responsive font-medium text-neutral-300 mt-4 max-w-2xl mx-auto">
                Fixed prices. No surprises. Payment plans available.
              </p>
            </div>

            <div className="grid-responsive" role="list">
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

        {/* Case Studies Section */}
        <section 
          id="case-studies" 
          className="pt-16 pb-16 bg-white text-neutral-900"
          aria-labelledby="case-studies-title"
        >
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-700">Case Studies</p>
              <h2 id="case-studies-title" className="heading-responsive font-extrabold tracking-tight text-primary mt-2">Real Results, Real Impact</h2>
              <p className="text-responsive font-medium text-neutral-700 mt-4 max-w-2xl mx-auto">
                Enterprise-grade solutions that deliver measurable ROI.
              </p>
            </div>

            <div className="grid-responsive" role="list">
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

        {/* Our DNA Section */}
        <section 
          id="about-us" 
          className="pt-16 pb-16 bg-neutral-900 text-white"
          aria-labelledby="dna-title"
        >
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-500">About Us</p>
              <h2 id="dna-title" className="heading-responsive font-extrabold tracking-tight text-white mt-2">Enterprise DNA, Startup Spirit</h2>
              <p className="text-responsive font-medium text-neutral-300 mt-4 max-w-2xl mx-auto">
                Where enterprise rigor meets startup hustle.
              </p>
            </div>

            <div className="grid-responsive" role="list">
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

        {/* FAQ Section */}
        <section 
          id="faq" 
          className="pt-16 pb-16 bg-white text-neutral-900"
          aria-labelledby="faq-title"
        >
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-700">FAQ</p>
              <h2 id="faq-title" className="heading-responsive font-extrabold tracking-tight text-primary mt-2">Your Questions, Our Answers</h2>
              <p className="text-responsive font-medium text-neutral-700 mt-4 max-w-2xl mx-auto">
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

        {/* Contact Section */}
        <section 
          id="contact" 
          className="pt-16 pb-16 bg-neutral-900 text-white"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-base font-bold tracking-wider uppercase text-red-500">Contact</p>
              <h2 id="contact-title" className="heading-responsive font-extrabold tracking-tight text-white mt-2">Ready, Steady, Go!</h2>
              <p className="text-responsive font-medium text-neutral-300 mt-4 max-w-3xl mx-auto">
                No pressure, no obligation—just actionable insights you can implement immediately.
              </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
              <Button 
                className="bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full px-6 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[180px] sm:min-w-[auto] min-h-[40px]"
              >
                <Link href="mailto:hello@profusion.io" className="flex items-center justify-center min-h-[40px] min-w-[40px] px-2 text-base font-medium">
                  hello@profusion.io
                </Link>
              </Button>
              <Button
                className="bg-red-700 text-white hover:bg-white hover:text-red-800 rounded-full px-6 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[180px] sm:min-w-[auto] min-h-[40px]"
                aria-label="Book your free 30-minute strategy call"
              >
                <Link href="https://cal.com/eksik/30min" className="flex items-center justify-center min-h-[40px] min-w-[40px] px-2 text-base font-medium">
                  Book Your Free 30-Min Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with responsive updates */}
      <footer className="py-8 sm:py-12 bg-neutral-900 text-white" role="contentinfo">
        <div className="container">
          <p className="text-neutral-400 text-center text-sm sm:text-base italic">
            We are fully remote, but maintain physical presence in London, Hamburg, Warsaw, Istanbul, and Bangalore.
          </p>
          
          <hr className="border-neutral-300 my-8" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo and Copyright */}
            <div className="text-center sm:text-left">
              <Link href="#" className="link-underline group">
                <span className="relative inline-block font-black text-xl text-white">
                  Profusion
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 ease-out group-hover:w-full" 
                        aria-hidden="true" />
                </span>
              </Link>
              <p className="text-sm text-neutral-400 mt-2">
                © {new Date().getFullYear()} Profusion. All rights reserved.<br />
                <span className="text-neutral-500">
                  Profusion is the trading name of Eksik Limited.<br />
                </span>
                <span className="text-neutral-500">
                  Registered in England and Wales (#14514083).
                </span>
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Legal Links */}
            <div className="flex flex-col items-center sm:items-end gap-4">
              <div className="flex items-center gap-4">
                <Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}