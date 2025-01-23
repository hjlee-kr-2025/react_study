/* MyButton.js */
/* MyButton 의 이름을 가진 리액트 컴포넌트를 만들어 줍니다 */
function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    {onClick: () => setIsClicked(true)},
    isClicked ? 'Clicked!' : 'Click here!'
  )
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));