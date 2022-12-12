import { useState } from "react";
export default function ModalContent (props) {
  const {menuBasket} = props;
  //props 내의 key값이 price인 object를 가져와 배열로 return해줍니다.
  //0 = 메뉴종류, 1 = 메뉴가격, 2 = 메뉴종류, 3 = 메뉴가격 ...
  function priceValue() {
    let returnPrice = [];
    for (const [key] of Object.entries(props)) {
      switch (key) {
        case "price":
          for (const [key, value] of Object.entries(props.price)) {
            returnPrice.push(key);
            returnPrice.push(value);
          }
          break;
        default:
          break;
      }
    }
    return returnPrice;
  }
  //props 내의 price를 출력하는 함수
  const priceFunction = () => {
    const myValue = priceValue();
    if(typeof props.price === "object") { //메뉴 옵션이 여러개일시 
      let jsxPrint = [];
      let i = 0;
      while (i < myValue.length) { //jsxPrint에 priceTypeValue를 순차적으로 push해줌
        const myValueTemp = myValue[i+1];
        const jsxArray = <p 
          className="priceTypeValue"
          onClick={() => { 
            props.setModalSend(jsxArray.props.children[0]);
            foodValueChange(myValueTemp);
            } }>
          {myValue[i]} {myValue[i+1]}원
        </p>;
        jsxPrint.push(jsxArray);
        i = i+2;
      }
      if(props.type === "burger") { //버거일시 세로로 출력
        return (
          <section className="priceType priceC">{jsxPrint}</section>
        )
      } else { //그 외는 가로로 출력
        return (
          <section className="priceType priceR">{jsxPrint}</section>
        )
      }
    } else { // 메뉴 옵션이 1개일시
      const myValueTemp = myValue[1];
        return (
          <section className="priceType">
            <p onClick={() =>{foodValueChange(myValueTemp)}} className="priceTypeValue">
              {myValue[0]} {myValue[1]}
            </p>
          </section>
        )
    }
  }
  //props.type이 burger일때 추가옵션을 출력하는 함수
  const optionFunction = () => {
    if(props.type === "burger") {
      return (
        <section className="customWrap">
          <section className="ModalItemCustom">
            <p className="ModalItem">소스추가</p>
            <p className="ModalItemValue">{sauce*300}원</p>
            <button 
              className="ModalItemButton"
              onClick={() => { buttonMinus(sauce, sauceChange); }}
            >-</button>
            <p className="ModalItemNumber">{sauce}</p>
            <button 
              className="ModalItemButton"
              onClick={() => { buttonPlus(sauce, sauceChange) }}
            >+</button>
          </section>
          <section className="ModalItemCustom">
            <p className="ModalItem">채소추가</p>
            <p className="ModalItemValue">{vagetable*700}원</p>
            <button 
              className="ModalItemButton"
              onClick={() => { buttonMinus(vagetable, vagetableChange) }}
            >-</button>
            <p className="ModalItemNumber">{vagetable}</p>
            <button 
              className="ModalItemButton"
              onClick={() => { buttonPlus(vagetable, vagetableChange) }}
            >+</button>
          </section>
          <section className="ModalItemCustom">
            <p className="ModalItem">패티추가</p>
            <p className="ModalItemValue">{patty*1200}원</p>
            <button 
              className="ModalItemButton"
              onClick={() => { buttonMinus(patty, pattyChange) }}
            >-</button>
            <p className="ModalItemNumber">{patty}</p>
            <button 
              className="ModalItemButton"
              onClick={() => { buttonPlus(patty, pattyChange) }}
            >+</button>
          </section>
        </section>
      )
    }
  }
  //소스 채소 패티의 갯수를 조절하는 버튼 함수
  //갯수가 0미만, 6이상이 되지않게합니다. (state명, state변경함수)
  const buttonPlus = (stateMain, stateChange) => {
    (stateMain >= 5) ? stateChange(5) : stateChange(stateMain + 1);
  }
  const buttonMinus = (stateMain, stateChange) => {
    (stateMain <= 0) ? stateChange(0) : stateChange(stateMain - 1);
  }
  //소스값 채소값 패티값 단품,세트여부 더해서 Menu.js의 ShoppingBasket에 총 가격 넘겨주기
  let foodCommon = priceValue();
  let [sauce, sauceChange] = useState(0);
  let [vagetable, vagetableChange] = useState(0);
  let [patty, pattyChange] = useState(0);
  let [foodValue, foodValueChange] = useState(foodCommon[1]);
  let totalValue = [foodValue, sauce*300, vagetable*700, patty*1200];
  const totalValueSum = totalValue[0] + totalValue[1] + totalValue[2] + totalValue[3];

  if( menuBasket.basketBoolean ) {
    (props.type === "burger") ? menuBasket.burger(true) : menuBasket.burger(false);
    if (props.type === "burger") {
      menuBasket.sauce(sauce);
      menuBasket.vage(vagetable);
      menuBasket.patty(patty);
    } else {
      menuBasket.sauce(0);
      menuBasket.vage(0);
      menuBasket.patty(0);
    };
    menuBasket.menu(props.name);
    menuBasket.option(props.modalSend);
    menuBasket.value(totalValueSum);
    menuBasket.basket(false);
  }

  return (
    <>
      <figure className="ModalFigure">
        <div className="Diagonal" />
        <img className="ModalImg" src={props.image} alt={props.name}></img>
        <figcaption className="ModalFigcaption">
          <p>{props.introduce}</p>
          <h2>{props.name}</h2>
          </figcaption>
      </figure>
      <section className="optionWrap">
        {priceFunction()}
        {optionFunction()}
      </section>
      <section className="sumValue">
        {totalValueSum}원
      </section>
    </>
  )
}
