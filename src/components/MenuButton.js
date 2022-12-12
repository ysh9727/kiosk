import React from "react";
import { Link } from "react-router-dom";
// isBurger={isBurgerChange}
// menuName={menuNameChange}
// menuOption={menuOptionChange}
// pattyCustom={pattyCustomChange}
// vageCustom={vageCustomChange}
// sauceCustom={sauceCustomChange}
// menuValue={menuValueChange}
export default function MenuButton (props) {
  const {
    isBurgerChange, menuNameChange, menuOptionChange,
    pattyCustomChange, vageCustomChange, sauceCustomChange, menuValueChange
  } = props;
    return <button 
    className="MenuButton"
    onClick={() => {
      isBurgerChange([]);
      menuNameChange([]);
      menuOptionChange([]);
      pattyCustomChange([]);
      vageCustomChange([]);
      sauceCustomChange([]);
      menuValueChange([]);
    }}
    >초기화</button>
    // return <Link to="/" className="MenuButton">메인</Link>
}