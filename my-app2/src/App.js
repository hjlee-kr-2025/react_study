import logo from './logo.svg';
import './App.css';

// 컴포넌트 만들때 주의사항
// 1. 이름의 첫글자는 대문자
// 2. 랜더링부분(return) 의 최상단의 하나의 element로 구성되어야 합니다.
function Header(props) {
//  console.log('props', props);
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
  console.log('props', props);
  console.log(props.topics[0].title);
  return (
    <nav>
      <ol>
        <li><a href="/read/1">HTML</a></li>
        <li><a href="/read/2">CSS</a></li>
        <li><a href="/read/3">Javascript</a></li>
      </ol>
    </nav>
  );
}

function Article(props) {
//  console.log('props', props)
  // props.title, props.content
//  console.log('props.title: ', props.title)
  return (
    <article>
      <h2>{props.title}</h2>
      {props.content}
    </article>
  );
}

function App() {
  // retrun 안에 기록된것은 JSX문법으로 작성된 것입니다.
  const topics = [
    {id:1, title:"HTML",},
    {id:2, title:"CSS",},
    {id:3, title:"Javascript",},
  ];
  return (
    <div>
      <Header title="WEB" content="Web programming" />
      <Header title="REACT" />
      <Nav topics={topics}/>
      <Article title="Welcome" content="Hello, Web" />
      <Article title="Hi" content="Hello, React" />
    </div>
  );
}

export default App;
