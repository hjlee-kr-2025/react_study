// Counter.jsx
// 버튼만들고 버튼을 클릭했을때 
// 몇번 클릭했는지를 
// 화면에 보여주는 프로그램을 만들고자 합니다.
// hook을 사용하기 위해서는 {}안에 훅함수를 import합니다.
import React, {useState} from "react";

function Counter(props) {
  var count = 0;//버튼 눌린 횟수를 저장할때 사용
  // react에서 화면에 변수값을 표시하려면 중괄호안에 변수이름을 적습니다. =>  {변수명}
  // react에서 이벤트 속성을 적용하려면 on다음글자를 대분자로 변경해서 적어줍니다. 예)  html - onclick => react - onClick (react규칙)
  // onClick={이벤트처리} 처럼 중괄호안에 이벤트처리리내용을 정의하셔야 합니다. ---> react규칙
  // () => count++  => function() {return count++;} 과 똑같은 실행문입니다. ---> javascript의 규칙
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => count++}>
        클릭
      </button>
    </div>
  );
}

export default Counter;