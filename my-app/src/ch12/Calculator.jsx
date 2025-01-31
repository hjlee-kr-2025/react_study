// Calculator.jsx
import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

// 화씨 -> 섭씨로 변환
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 섭씨 -> 화씨로 변환
function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

// 변환함수를 선택해서 사용할 수 있느 함수
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  // temperture 입력창에 적힌 내용중 숫자가 아닌 내용이 적혀있으면 NaN이 리턴값으로 넘어옵니다.
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);// 온도변환
  const rounded = Math.round(output * 1000) / 1000;//소수점3자리반올림
  return rounded.toString(); // 변경된 값을 문자형으로 리턴합니다.
}


function Calculator(props) {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const celsius = (scale == 'f') ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = (scale == 'c') ? tryConvert(temperature, toFahrenheit) : temperature;

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  }

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  }

  return (
    <div>
      <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;