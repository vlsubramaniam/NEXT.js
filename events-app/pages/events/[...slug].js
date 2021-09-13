import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

export async function getServerSideProps(context) {
  const { params } = context;
  const [year, month] = params.slug;

  if (
    isNaN(+year) ||
    isNaN(+month) ||
    +year > 2030 ||
    +year < 2021 ||
    +month < 1 ||
    +month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: +year,
    month: +month,
  });
  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
}

function FilteredEventsPage({ hasError, filteredEvents, year, month }) {
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filters!!!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No Events found...</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(+year, +month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
