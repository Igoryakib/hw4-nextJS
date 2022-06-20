import Link from "next/link";
import styles from "../styles/Navigation.module.css";

import NavLink from "./Navlink";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.listItems}>
        <NavLink exact href={'/'} activeClass={styles.itemLink_active} classes={styles.itemLink} >
          Home
        </NavLink>
        <NavLink href={'/movies'} activeClass={styles.itemLink_active} classes={styles.itemLink} >
          Movies
        </NavLink>
          {/* <Link href={'/'}>
          <li className={styles.itemLink}>Home</li>
          </Link>
          <Link href={'/movies'}>
          <li className={styles.itemLink}>Movies</li>
          </Link> */}
      </ul>
    </nav>
  );
};
export default Navigation;