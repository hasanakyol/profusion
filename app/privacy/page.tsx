import Link from "next/link"

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Profusion, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or engage with our services. Our practices are built on industry-leading security standards and best practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information (company name, role)</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Website usage data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our services</li>
                <li>Communicate about projects and updates</li>
                <li>Process payments and maintain accounts</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement comprehensive security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and testing</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure data centers and backup systems</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Transfers</h2>
              <p className="mb-4">
                We only share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Team members who need it to provide services</li>
                <li>Service providers under strict confidentiality agreements</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not directed to individuals under 16. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this policy periodically. Significant changes will be notified via email or website announcement.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 mb-4">
                For privacy-related inquiries, please contact our Data Protection Officer at{' '}
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