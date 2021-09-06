import { useRouter } from 'next/router';

function SlugPage() {
  const user = [
    {
      id: 'rajan',
      name: 'Rajan',
    },
    {
      id: 'vls',
      name: 'Subramaniam',
    },
  ];
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <ul>
        {user.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default SlugPage;
