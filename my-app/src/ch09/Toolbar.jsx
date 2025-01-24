// Toolbar.jsx
import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid grey',
  },
  greeting: {
    marginRight: 8,
  }
}

function Toolbar(props) {
  // 다른 컴포넌트가 Toolbar를 사용해서 속성에 isLoggedIn, onClickLogin, onClickLogout으로 세팅하면 자동으로 매칭되도록 합니다.
  const {isLoggedIn, onClickLogin, onClickLogout} = props;

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}

      {isLoggedIn ?
        (<button onClick={onClickLogout}>로그아웃</button>) :
        (<button onClick={onClickLogin}>로그인</button>)
      }
    </div>
  );
}

export default Toolbar;