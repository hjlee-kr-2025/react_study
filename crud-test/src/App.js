import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();// 페이지가 이동되지 않도록
      // App 컴포넌트의 mode='WELCOME'으로 변경
      // props로 함수를 받아서 처리되도록 합니다.
      props.onChangeMode();
    }}>{props.title}</a></h1>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.content}
    </article>
  );
}

function Nav(props) {
  const lis = [];
  for(let i = 0 ; i < props.topics.length ; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(event.target.id);
      // 파라메터값은 몇 번항목을 클릭했는지 전달
    }}>{t.title}</a></li>)
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

// CREATE mode일때 나타나는 폼입력창
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event)=>{
        //Create 버튼이 click되면 이곳 이벤트함수가 처리됩니다.
        event.preventDefault();
        console.log(event.target.title.value);
        console.log(event.target.content.value);
        const title = event.target.title.value;
        const content = event.target.content.value;
        props.onCreate(title, content);
      }}>
        <div>
          <input type="text" name="title" placeholder='title' />
        </div>
        <div style={{marginTop: 10}}>
          <textarea name="content" placeholder='content'></textarea>
        </div>
        <button type='submit'>Create</button>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [topics, setTopics] = useState([
    {id:1, title: 'html', content: 'html is ....'},
    {id:2, title: 'css', content: 'css is ....'},
    {id:3, title: 'javascript', content: 'javascript is ....'},
  ]);
  // 다음에 넣을 id를 설정 - hardcoding - 기존에 3개가 있어서 4로 초기값을 주었습니다.
  const [nextId, setNextId] = useState(4);
  
  let contents = null;
  if (mode == 'WELCOME') {
    // 처음 페이지가 열렸을때, WEB 글자를 클릭했을때
    contents = <Article title="Welcome" content="Hello, Web" />;
  }
  else if (mode == 'READ') {
    // 리스트에 있는 내용중 하나를 클릭했을때 
    contents = <Article title="Read" content="Read, Web" />;
  }
  else if (mode == 'CREATE') {
    // Create 링크를 클릭했을때 Create mode로 변경됩니다.
    contents = <Create onCreate={(title, content) => {
      const newTopic = {id:nextId, title: title, content: content};
      console.log(newTopic);
      // setTopics()를 사용해서 배열을 세팅하려면 자신을 사용하지 못하고 복제본을 사용해서 세팅해야 합니다.
      const newTopics = [...topics];// topics를 복제해서 newTopics를 만듭니다.
      newTopics.push(newTopic);
      setTopics(newTopics);
    }}/>;//<Create></Create>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}/>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode('READ');
      }}/>
      {contents}
      <a href="/create" onClick={(event) => {
        event.preventDefault();
        setMode('CREATE');//CREATE mode로 변경
      }}>Create</a>
    </div>
  );
}

export default App;
