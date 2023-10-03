import logo from '/logo.svg';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Header = () => {
  const { user } = useAuthValue();

  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logomarca" />
        </Link>
        <nav className={styles.navmenu}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
            {!user && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
