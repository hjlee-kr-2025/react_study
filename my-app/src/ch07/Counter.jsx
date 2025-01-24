// Counter.jsx
// 버튼만들고 버튼을 클릭했을때 
// 몇번 클릭했는지를 
// 화면에 보여주는 프로그램을 만들고자 합니다.
// hook을 사용하기 위해서는 {}안에 훅함수를 import합니다.
import React, {useState, useEffect} from "react";

function Counter(props) {
  // useState(초기값)를 실행하면 배열을 리턴합니다.
  // 개발자가 정한 [변수이름, setter함수이름]으로 리턴받으면 됩니다.
  // setter함수란? 객체안의 변수값을 변경할때 사용하는 함수입니다.
  const [count, setCount] = useState(0);

  useEffect(()=>{
    // document.title 에 값을 넣으면 탭제목이 변경됩니다.
    // jsx코드가 아닙니다.
    document.title = '총 ' + count + '번 클릭했습니다';
  }, []);

  // JSX코드에서 자바스크립트코드를 넣으려면 {}안에 구현합니다.
  // JSX코드에서 화면에 변수값을 표시하려면 중괄호안에 변수이름을 적습니다. =>  {변수명}
  // react에서 이벤트 속성을 적용하려면 on다음글자를 대분자로 변경해서 적어줍니다. 예)  html - onclick => react - onClick (react규칙)
  // onClick={이벤트처리} 처럼 중괄호안에 이벤트처리리내용을 정의하셔야 합니다. ---> react규칙
  // () => count++  => function() {return count++;} 과 똑같은 실행문입니다. ---> javascript의 규칙
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

// 위 프로그램에서 count값을 useState로 정의했기때문에 count값이 변경되면 랜더링이 다시 발생됩니다.
// useEffect는 의존성배열없이 이펙트함수만으로 정의했기 때문에 count값이 변경되면 이펙트함수도 실행됩니다.

export default Counter;