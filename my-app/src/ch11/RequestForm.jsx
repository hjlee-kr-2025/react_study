// RequestForm.jsx
import React, {useState} from "react";

function RequestForm(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    // event.target: 이벤트가 일어난 element 의 value값을 setValue()안에 넣어서 세팅합니다.
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 요청사항 : ' + value);
    event.preventDefault();// 페이지가 이동안되도록해준다.
  }

  /*
  HTML 에서 <textarea>이곳에 텍스트가 들어갑니다</textarea>
  React에서는 <textarea value="이곳에 텍스트가 들어갑니다." />
  */

  return (
    <form onSubmit={handleSubmit}>
      <label>
        요청사항:
        <textarea value={value} onChange={handleChange} placeholder="요청사항을 입력하세요" />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default RequestForm;