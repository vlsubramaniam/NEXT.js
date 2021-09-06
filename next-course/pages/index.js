import Link from 'next/Link';

function HomePage() {
  return (
    <div>
      <h1> The Home Page </h1>
      <br />
      <div
        style={{
          color: 'blue',
          marginLeft: '100px',
          textDecoration: 'underline',
        }}
      >
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default HomePage;
