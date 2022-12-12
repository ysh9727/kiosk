import React from "react";
import "./Main.css";
import MainVavi from "../../components/MainNavi";


export default function Main() {
  setTimeout(() => { // css에 15초 animation을 따로 지정해둠
    document.querySelector(".forPortfolio").style.display = 'none';
  }, 15000)
  
  return (
    <>
      <article className="Main">
        <section className="ImageSection">
          {/* 슬라이드 만들기 */}
          {/* scss 확인, 4초animation으로 지정해둠, interval 10초정도로 하면 괜찮을듯. */}
          <img className="slide s1" src="./images/slide/맥런치.png" alt="맥런치" />
          <img className="slide s2" src="./images/slide/맥카페.png" alt="맥런치" />
          </section>
        <article className="forPortfolio">
          포트폴리오용으로 만들어진 페이지입니다.
        </article>
        <MainVavi />
      </article>
    </>
  )
}