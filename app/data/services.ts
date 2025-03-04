export interface ServiceItem {
  title: string;
  price: string;
  description: string;
  items: string[];
}

export const servicesData: ServiceItem[] = [
  {
    title: "Audit",
    price: "Starting at: £2,500",
    description:
      "Get a clear 30-day roadmap to unlock revenue and eliminate risks. Built on proven methodologies from HSBC and UBS to deliver immediate ROI.",
    items: [
      "£2,500: Complete Site Audit & UX Analysis",
      "£5,000: Enterprise-grade Audit & Research",
    ],
  },
  {
    title: "Design",
    price: "Starting at: £7,500",
    description:
      "Convert more customers with UX-driven design that scales. Combining Aviva's enterprise precision with startup-focused conversion optimization.",
    items: [
      "£7,500: Conversion-optimized Website Design",
      "£15,000: Multi-platform Design System & Branding",
    ],
  },
  {
    title: "Development",
    price: "Starting at: £10,000",
    description:
      "Enterprise-grade code delivered at startup speed. Built by senior UBS and HSBC developers for performance, security, and scalability.",
    items: [
      "£10,000: High-performance Website",
      "£20,000: Custom Web/Mobile App MVP",
    ],
  },
  {
    title: "Operations",
    price: "Starting at: £5,000",
    description:
      "Streamline workflows and automate processes that scale. Enterprise-proven systems to accelerate growth while reducing operational costs.",
    items: [
      "£5,000: Operations & Workflow Automation",
      "£10,000: Full Operations Transformation",
    ],
  },
  {
    title: "Retainer",
    price: "Starting at: £2,500/month",
    description:
      "On-demand access to senior technical expertise. From rapid development sprints to strategic guidance, we're your dedicated partner.",
    items: [
      "£2,500/month: 25 Hours Dedicated Support",
      "£5,000/month: 50 Hours Dedicated Support",
    ],
  },
  {
    title: "In-house",
    price: "Starting at: £10,000/month",
    description:
      "Embed enterprise expertise within your team. Get dedicated specialists who bring bank-grade practices to accelerate your success.",
    items: [
      "£10,000/month: One Senior Lead On-site",
      "£20,000/month: Two Senior Lead On-site",
    ],
  },
]; 