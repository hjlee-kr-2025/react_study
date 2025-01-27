// FruitSelect.jsx - <select> : 드롭다운메뉴
import React, {useState} from "react";
// => React: React.createElement(); (JSX를 사용하면 createElement메서드로 변환됩니다.)
// useState: useState()를 사용하기 위해서 (useState Hook 사용을 위한 메서드), useState()를 통해 만들어진 변수의 값이 변경될 때 재랜더링이 일어납니다.


// apple, banana, grape(초기값), watermelon
function FruitSelect(props) {
  // value 를 useState()를 통해 만들고, 초기값을 'grape'로 주었습니다.
  // value값이 변경된때 이 컴포턴트의 재랜더링이 일어납니다.
  const [value, setValue] = useState('grape');

  // onChange 이벤트가 일어났을때 선택된 값으로 value값을 변경시켜줍니다.
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('선택한 과일: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요
        <select value={value} onChange={handleChange}>
          <option value='apple'>사과</option>
          <option value='banana'>바나나</option>
          <option value='grape'>포도</option>
          <option value='watermelon'>수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default FruitSelect;