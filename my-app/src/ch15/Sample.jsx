// Sample.jsx

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: grey;
  border: 2px solid palevioletred;
`;

const RoundButton = styled(Button)`
  border-radius: 16px;
`;

function Sample(props) {
  return (
    <div>
      <Button>Normal</Button>
      <RoundButton>Rounded</RoundButton>
    </div>
  );
}

export default Sample;