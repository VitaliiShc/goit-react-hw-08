import { useDispatch } from 'react-redux';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useState } from 'react';

import { editContact, fetchContacts } from '../../redux/contacts/operations';
import css from './ContactEditor.module.css';

export const ContactEditor = ({ contact: { id, name, number }, onClose }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);

  const dispatch = useDispatch();

  const initialValues = {
    name: contactName,
    number: contactNumber,
  };

  const ContactEditorSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
    number: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!')
      .matches(/^[0-9-]+$/, 'Numbers and dashes only'),
  });

  const handleSubmit = () => {
    dispatch(
      editContact({
        id,
        name: contactName,
        number: contactNumber,
      })
    )
      .unwrap()
      .then(() => {
        onClose();
        toast.success(`Contact ${contactName} edited.`);
        dispatch(fetchContacts());
      })
      .catch(() => {
        toast.error(`Failed to edit contact ${contactName}, try again.`);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactEditorSchema}
      enableReinitialize={true}
    >
      <Form className={css.form}>
        <div className={css.fieldwrap}>
          <BsFillPersonFill size="20" />
          <Field
            name="name"
            type="text"
            className={css.input}
            onChange={(evt) => setContactName(evt.target.value)}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.fieldwrap}>
          <BsFillTelephoneFill size="18" />
          <Field
            name="number"
            type="tel"
            className={css.input}
            onChange={(evt) => setContactNumber(evt.target.value)}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.save} type="submit">
          Save
        </button>
        <button className={css.close} type="button" onClick={() => onClose()}>
          Close
        </button>
      </Form>
    </Formik>
  );
};

export default ContactEditor;
