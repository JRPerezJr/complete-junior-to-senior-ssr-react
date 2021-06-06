import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps() {
  // fetch no longer needs to be imported from isomorphic-unfetch
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const robots = await res.json();

  return {
    props: {
      robots,
    },
  };
}
const Robots = ({ robots }) => {
  return (
    <div className="container">
      <Head>
        <title>SSR React with Nextjs | About</title>
        <link rel="icon" href="/robotfavi.png" />
      </Head>
      <h1>Robots</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <div>
        {robots.map(robot => (
          <li key={robot.id}>
            <Link href={`robots/${robot.id}`}>
              <a>{robot.name}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Robots;
