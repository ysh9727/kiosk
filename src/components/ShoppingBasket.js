export default function ShoppingBasket (props) {
  const {
    isBurger, menuName, menuOption, 
    pattyCustom, vageCustom, sauceCustom, menuValue,
    stateDelete
  } = props;
  let basketBase = "Bbase";
  let i = -1;

  return (
    <>
      {isBurger.map((isBurger) => {
        i++;
        (0 <= i) ? basketBase="Bafter" : basketBase="Bbase";
        return (
          <section className={`basketChunk ${basketBase}`}>
          <span className="basketName">
            {/* id={i}를 이용해 Menu.js에서 삭제 이벤트를 실행하게 함 */}
            <p id={i} className="basketcancel">X</p>
            <p className="basketN">{menuName[i]}</p>
          </span>
          <span className="basketOption">{menuOption[i]}</span>
          <span className="basketSauce">{sauceCustom[i]}</span>
          <span className="basketVage">{vageCustom[i]}</span>
          <span className="basketPatty">{pattyCustom[i]}</span>
          <span className="basketValue">{menuValue[i]}원</span>
        </section>
        )
      })}
    </>
  )
  
}