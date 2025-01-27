// SignUp.jsx
// 사용자 정보를 입력받는 컴포넌트로 만들예정입니다.
import React, {useState} from "react";

function SignUp(props) {
  // 사용자이름 : name, 초기값 : ''
  const [name, setName] = useState('');
  // 성별 : gender, 초기값: '남자'
  const [gender, setGender] = useState('남자');
  // 나이 : age, 초기값: 1
  const [age, setAge] = useState(1);

  const handleSubmit = (event) => {
    // 입력받은 이름, 성별, 나이를 알림창에 출력
    alert("이름 : " + name + ", 성별 : " + gender + ", 나이 : " + age);
    event.preventDefault(); // 페이지가 이동하지 않도록
  };

  const handleGender = (event) => {
    setGender(event.target.value);
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
        <input type='radio' value='남자' checked={gender == '남자'}
          onChange={handleGender} /> 남자
      </label>
      <label>
        <input type='radio' value='여자' checked={gender == '여자'} 
          onChange={handleGender} /> 여자
      </label>
      <br />
      <label>
        나이:
        <input type='number' value={age} onChange={(event) => {
          setAge(event.target.value);
        }} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;