// NumberList.jsx
import React from "react";

function NumberList(props) {
  // props.numbers 로 접근해서 사용해야 하나
  // const {numbers} = props; 로 선언하면 props안의 numbers값을
  // numbers에 담는다. 그래서 이 함수에서 numbers로 사용이 가능합니다.
  const {numbers} = props;

  console.log('numbers', numbers);
  // numbers.map()는 numbers안에 들어가 있는 값을 순서대로 사용해서
  // 함수내용처리후 배열로 리턴해주는 메서드 입니다.
  const listItems = numbers.map((number) => {
    return (<li key={number}>{number}</li>);
  });

  console.log('listItems',listItems);

  return (
    <ul>{listItems}</ul>
  );
}

export default NumberList;