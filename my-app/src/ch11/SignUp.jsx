// SignUp.jsx
// 사용자 정보를 입력받는 컴포넌트로 만들예정입니다.
import React, {useState} from "react";

function SignUp(props) {
  // 사용자이름 : name, 초기값 : ''
  const [name, setName] = useState('');
  // 성별 : gender, 초기값: '남자'
  const [gender, setGender] = useState('남자');

  const handleSubmit = (event) => {
    // 입력받은 이름, 성별을 알림창에 출력
    alert("이름 : " + name + ", 성별 : " + gender);
    event.preventDefault(); // 페이지가 이동하지 않도록
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type='text' value={name} onChange={(event) => {
          setName(event.target.value);
        }} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={(event) => {
          setGender(event.target.value);
        }}>
          <option value='남자'>남자</option>
          <option value='여자'>여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;