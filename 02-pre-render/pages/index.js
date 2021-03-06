import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

const HomePage = ({ products }) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const JSONData = await fs.readFile(filePath);
  const { products } = JSON.parse(JSONData);

  if (!products) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (products.length <= 0) {
    return { notFound: true };
  }

  return {
    props: {
      products,
    },
    // Utilizing Incremental Static Generation (ISR)
    revalidate: 10,
  };
}

export default HomePage;
