// Toggle1.jsx
import React from "react";

class Toggle1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn : true};

    // handleClick 함수에 this를 사용하려면 아래와같이 bind(this)를 해줘야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState)=>{
      return {isToggleOn: !prevState.isToggleOn}
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn?'켜짐':'꺼짐'}
      </button>
    );
  }
}

export default Toggle1;