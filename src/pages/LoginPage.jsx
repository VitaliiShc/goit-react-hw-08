import { Link } from 'react-router-dom';

// import css from './Pages.module.css';
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';
import LoginForm from '../components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <>
      <DocumentTitle>Log In</DocumentTitle>
      <h1>Please log in</h1>
      <LoginForm />
      <p>
        New to Contact Book? <Link to="/register">Register</Link>
      </p>
    </>
  );
};

export default Login;
