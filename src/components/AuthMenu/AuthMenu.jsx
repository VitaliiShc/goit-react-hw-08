import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './AuthMenu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AuthMenu = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Log In
        </NavLink>
      </nav>
    </>
  );
};

export default AuthMenu;
