import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PaymentValue from './payment/PaymentValue';
import PaymentAnimation from './payment/PaymentAnimation';
import './PayModal.css';

//PayModal.scss 생성 후 작성
//대기번호 보여주기, n초후 메인으로 이동(router-dom의 리다이렉트 사용)
export default function PayModal(props) {
  const {menuValue} = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tabNumber, tabNumberChange] = useState(0);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const tabNumber0 = () => {
    tabNumberChange(0);
    closeModal();
  };
  const tabNumber1 = () =>  tabNumberChange(1);
  //0=총가격 1=결제화면
  const modalList = [
    <PaymentValue 
      price = { menuValue }
      tabChange0 = { tabNumber0 }
      tabChange1 = { tabNumber1 }
    />,
    <PaymentAnimation />,
  ]


  return (
    <>
      <button 
        className="MenuButton" 
        onClick={() => {
          if(menuValue > 0) { openModal() }
          }}>결제</button>
      <Modal className="ModalWrap" isOpen={modalIsOpen}>
        <article className="ModalBoxPay">
        { modalList[tabNumber] }
        </article>
      </Modal>
    </>
  )
}