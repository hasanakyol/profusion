import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-3xl tracking-tighter text-primary">Profusion</div>
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Case Studies", id: "case-studies" },
              { name: "Services", id: "services" },
              { name: "About Us", id: "about-us" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={`#${item.id}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button className="bg-swiss-red text-white hover:bg-white hover:text-swiss-red rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
            Book a Call
          </Button>
        </div>
      </header>

      {/* Hero - White Background */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white text-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Enterprise Expertise.
              </span>
              <span className="block text-swiss-red opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Startup Speed.
              </span>
              <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                Fixed Pricing.
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl font-light leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Audit, Design, development, and operations by ex-UBS, HSBC, and Shell leads.
            </p>
            <Button
              className="bg-swiss-red text-white hover:bg-white hover:text-swiss-red rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 text-sm italic text-neutral-600 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
              No pressure, no obligation—just actionable insights you can implement immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies - Black Background */}
      <section id="case-studies" className="py-20 md:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold tracking-widest text-swiss-red uppercase mb-4 text-center">Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-white">Proof We Deliver</h2>
          <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-neutral-300">
            See how companies like yours achieved breakthrough results with Profusion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Audit",
                challenge: "A Loyalty startup needed investor trust after a breach.",
                solution: "£5k audit using HSBC-grade frameworks, exposing six gaps.",
                result: "2x ROI in 6 months; $500K saved.",
                quote:
                  "Profusion's audit uncovered flaws we'd missed for years. Their HSBC-grade framework restored investor confidence overnight.",
                author: "CIO",
              },
              {
                title: "Design",
                challenge: "A retailer's site drove away 70% of mobile users.",
                solution: "£10k redesign inspired by Aviva's UX principles.",
                result: "30% sales lift, 50% faster checkout.",
                quote:
                  "The Aviva-inspired redesign turned our mobile site from a liability into our top revenue driver. Worth every penny.",
                author: "CPO",
              },
              {
                title: "Development",
                challenge: "A blockchain firm needed a secure app + site in 90 days.",
                solution: "£25k build using UBS's agile model.",
                result: "Leen.io launched on time, 10K+ signups.",
                quote:
                  "UBS-level security paired with startup speed? Profusion delivered both. 10/10 would partner again.",
                author: "CEO",
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="bg-neutral-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {study.title}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <p className="font-medium text-white">Challenge:</p>
                    <p className="text-neutral-300">{study.challenge}</p>
                    <p className="font-medium text-white">Solution:</p>
                    <p className="text-neutral-300">{study.solution}</p>
                    <p className="font-medium text-white">Result:</p>
                    <p className="text-neutral-300">{study.result}</p>
                  </div>
                  <blockquote className="border-l-4 border-white pl-4 italic text-neutral-300">
                    "{study.quote}"
                  </blockquote>
                  <p className="mt-2 text-sm font-medium text-neutral-400">— {study.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services - White Background */}
      <section id="services" className="py-20 md:py-32 bg-white text-neutral-900">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold tracking-widest text-swiss-red uppercase mb-4 text-center">Services</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-primary">Our Expertise, Your Edge</h2>
          <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-neutral-700">
            Fixed prices. No surprises. Payment plans available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Audit",
                price: "Starting at £2,500",
                description:
                  "Uncover blindspots, create actionable roadmaps. We dissect your tech stack or workflows using methodologies honed at HSBC and Shell.",
                items: [
                  "£2,500: Site + UX teardown (startup-ready).",
                  "£5,000: Full workflow audit + competitor benchmarks (enterprise-grade).",
                ],
              },
              {
                title: "Design",
                price: "Starting at £5,00",
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
                  "Enterprise-grade solutions that scale. Code that lasts, built by senior developers trained in Shell's enterprise rigor.",
                items: [
                  "£7,500: Secure, fast web site (2-week delivery).",
                  "15,000: Custom web or mobile app as a minimal viable product (MVP).",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-neutral-100 p-8 rounded-2xl hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-lg font-medium mb-4 text-neutral-700">{service.price}</p>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                {service.items.length > 0 && (
                  <ul className="space-y-3 text-sm">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0 text-swiss-red" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our DNA - Black Background */}
      <section id="about-us" className="py-20 md:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold tracking-widest text-swiss-red uppercase mb-4 text-center">About Us</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-white">Our DNA</h2>
          <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-neutral-300">
            Where Enterprise Rigor Meets Startup Hustle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Obsession with Outcomes",
                description: "We don't just deliver projects—we drive transformations. Every engagement is measured by the lasting impact it creates for your business.",
              },
              {
                title: "No Hierarchies, Just Expertise",
                description: "Work directly with ex-HSBC, UBS, and Shell veterans. No account managers, no middlemen—just seasoned experts who've solved similar challenges.",
              },
              {
                title: "Speed Without Compromise",
                description: "Enterprise-grade quality at startup velocity. Our battle-tested frameworks let us move fast while maintaining bank-level standards.",
              },
              {
                title: "Bold Ideas, Backed by Proof",
                description: "Innovation isn't just creativity—it's calculated risk-taking. We blend corporate wisdom with startup agility to deliver proven results.",
              },
              {
                title: "Partners, Not Vendors",
                description: "Your success is our metric. We invest in understanding your business deeply and align our incentives with your growth trajectory.",
              },
              {
                title: "Enterprise-Grade Security",
                description: "Security isn't an add-on—it's woven into our DNA. Every solution inherits two decades of financial sector security practices from UBS and HSBC.",
              },
            ].map((trait, index) => (
              <div
                key={index}
                className="bg-neutral-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{trait.title}</h3>
                <p className="text-neutral-700">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - White Background */}
      <section id="contact" className="py-20 md:py-32 bg-white text-neutral-900">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold tracking-widest text-swiss-red uppercase mb-4 text-center">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center text-primary">Let's Get Talking</h2>
          <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-neutral-700">
          No pressure, no obligation—just actionable insights you can implement immediately.
          </p>

          <div className="text-xl space-y-4 text-center">
            <p>
              Call:{" "}
              <a href="tel:+442079460000" className="underline hover:text-swiss-red transition-colors text-primary">
                +44 20 7946 0000
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:edge@profusion.io" className="underline hover:text-swiss-red transition-colors text-primary">
                hello@profusion.io
              </a>
            </p>
          </div>
          <div className="mt-8 text-center">
          <Button
              className="bg-swiss-red text-white hover:bg-white hover:text-swiss-red rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - White Background */}
      <footer className="py-12 bg-white text-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-black text-xl text-primary">Profusion</p>
              <p className="text-sm text-neutral-500 mt-2">© 2025 Profusion. All rights reserved.</p>
            </div>
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center md:items-end">
              <Link href="#case-studies" className="text-sm text-neutral-500 hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link href="#services" className="text-sm text-neutral-500 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#about-us" className="text-sm text-neutral-500 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="text-sm text-neutral-500 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

