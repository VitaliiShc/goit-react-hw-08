// import css from './Pages.module.css';
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <h1>Register your account</h1>
      <RegisterForm />
    </>
  );
};

export default Register;
