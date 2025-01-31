// TemperatureInput.jsx
import React, {useState} from "react";

const scaleNames = {c: '섭씨', f: '화씨',};

function TemperatureInput(props) {
  // 문자열타입의 변수로 만드는 이유는?
  // input 창에서 입력받는 값이 문자열타입으로 넘어옵니다.
  const [temperature, setTemperature] = useState('');

  const handleChange = (event) => {
    // 입력창에 입력되는 값으로 update
    props.setTemperature(event.target.value);
  }

  return (
    <fieldset>
      <legend>온도를 입력해 주세요(단위:{scaleNames[props.scale]}):</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;