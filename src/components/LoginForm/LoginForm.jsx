import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { logIn } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import css from './LoginForm.module.css';
import { selectUser } from '../../redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); // ???
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success(`Hello ${user.name}.`); // ???
      })
      .catch(() => {
        toast.error(`Failed to login.`);
      });
    actions.resetForm();
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format!').required('Required!'),
    password: Yup.string()
      .min(8, 'Too short!')
      .max(256, 'Too long!')
      .required('Required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldwrap}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email{' '}
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your registration email"
            id={emailFieldId}
            className={css.input}
          />
        </div>
        <div className={css.fieldwrap}>
          <label htmlFor={passwordFieldId} className={css.label}>
            Password{' '}
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </label>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
            id={passwordFieldId}
            className={css.input}
          />
        </div>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
