import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.navmenu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
