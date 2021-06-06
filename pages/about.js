import Link from 'next/link';
import Image from '../components/image';

const About = () => (
  <main>
    <h1>Welcome to the about page.</h1>
    <Link href="/">
      <button>Home</button>
    </Link>
    <Image />
  </main>
);
export default About;
