// WarningBanner.jsx
import React from "react";

// warning변수가 참일때만 경고 문구를 보여주도록 하는 컴포넌트
function WarningBanner(props) {
  if (!props.warning) {
    return null;//렌더링을 하지 않습니다.
  }

  return (
    <div>경고!</div>
  );
}

export default WarningBanner;