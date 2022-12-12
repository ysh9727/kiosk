import React from "react";
import "./Main.css";
import MainVavi from "../../components/MainNavi";


export default function Main() {
  const imgUrl = [
    "./images/slide/맥런치.png",
    "./images/slide/맥카페.png"
  ]
  let slideTrigger = true;
  setTimeout(() => { // css에 15초 animation을 따로 지정해둠
    document.querySelector(".forPortfolio").style.display = 'none';
  }, 15*1000)
  setInterval(() => { // css에 3초 animation을 지정해둠
    if(slideTrigger) {
      slideTrigger = false;
      document.querySelector(".s1").style.animation = "slideFirst 1.5s";
      document.querySelector(".s2").style.animation = "slideSecond 1.5s";
      document.querySelector(".s1").style.left = "120rem";
      document.querySelector(".s2").style.left = "0";
    } else {
      slideTrigger = true;
      document.querySelector(".s2").style.animation = "slideFirst 1.5s";
      document.querySelector(".s1").style.animation = "slideSecond 1.5s";
      document.querySelector(".s2").style.left = "120rem";
      document.querySelector(".s1").style.left = "0";
    }

  }, 5*1000)
  
  return (
    <>
      <article className="Main">
        <section className="ImageSection">
          {/* 슬라이드 만들기 */}
          {/* scss 확인, 3초animation으로 지정해둠, interval 10초정도로 하면 괜찮을듯. */}
          <img className="slide s1" src={imgUrl[0]} alt="맥런치" />
          <img className="slide s2" src={imgUrl[1]} alt="맥카페" />
          </section>
        <article className="forPortfolio">
          포트폴리오용으로 만들어진 페이지입니다.
        </article>
        <MainVavi />
      </article>
    </>
  )
}