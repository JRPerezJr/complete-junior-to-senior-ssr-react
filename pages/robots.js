import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const Robots = props => {
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
        {props.robots.map(robot => (
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

Robots.getServerSideProps = async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return { robots: data };
  } catch (error) {
    console.log('There was an error', error);
    return;
  }
};
export default Robots;
