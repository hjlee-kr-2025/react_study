// Accommodate.jsx
// 입장객 수를 확인해서 정원에 도달했는지 않했는지를 체크하는 컴포넌트
import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

// 상수명을 사용할때 ALL 대문자를 많이 사용합니다.
const MAX_CAPACITY = 10; // 정원을 10명으로 설정합니다.

function Accommodate(props) {
  // 입장객이 가득찾는지 아닌지를 체크하는 변수
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);
  
  useEffect(()=>{
    console.log("===========================");
    console.log("useEffect() is called.");
    console.log("isFull: " + isFull);
  });

  // count값이 바뀌면 정원이 가득찾는지 확인해서 isFull 변수값을 설정합니다. (true or false)
  useEffect(()=>{
    setIsFull(count >= MAX_CAPACITY);
    console.log("Current count value: " + count);
  }, [count]);

  // button의 disabled속성에 true값이 설정되면 버튼이 안눌러집니다.
  return (
    <div style={{padding: 16}}>
      <p>총 {count}명을 수용했습니다.</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {/*조건부랜더링에서 아래처럼 (조건 && 랜더링내용) 을 많이 사용합니다. */}
      {(isFull && <p style={{color:'red'}}>정원이 가득찾습니다.</p>)}
    </div>
  );
}


/* 
  return (
    <>
      {(isFull && <p style={{color:'red'}}>정원이 가득찾습니다.</p>)}
    </>
  );
  ====> 위 표현을 아래와 같이 만들수도 있습니다.
  if (isFull) {
    message = <p style={{color:'red'}}>정원이 가득찾습니다.</p>;
  }
  return (
    <>
      {message}
    </>
  )
*/

export default Accommodate;