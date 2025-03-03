import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full z-50 backdrop-blur-md bg-white/95 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-neutral-900 hover:text-red-700 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-primary mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Services Overview</h2>
              <p className="mb-4">
                Profusion ("we," "our," or "us") provides enterprise-grade software development, design, audit, and operations services. These Terms of Service ("Terms") govern your access to and use of our services, including our website, consulting services, and deliverables.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Engagement Process</h2>
              <p className="mb-4">
                Our engagement typically begins with a free strategy call, followed by a formal proposal. All work is conducted under fixed-price agreements unless explicitly stated otherwise. Project commencement requires written approval and, where applicable, initial payment as per the agreed terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property Rights</h2>
              <p className="mb-4">
                Upon full payment, clients receive full intellectual property rights to custom deliverables created specifically for their project. This excludes pre-existing proprietary frameworks, tools, and methodologies used in the delivery process, which remain the property of Profusion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Confidentiality</h2>
              <p className="mb-4">
                We maintain strict confidentiality regarding all client information and project details. Our team adheres to industry-standard security protocols and non-disclosure agreements. Client data is handled in accordance with our Privacy Policy and applicable data protection regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Our services operate on fixed-price agreements with clear payment milestones. Payment terms are net 30 unless otherwise specified. We offer flexible payment plans for larger projects. All prices are exclusive of applicable taxes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Project Delivery</h2>
              <p className="mb-4">
                We commit to delivery timeframes specified in project proposals. Changes to project scope may affect delivery timelines and must be agreed upon in writing. All deliverables include a 30-day support period post-launch.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Quality Assurance</h2>
              <p className="mb-4">
                All deliverables undergo rigorous quality assurance testing based on industry best practices and standards. Clients have a review period to request reasonable adjustments within the agreed scope.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                Our liability is limited to the total amount paid for the specific service in question. We are not liable for indirect, consequential, or incidental damages arising from the use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate the engagement with 30 days written notice. Clients are responsible for payment of all work completed up to the termination date. Early termination fees may apply as specified in project proposals.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="mb-4">
                These Terms are governed by the laws of the United Kingdom. Any disputes shall be resolved in the courts of London, England.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 mb-4">
                For any questions about these Terms of Service, please contact us at{' '}
                <Link href="mailto:hello@profusion.io" className="text-red-700 hover:underline">
                  hello@profusion.io
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 