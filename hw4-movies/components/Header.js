import Navigation from "./Navigation";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header_section}>
      <h1 className={styles.logo_title}>SearchFilms</h1>
      <Navigation />
    </header>
  );
};

export default Header;