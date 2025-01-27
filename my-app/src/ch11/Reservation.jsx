// Reservation.jsx
import React, {useState} from "react";

function Resevation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (event) => {
    alert('아침식사 여부 : ' + haveBreakfast + ", 방문객수: " + numberOfGuest );
    event.preventDefault();// 페이지이동 안하도록 함, return false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부:
        <input type="checkbox" checked={haveBreakfast}
          onChange={(event) => {
            // 바뀐정보가 haveBreakfast변수에 업데이트가 됩니다.
            setHaveBreakfast(event.target.checked);
          }}/>
      </label>
      <label>
        방문객 수:
        <input type="number" value={numberOfGuest} 
          onChange={(event) => {
            // 바뀐정보가 numberOfGuest 변수에 업데이트
            setNumberOfGuest(event.target.value);
          }}/>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default Resevation;