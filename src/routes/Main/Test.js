import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export default function Test () {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }


  return (
    <>
      <button onClick={openModal}>open</button>
      <Modal 
        isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        모달 콘텐츠
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  )
}