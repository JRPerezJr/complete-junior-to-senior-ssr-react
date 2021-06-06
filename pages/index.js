import Link from 'next/link';
const Index = () => (
  <div>
    <h1>Welcome to Nextjs</h1>
    <Link href="/about">
      <button>About</button>
    </Link>
  </div>
);
export default Index;
