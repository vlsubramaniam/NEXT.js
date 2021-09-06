import { useRouter } from 'next/router';

function ClientDetailPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1> Client Detail Page</h1>
    </div>
  );
}

export default ClientDetailPage;
