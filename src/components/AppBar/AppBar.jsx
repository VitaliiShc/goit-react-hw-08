import { useSelector } from 'react-redux';

import css from './AppBar.module.css';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.header}>
      <Navigation />
      {!isRefreshing && <>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</>}
    </header>
  );
};

export default AppBar;
