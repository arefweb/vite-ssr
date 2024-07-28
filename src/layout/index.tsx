import { Outlet, Link } from "react-router-dom";

import styles from './styles.module.css';

function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
