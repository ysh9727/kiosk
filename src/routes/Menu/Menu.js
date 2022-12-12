import React, {useState, useEffect} from "react";
import MenuButton from "../../components/MenuButton";
import MenuList from "../../components/MenuList";
import ShoppingBasket from "../../components/ShoppingBasket";
import foodJson from '../../menu.json';
import PayModal from "../../components/PayModal";
import "./Menu.css";

//아무런 행동 안할시 n초 후 Main으로 이동하는 기능 만들기
export default function Menu () {
  const {burger, side, beverage, coffee} = foodJson;
  let [tabNumber, tabNumberChange] = useState(0);

  let [isBurger, isBurgerChange] = useState([]); //[boolean]
  let [menuName, menuNameChange] = useState([]); //[string]
  let [menuOption, menuOptionChange] = useState([]); //[string]
  let [sauceCustom, sauceCustomChange] = useState([]); //[number]
  let [vageCustom, vageCustomChange] = useState([]); //[number]
  let [pattyCustom, pattyCustomChange] = useState([]); //[number]
  let [menuValue, menuValueChange] = useState([]); //[number]
  let [basketBoolean, basketBooleanChange] = useState(false); //boolean
  const menuBasket = {
    // menu: (name) => {menuNameChange(menuName.concat(name))},
    menu: (name) => {menuNameChange([...menuName, name])},
    option: (option) => {menuOptionChange([...menuOption, option])},
    sauce: (sauce) => {sauceCustomChange([...sauceCustom, sauce])},
    vage: (vage) => {vageCustomChange([...vageCustom, vage])},
    patty: (patty) => {pattyCustomChange([...pattyCustom, patty])},
    value: (value) => {menuValueChange([...menuValue, value])},
    burgerBoolean: isBurger,
    burger: (burger) => {isBurgerChange([...isBurger, burger])},
    basketBoolean: basketBoolean,
    basket: (basket) => {basketBooleanChange(basket)}
  }
  const tabFunction = (tab) => {
    return tabNumberChange(tab);
  }
  const sumValue = () => {
    let returnValue = 0;
    for (let i = 0; i<menuValue.length; i++) {
      returnValue += menuValue[i];
    }
    return returnValue;
  }
  //TODO : 컴포넌트로 분리
  const Menulist = {
    0: burger.map((burger) => {
      return (
        <MenuList 
          key={"list"+burger.name}
          type="burger"
          name={burger.name}
          price={burger.price}
          image={burger.image}
          introduce={burger.introduce}
          menuBasket={menuBasket}
        />
      )
    }),
    1: side.map((side) => {
      return (
        <MenuList 
          key={"list"+side.name}
          type="side"
          name={side.name}
          price={side.price}
          image={side.image}
          introduce={side.introduce}
          menuBasket={menuBasket}
        />
      )
    }),
    2: beverage.map((beverage) => {
      return (
        <MenuList 
          key={"list"+beverage.name}
          type="beverage"
          name={beverage.name}
          price={beverage.price}
          image={beverage.image}
          introduce={beverage.introduce}
          menuBasket={menuBasket}
        />
      )
    }),
    3: coffee.map((coffee) => {
      return (
        <MenuList 
          key={"list"+coffee.name}
          type="coffee"
          name={coffee.name}
          price={coffee.price}
          image={coffee.image}
          introduce={coffee.introduce}
          menuBasket={menuBasket}
        />
      )
    })
  }
  const stateDelete = (stateIndex) => { //복사본을 만들어서 splice 한 후 state를 변경해줌
    let copyArr = [
      [...isBurger], [...menuName], [...menuOption],
      [...sauceCustom], [...vageCustom], [...pattyCustom],
      [...menuValue]
    ]
    let changeArr = [
      isBurgerChange, menuNameChange, menuOptionChange,
      sauceCustomChange, vageCustomChange, pattyCustomChange,
      menuValueChange
    ]
    let i = 0;
    while (i < copyArr.length) {
      copyArr[i].splice(stateIndex, 1);
      changeArr[i](copyArr[i]);
      i++;
    }
  }
  // addEventListener를 remove해주지않으면 재랜더링 할때마다 event가 많이 일어나서 함수를 처리하는데 지연시간이 생김
  // useEffect 내에서 사용, return에서 remove 해줌으로써 한번만 작동하는것이 가능하게 만들었다
  // https://babycoder05.tistory.com/entry/React-useEffect%EC%99%80-addEventListener-window-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B7%9C%EC%B9%99
  useEffect(() => {
    function trigger (e) {
      if(e.target.className === "basketcancel") {
        stateDelete(Number(e.target.id));
      }
    }
    document.addEventListener("click", trigger);

    return () => {
      document.removeEventListener("click", trigger);
    }
  })

  return (
    <article className="Menu">
      <section className="MenuBox">
        <ul className="MenuTab">
          <li className="MenuTabList" onClick={() => { tabFunction(0) }}>버거</li>
          <li className="MenuTabList" onClick={() => { tabFunction(1) }}>사이드</li>
          <li className="MenuTabList" onClick={() => { tabFunction(2) }}>음료</li>
          <li className="MenuTabList" onClick={() => { tabFunction(3) }}>맥카페</li>
        </ul>
        <section className="MenuList"> {Menulist[tabNumber]} </section>
      </section>
      <article className="MenuOrder">
        <section className="ShoppingBasket">
          <section className="basketChunk">
            <span className="basketName">메뉴</span>
            <span className="basketOption">종류</span>
            <span className="basketSauce">소스</span>
            <span className="basketVage">채소</span>
            <span className="basketPatty">패티</span>
            <span className="basketValue">가격</span>
          </section>
          <ShoppingBasket 
            isBurger={isBurger}
            menuName={menuName}
            menuOption={menuOption}
            pattyCustom={pattyCustom}
            vageCustom={vageCustom}
            sauceCustom={sauceCustom}
            menuValue={menuValue}
            stateDelete={stateDelete}
          />
        </section>
        <section className="TotalBasket">
          <span>{sumValue()}원</span>
        </section>
        <section className="MenuButtonBox">
          <PayModal 
            menuValue={sumValue()}
          />
          <MenuButton 
            isBurgerChange={isBurgerChange}
            menuNameChange={menuNameChange}
            menuOptionChange={menuOptionChange}
            pattyCustomChange={pattyCustomChange}
            vageCustomChange={vageCustomChange}
            sauceCustomChange={sauceCustomChange}
            menuValueChange={menuValueChange}
          />
        </section>
      </article>
    </article>
  )
}
