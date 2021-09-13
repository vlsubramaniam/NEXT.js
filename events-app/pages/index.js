import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
      revalidate: 1800,
    },
  };
}

function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
