import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './WaitingTurn.css';
export default function WaitingTurn () {
  let [count, countChange] = useState(5);
  let [intervalTrigger, intervalTriggerChange] = useState(true);
  const navigate = useNavigate();

  const intervalFunc = () => countChange(count--);
  const timeOutFunc = () => {
    clearInterval(intervalFunc);
    navigate("/");
  }

  useEffect(() => {
    countChange(count--);
    if(intervalTrigger){
      intervalTriggerChange(false);
      setInterval(intervalFunc, 1000);
      setTimeout(timeOutFunc, 5000);
    }
  })
  //onclick의 작동이 애매함 interval과 timeout을 핸들링해서 onclick에 줘야할듯
  //해법이 생각 안나 Link를 주석처리, 다른걸 먼저 하자

  return (
    <section className="waitingWrap">
      <section className="waitingNumber">
        <p className="payingText">결제가 완료되었습니다.</p>
        <p className="payingText">잠시 후 대기번호가 출력됩니다.</p>
        <p className="payingText">잠시 기다려주세요.</p>
      </section>
      <p className="payingText">{count}초 후 홈으로 이동합니다...</p>
      {/*<Link className="modalButton" to="/">홈으로</Link>*/}
    </section>
  )
}
//<section className="waitingNumber">
//<p className="test">대기번호가 출력됩니다</p>
//<p className="test">잠시만 기다려주세요</p>
//</section>
//{/* <p className="test">대기번호</p>
//<p className="test">001</p> */}
//<p className="test">{count}초 후 홈으로 이동합니다...</p>
//<Link className="modalButton" to="/">홈으로</Link>
