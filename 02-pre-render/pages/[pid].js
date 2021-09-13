import path from 'path';
import fs from 'fs/promises';

const ProductDetailPage = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

/************ NOT WORKING ==> Error - Unable to resolve module fs/promises ***************/
// export async function getData() {
//   const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
//   const JSONData = await fs.readFile(filePath);
//   const data = JSON.parse(JSONData);
//   return data;
// }

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const JSONData = await fs.readFile(filePath);
  const data = JSON.parse(JSONData);
  const { params } = context;
  const productId = params.pid;
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const JSONData = await fs.readFile(filePath);
  const data = JSON.parse(JSONData);
  const productIds = data.products.map((product) => ({
    params: {
      pid: product.id,
    },
  }));

  return {
    paths: productIds,
    /* fallback: true /* Tells Next.js the paths that are not availble are valid and should be 
    generated JIT & not pregenerated. Example there may be instances where some of the pages are not visited often
    and it is a waste of time to prerender all the pages
    */
    // fallback: true,
    fallback: false,
    // fallback: 'blocking',
  };
}

export default ProductDetailPage;
