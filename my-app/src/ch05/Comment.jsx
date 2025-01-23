// Comment.jsx
import React from "react";
// React.createElement();
// {} 되어있는 자료형 => JSON
// 하나의 자료가 Key: value 로 되어있고, 여러개를 넣을 수 있는 자료형입니다.
// React에서 style 속성에 - 가 들어가 있으면 - 를 빼고 다음글자를 대문자로 사용합니다.
// 예) border-radius => borderRadius
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    color: 'black',
    fontSize: 16,
  }
};

// 댓글하나를 표현(화면에 보여주기)하기 위한 컴포넌트
function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>이현진</span>
        <span style={styles.commentText}>제가 만든 첫 컴포넌트입니다.</span>
      </div>
    </div>
  );
}

export default Comment;