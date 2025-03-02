'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import JsonLd from './components/JsonLd'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Head>
        {/* iOS status bar style */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Android status bar color - using our neutral-900 color */}
        <meta name="theme-color" content="#171717" />
        
        {/* PWA color scheme */}
        <meta name="color-scheme" content="light" />
      </Head>
      <JsonLd />
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md safe-top" role="banner">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-8">
          <Link href="#" className="flex items-center shrink-0" aria-label="Profusion - Back to homepage">
            <span className="relative inline-block font-black text-2xl sm:text-3xl tracking-tighter text-primary">
              Profusion
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-swiss-red transition-all duration-200 ease-out group-hover:w-full" 
                    aria-hidden="true" />
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
            {[
              { name: "Services", id: "services" },
              { name: "Case Studies", id: "case-studies" },
              { name: "About Us", id: "about-us" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={`#${item.id}`}
                className="nav-link relative group text-sm lg:text-base"
                aria-label={`Navigate to ${item.name} section`}
              >
                <span className="relative inline-block">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-swiss-red transition-all duration-200 ease-out group-hover:w-full" 
                        aria-hidden="true" />
                </span>
              </Link>
            ))}
          </nav>
          <Button 
            className="bg-swiss-red text-white hover:bg-white hover:text-swiss-red rounded-full px-6 sm:px-10 py-2.5 sm:py-5 text-base sm:text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shrink-0"
            aria-label="Book a free 30-minute strategy call"
          >
            <Link href="https://cal.com/profusion/30min" className="flex items-center justify-center whitespace-nowrap">
              Book a Call
            </Link>
          </Button>
        </div>
      </header>

      <main id="main-content" role="main">
        {/* Hero - White Background */}
        <section 
          className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 bg-white text-neutral-900" 
          aria-labelledby="hero-title"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h1 id="hero-title" className="space-y-1 sm:space-y-2 md:space-y-3">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Enterprise Expertise.</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-swiss-red">Startup Speed.</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Fixed Pricing.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-700 max-w-2xl mx-auto">
                Audit, Design, Development, and Operations by ex-UBS, HSBC, Aviva and Top-10 agency subject matter experts for your small/medium enterprise.
              </p>
              <div className="px-4 sm:px-0">
                <Button className="bg-swiss-red text-white hover:bg-white hover:text-swiss-red rounded-full px-6 sm:px-10 py-2.5 sm:py-5 text-base sm:text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                  <Link href="https://cal.com/profusion/30min" className="flex items-center justify-center">
                    Book Your Free 30-Min Strategy Call
                  </Link>
                </Button>
              </div>
              <p className="text-sm italic text-neutral-600">
                No pressure, no obligation—just actionable insights you can implement immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Services - Black Background */}
        <section 
          id="services" 
          className="py-16 sm:py-20 md:py-32 bg-neutral-900 text-white"
          aria-labelledby="services-title"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-sm font-bold tracking-wider uppercase text-swiss-red">Services</p>
              <h2 id="services-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-2">Our Expertise, Your Edge</h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-300 mt-4 max-w-2xl mx-auto px-4">
                Fixed prices. No surprises. Payment plans available.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list">
            {[
              {
                title: "Audit",
                price: "Starting at £2,500",
                description:
                  "Identify revenue leaks and security risks with actionable 30-day roadmaps. We dissect your tech stack or workflows using methodologies honed at HSBC and UBS.",
                items: [
                  "£2,500: Site + UX teardown (startup-ready).",
                  "£5,000: Full workflow audit + competitor benchmarks (enterprise-grade).",
                ],
              },
              {
                title: "Design",
                price: "Starting at £5,000",
                description:
                  "Convert visitors into customers with precision. Corporate-grade creativity, inspired by Aviva and UBS's brand playbooks.",
                items: [
                  "£5,000: Mobile-first website with conversion-focused UX.",
                  "£10,000: Multi-platform branding (web, app, social).",
                ],
              },
              {
                title: "Development",
                price: "Starting at £7,500",
                description:
                  "Enterprise-grade solutions that scale seamlessly. Code that lasts and evolves, built by senior developers with proven enterprise rigor.",
                items: [
                  "£7,500: Secure, fast web site (2-week delivery).",
                  "15,000: Custom web or mobile app as a minimal viable product (MVP).",
                ],
              },
            ].map((service, index) => (
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
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 text-swiss-red" />
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
          className="py-20 md:py-32 bg-white text-neutral-900"
          aria-labelledby="case-studies-title"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-wider uppercase text-swiss-red">Case Studies</p>
              <h2 id="case-studies-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mt-2">Real Results, Real Impact</h2>
              <p className="text-lg sm:text-xl font-medium text-neutral-700 mt-4 max-w-2xl mx-auto">
                Enterprise-grade solutions that deliver measurable ROI
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12" role="list">
              {[
  {
    title: "Audit: FinTech",
    price: "£5,000 Investment",
    description:
      "Using HSBC's risk assessment framework, we identified critical vulnerabilities and optimization opportunities for a global fintech platform.",
    items: [
      "6 critical security vulnerabilities patched",
      "£500K in cost savings identified",
      "2x ROI achieved in 6 months",
      "New vendor contract negotiated",
    ],
    quote: "Profusion's audit uncovered hidden business opportunities and substantial cost savings with our new contract.",
    author: "— Chief Information Officer"
  },
  {
    title: "Design: E-commerce",
    price: "£10,000 Investment",
    description:
      "Transformed a struggling mobile experience into a revenue powerhouse using Aviva's proven UX principles and conversion optimization.",
    items: [
      "70% reduction in mobile bounce rate",
      "30% increase in overall sales",
      "50% faster checkout process",
      "95% customer satisfaction score",
    ],
    quote: "The redesign turned our mobile site from a liability into our top revenue driver. Worth every penny.",
    author: "— Chief Product Officer"
  },
  {
    title: "Development: Blockchain",
    price: "£15,000 Investment",
    description:
      "Delivered a secure, scalable blockchain platform in 90 days using UBS's agile methodology and enterprise security standards.",
    items: [
      "90-day delivery timeline met",
      "127% ROI in first quarter",
      "Zero security incidents",
      "5x user growth supported",
    ],
    quote: "UBS-level security paired with startup speed? Profusion delivered both. 10/10 would partner again.",
    author: "— Chief Executive Officer"
  },
              ].map((study, index) => (
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
                    <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0 text-swiss-red" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-4 border-swiss-red pl-4 italic text-neutral-700">
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
        className="py-20 md:py-32 bg-neutral-900 text-white"
        aria-labelledby="dna-title"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-wider uppercase text-swiss-red">About Us</p>
            <h2 id="dna-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Our DNA</h2>
            <p className="text-lg sm:text-xl font-medium text-neutral-300 mt-4 max-w-2xl mx-auto">
              Where Enterprise Rigor Meets Startup Hustle
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
                description: "Work directly with ex-HSBC, UBS, and Aviva veterans. No account managers, no middlemen—just seasoned experts who've solved similar challenges.",
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
                      <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0 text-swiss-red" />
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
        className="py-20 md:py-32 bg-white text-neutral-900"
        aria-labelledby="faq-title"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-wider uppercase text-swiss-red">FAQ</p>
            <h2 id="faq-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mt-2">Common Questions</h2>
            <p className="text-lg sm:text-xl font-medium text-neutral-700 mt-4 max-w-2xl mx-auto">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Why choose Profusion over a traditional agency?",
                  answer: "Direct access to ex-HSBC, UBS, and Aviva design and technical leads—no juniors, no account managers, no bureaucracy. You get enterprise-grade solutions at 30-40% lower cost, delivered at startup speed. Think bank-level quality without the bloated agency pricing and endless meetings."
                },
                {
                  question: "How does your fixed pricing work?",
                  answer: "We've eliminated the uncertainty of hourly billing. After a thorough scoping session, you get a fixed price that won't change unless you change the requirements. Pay only when you're satisfied, with flexible payment plans available. Our enterprise background means we estimate accurately and deliver predictably."
                },
                {
                  question: "What happens in the free strategy call?",
                  answer: "In 30 minutes, you'll get enterprise-level insights tailored to your business. We'll analyze your challenges, identify quick wins, and outline a clear roadmap. You'll leave with actionable strategies you can implement immediately—whether you work with us or not. No sales pitch, just pure value."
                },
                {
                  question: "How quickly can you deliver?",
                  answer: "Most projects launch within 2-4 weeks. We achieve this through battle-tested frameworks from UBS, automated testing, and parallel execution. Our senior-only team means zero training overhead and no junior mistakes slowing things down. Enterprise quality at startup speed."
                },
                {
                  question: "What makes your enterprise experience valuable for my business?",
                  answer: "We've distilled two decades of HSBC and UBS best practices into practical solutions that work for any size business. You get bank-level security, scalable architecture, and risk management—without the enterprise complexity or cost. It's about future-proofing your business from day one."
                },
                {
                  question: "How do you maintain quality at such speed?",
                  answer: "Our speed comes from experience, not shortcuts. Every solution follows the same rigorous standards we used at HSBC and UBS—automated testing, code reviews, and security checks. We move fast because we know exactly what works, having built similar solutions at enterprise scale."
                },
                {
                  question: "What kind of support do you provide?",
                  answer: "Every project includes 30 days of priority support from the same senior team that built your solution. Beyond that, choose between flexible maintenance packages or let us train your team. Our code is clean, documented, and built to last—you'll never be locked in or left struggling."
                },
                {
                  question: "Which industries do you specialize in?",
                  answer: "While we excel in fintech, retail, and technology, our enterprise-grade methodologies work across all sectors. From startups to scale-ups, we've delivered ROI-focused solutions that grow with your business. During our call, we'll share relevant case studies from your specific industry."
                },
                {
                  question: "Can you handle complex technical challenges?",
                  answer: "Complex challenges are our sweet spot. We've architected trading platforms for UBS, security systems for HSBC, and enterprise solutions for Fortune 500 companies. Now we bring that same expertise to your business. If it's technical and mission-critical, we've probably solved it at enterprise scale."
                },
                {
                  question: "Why are you launching your own brand now?",
                  answer: "After years of being the technical powerhouse behind major agency projects, we're bringing enterprise excellence directly to businesses. This means you get the same technical expertise that agencies rely on, but with direct access to senior talent, transparent pricing, and faster delivery—no middleman markup."
                },
                {
                  question: "How do you ensure project success?",
                  answer: "Success is systematic for us. We combine enterprise-grade project management with startup agility. Clear milestones, daily communications, and regular demos ensure you're always in control. Plus, our fixed pricing model means our incentives are aligned with your success—we only win when you win."
                },
                {
                  question: "What happens if we need changes after launch?",
                  answer: "Business evolves, and so should your technology. That's why we build flexibility into every solution and include a 30-day support period. Need changes later? Our clean, modular code makes updates straightforward. Choose between our maintenance packages or let us train your team—whatever works best for your business."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-neutral-200">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-swiss-red transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-700 pb-6 text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

        {/* Contact - Black Background */}
      <section 
        id="contact" 
        className="py-20 md:py-32 bg-neutral-900 text-white"
        aria-labelledby="contact-title"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-wider uppercase text-swiss-red">Contact</p>
            <h2 id="contact-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Let's Get Started</h2>
            <p className="text-lg sm:text-m font-medium text-neutral-300 mt-4 max-w-3xl mx-auto">
              No pressure, no obligation—just actionable insights you can implement immediately.
            </p>
          </div>

          <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Button 
              className="bg-swiss-red text-white hover:bg-white hover:text-swiss-red rounded-full px-10 py-5 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[200px] sm:min-w-[auto]"
            >
              <Link href="mailto:hello@profusion.io" className="flex items-center justify-center">
                hello@profusion.io
              </Link>
            </Button>
            <Button
              className="bg-swiss-red text-white hover:bg-white hover:text-swiss-red rounded-full px-10 py-5 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[200px] sm:min-w-[auto]"
              aria-label="Book your free 30-minute strategy call"
            >
              <Link href="https://cal.com/profusion/30min" className="flex items-center justify-center">
                Book Your Free 30-Min Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </main>

      {/* Footer - White Background */}
      <footer className="py-8 sm:py-12 bg-white text-neutral-900" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <Link href="#" className="link-underline group">
                <span className="font-black text-xl text-primary">
                  Profusion
                </span>
              </Link>
              <p className="text-sm text-neutral-700 mt-2">© 2025 Profusion. All rights reserved.</p>
            </div>
            <nav className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="#services" className="link-underline group">
                <span className="text-sm text-neutral-700">Services</span>
              </Link>
              <Link href="#case-studies" className="link-underline group">
                <span className="text-sm text-neutral-700">Case Studies</span>
              </Link>
              <Link href="#about-us" className="link-underline group">
                <span className="text-sm text-neutral-700">About Us</span>
              </Link>
              <Link href="#faq" className="link-underline group">
                <span className="text-sm text-neutral-700">FAQ</span>
              </Link>
              <Link href="#contact" className="link-underline group">
                <span className="text-sm text-neutral-700">Contact</span>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}