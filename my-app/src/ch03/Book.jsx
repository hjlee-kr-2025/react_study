import React from 'react';//React 객체를 사용하기위해 선언합니다.

// React Component를 만들때는 첫글자로로 반드시 대문자를 사용합니다.
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name} 입니다`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
      <button class="bg-green">
        <b>Hello, element!</b>
      </button>
    </div>
  );
}

// 위에 만들어진 컴포넌트를 외부에서 사용시 아래처럼
// export default 컴포넌트이름; 을 선언해 줍니다.
export default Book;