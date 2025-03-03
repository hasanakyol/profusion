export interface CaseStudy {
  title: string;
  price: string;
  description: string;
  items: string[];
  quote: string;
  author: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    title: "Accountancy Firm Automation",
    price: "Investment: £5,000",
    description:
      "We took a mid-sized accountancy firm's old manual bookkeeping and switched it to a slick, automated CRM system with real-time tracking. It cut down tedious work and kept everything spot-on.",
    items: [
      "50% Less Time on Data Entry",
      "£20,000 Saved in Yearly Staff Costs",
      "Month-end Close Now Takes a Day, Not a Week",
      "Fully Audit-ready, No Stress",
    ],
    quote: "We're saving 10 hours a week now. The system paid off in two months, and my team's happier focusing on clients, not spreadsheets.",
    author: "— Managing Partner"
  },
  {
    title: "E-commerce Transformation",
    price: "Investment: £15,000",
    description:
      "We gave a struggling furniture retailer's outdated online store a fresh look, making it super easy to shop on phones and turning browsers into buyers across their 2,000+ products.",
    items: [
      "80% More Sales from Mobile Users",
      "Twice as Many People Hitting 'Buy'",
      "£50,000 Extra Revenue in Q1",
      "Half as Many Abandoned Carts",
    ],
    quote: "The new site's a game-changer. We earned back the cost in a month—customers love the smooth checkout.",
    author: "— Product Manager"
  },
  {
    title: "Crypto Wallet App",
    price: "Investment: £20,000",
    description:
      "We built a straightforward, secure cryptocurrency wallet app with real-time prices, auto-trading options, and support for multiple wallets—perfect for everyday users.",
    items: [
      "5,000 People on Waitlist",
      "Supports Ethereum Compatible Networks",
      "Trades Done in Under 3s",
      "Zero Security Incidents",
    ],
    quote: "It went from idea to beta in three months. Users love the simplicity, and we're ready for full launch.",
    author: "— Founder"
  }
]; 