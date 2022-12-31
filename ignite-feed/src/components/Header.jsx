import styles from "./Header.module.css";
import igniteLogo from "../assets/icons/igniteLogo.svg";

console.log(styles);

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <strong>Igite Feed</strong>
    </header>
  );
};
export default Header;
