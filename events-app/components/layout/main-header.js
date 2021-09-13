import Link from 'next/link';
import classes from './main-header.module.css';

const MainHeader = () => (
  <>
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">
              <a className="pointer">Browse All Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default MainHeader;
