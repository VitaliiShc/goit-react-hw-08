import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';

import css from './AppBar.module.css';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import Loader from './../Loader/Loader';
import Navigation from '../Navigation/Navigation';
const UserMenu = lazy(() => import('../UserMenu/UserMenu'));
const AuthMenu = lazy(() => import('../AuthMenu/AuthMenu'));

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Navigation />
        <Suspense fallback={<Loader />}>
          {!isRefreshing && <>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</>}
        </Suspense>
      </div>
    </header>
  );
};

export default AppBar;
