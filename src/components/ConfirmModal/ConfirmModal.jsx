import css from './ConfirmModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const ConfirmModal = ({ isModalOpen, hideModal, confirm, contact }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={hideModal}
      overlayClassName={css.overlay}
      className={css.modal}
      contentLabel="confirmModal"
    >
      <p>Are you sure you want to delete the contact {contact.name}?</p>
      <button onClick={hideModal}>No</button>
      <button onClick={confirm}>Yes</button>
    </Modal>
  );
};

export default ConfirmModal;
