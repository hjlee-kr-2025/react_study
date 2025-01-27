// NameForm.jsx
import React, {useState} from "react";

function NameForm(props) {
  // value='' 변수 선언하고 초기값설정.
  const [value, setValue] = useState('');

  // 입력값이 변경될때 변경된 값을 useState로 설정될 변수에 값을 변경하는 내용
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 이름: ' + value);
    event.preventDefault();//return false의 역할과 동일, 다른페이지로 이동안하도록 하는 명령문. <a>의 click이벤트 or <form>의 submit이벤트
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>이름:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default NameForm;