// useCounter.jsx - useCounter 사용자훅을 정의할 문서
// count 증가 및 감소를 편리하게 사용하기 위해... 
import React, {useState} from "react";

function useCounter(initValue) {
  // useCounter의 initValue를 받아서
  // 초기값을 initValue로 갖는 count변수 생성
  const [count, setCount] = useState(initValue);

  // count값을 하나 증가시키는 함수
  const increaseCount = () => setCount((count)=> count + 1);
  // count값을 하나 감소시키는 함수, 음수가 되지는 않는다.
  const decreaseCount = () => setCount((count)=> Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;