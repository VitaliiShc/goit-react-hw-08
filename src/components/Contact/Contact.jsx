import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useState } from 'react';

import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import ContactEditor from '../ContactEditor/ContactEditor';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

// ===
import Modal from 'react-modal';
Modal.setAppElement('#root');
// ===

export const Contact = ({ contact: { id, name, number } }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(({ name }) => {
        toast.success(`Contact ${name} has been deleted.`);
      })
      .catch(({ name }) => {
        toast.error(`Failed to delete contact ${name}, try again.`);
      });
  };

  const handleShowConfirmModal = () => {
    setShowConfirmModal(true);
    document.body.classList.add('noScroll');
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
    document.body.classList.remove('noScroll');
  };

  const handleConfirm = () => {
    handleDelete();
    document.body.classList.remove('noScroll');
  }

  return (
    <>
      {!isEditing ? (
        <>
          <div>
            <p className={css.text}>
              <BsFillPersonFill size="20" />
              &nbsp;{name}
            </p>
            <p className={css.text}>
              <BsFillTelephoneFill size="18" />
              &nbsp;{number}
            </p>
          </div>
          <button className={css.btn} onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className={css.btn} onClick={handleShowConfirmModal}>
            Delete
          </button>
          <ConfirmModal
            isModalOpen={showConfirmModal}
            hideModal={handleCloseConfirmModal}
            confirm={handleConfirm}
            contact={{ id, name }}
          />

          {/* <Modal isOpen={showConfirmModal}>
            <p>Are you sure you want to delete the contact {name}?</p>
            <button onClick={handleCloseModal}>Close Modal</button>
            <button onClick={handleDelete}>Del Contact</button>
          </Modal> */}
        </>
      ) : (
        <ContactEditor
          contact={{ id, name, number }}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default Contact;
