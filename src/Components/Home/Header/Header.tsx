import styles from "./Header.module.css"
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to = "/" className={styles.link}><p>Blog</p></Link>
      <Link to = "/contact" className={styles.link}><p>お問い合わせ</p></Link>
    </header>
  );
};
