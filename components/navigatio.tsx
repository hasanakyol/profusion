import Link from 'next/link';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/profiles">Profiles</Link></li>
      <li><Link href="/segments">Segments</Link></li>
      <li><Link href="/campaigns">Campaigns</Link></li>
      <li><Link href="/templates">Templates</Link></li>
      <li><Link href="/integrations">Integrations</Link></li>
      <li><Link href="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default Navigation;
