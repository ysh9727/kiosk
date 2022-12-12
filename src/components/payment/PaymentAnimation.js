import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function PaymentAnimation () {
  const navigate = useNavigate();


  useEffect(() => {
    const topCard = document.querySelector(".topCard");
    topCard.style.animation = "cardScan 3.6s ease-out 1";
    setTimeout(() => {
      navigate("/waitingTurn");
    }, 3500)
  })

  return (
    <>
      <section className="cssBox">
        <div className="topCard">
          <div className="cardMagnetic" />
        </div>
        <div className="cardReader" />
      </section>
      <p className="payingText">결제 중입니다 잠시 기다려주세요.</p>
    </>
  )
}

//<>
//<div className="cssBox">
//  <div className="topCard">
//    <div className="cardMagnetic" />
//  </div>
//  <div className="cardReader" />
//</div>
//<button className="modalButton" onClick={ () => { 
//  cssMotion();
//  } }>결제버튼</button>
//</>,