import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import './MenuList.css';
//change를 함수에 담아 props로 보내줌으로써 자식에서 상위state를 변경할수있다

export default function MenuList(props) {
  const {name, price, image, introduce, type, menuBasket} = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSend, setModalSend] = useState("");

  function modalSendChange(option) {
    setModalSend(option);
  }
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  // 감싸는 태그에 onClick 사용불가능
  // <></>로 감싸서 활용하자
  return (
    <>
      <figure 
        className="ListBox" 
        onClick={() => {
          openModal();
          for (const [key] of Object.entries(props.price)) {
            // menuBasket.option(key);
            setModalSend(key);
            break;
          }
        }}
      >
        <div className="ListImgWrap">
          <img className="ListImg" src={image} alt={name+"이미지"} />
        </div>
        <figcaption className="ListName">
          {name}
        </figcaption>
      </figure>
      <Modal
        className="ModalWrap"
        isOpen={modalIsOpen}
      >
        <section className="ModalBox">
          <ModalContent 
            name={name}
            price={price}
            image={image}
            introduce={introduce}
            type={type}
            menuBasket={menuBasket}
            modalSend={modalSend}
            setModalSend={modalSendChange}
          />
          <section className="ModalButtonWrap">
            {/* <button onClick={closeModal} className="ModalConfirmButton">담기</button> */}
            <button onClick={() => {
              closeModal(); 
              menuBasket.basket(true);
              }} className="ModalConfirmButton">담기</button>
            <button onClick={() => {
              closeModal();
              menuBasket.basket(false);
              }} className="ModalConfirmButton">취소</button>
          </section>
        </section>
      </Modal>
    </>
  )
}