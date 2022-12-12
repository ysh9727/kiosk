export default function PaymentValue (props) {
  const {price, tabChange0, tabChange1, } = props;
  return (
    <>
      <section className="payingTextWrap">
        <p className="payingText">총 { price }원</p>
        <p className="payingText">결제 방식을 선택해주세요.</p>
      </section>
      <section className="buttonBox">
        <button className="modalButton" onClick={ tabChange1 }>카드결제</button>
        <button className="modalButton" onClick={ tabChange0 } >취소</button>
      </section>
    </>
  )
}
// <>
//   <p className="test">총 { menuValue }원</p>
//   <p className="test">결제 방식을 선택해주세요.</p>
//   <section className="buttonBox">
//     <button className="modalButton" onClick={ () => { tabNumberChange(1); } }>카드결제</button>
//     <button 
//       className="modalButton"
//       onClick={ () => {
//         closeModal();
//         tabNumberChange(0);
//       } }>취소</button>
//   </section>
// </>,