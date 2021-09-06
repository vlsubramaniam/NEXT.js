import Link from 'next/Link';

function AboutPage() {
  return (
    <div>
      <h1>The About Page</h1>
      <br />
      <div
        style={{
          color: 'blue',
          marginLeft: '100px',
          textDecoration: 'underline',
        }}
      >
        <Link
          style={{ color: 'blue' }}
          href={{
            pathname: '/',
            // query: '/a',
          }}
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
