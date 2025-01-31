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
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
      event.preventDefault();
      // id값을 a태그안에 세팅해줘야 아래에서 확인 할 수 있습니다.
      console.log('event.target.id: ', event.target.id);
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

// UPDATE 모드시 보여줄 컴포넌트
function Update(props) {
  // title, content에 적힌 데이터가 변경될때 update를 위해서 useState를 통해서 변수를 만들어 주었습니다.
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(event)=>{
        //Create 버튼이 click되면 이곳 이벤트함수가 처리됩니다.
        event.preventDefault();
        // 변경될 값이 title변수와 content변수에 저장되어있어서 title과 content를 넘겨주면 됩니다.
        props.onUpdate(title, content);
      }}>
        <div>
          <input type="text" name="title" placeholder='title' value={title} onChange={(event)=>{
            setTitle(event.target.value);
          }}/>
        </div>
        <div style={{marginTop: 10}}>
          <textarea name="content" placeholder='content' value={content} onChange={(event)=>{
            setContent(event.target.value);
          }}></textarea>
        </div>
        <button type='submit'>Update</button>
      </form>
    </article>
  );
}

function App() {
  // mode로 사용할 변수 생성 : WELCOME, READ, CREATE, UPDATE - DELETE 모드는 별도로 구성하지 않고 READ 모드에서 삭제되도록 구현
  const [mode, setMode] = useState('WELCOME');
  // 리스트의 초기값을 주었습니다.
  // 3개의 데이터가 있다고 가정하고 시작합니다.
  const [topics, setTopics] = useState([
    {id:1, title: 'html', content: 'html is ....'},
    {id:2, title: 'css', content: 'css is ....'},
    {id:3, title: 'javascript', content: 'javascript is ....'},
  ]);
  // READ모드에서 상세화면에 보여줄 리스트 번호를 결정하는데 사용
  const [id, setId] = useState(null);
  // 다음에 넣을 id를 설정 - hardcoding - 기존에 3개가 있어서 4로 초기값을 주었습니다.
  const [nextId, setNextId] = useState(4);
  
  // 상세화면에 보여줄 내용을 contents에 담을겁니다.
  let contents = null;
  // update 시 사용할 글번호를 표현할 내용을 담을 변수
  let contentsUpdate = null;
  if (mode == 'WELCOME') {
    // 처음 페이지가 열렸을때, WEB 글자를 클릭했을때
    contents = <Article title="Welcome" content="Hello, Web" />;
  }
  else if (mode == 'READ') {
    // 리스트에 있는 내용중 하나를 클릭했을때 
    let title, content;
    // 전체리스트중에서 클릭한 리스트의 id와 같은 id를 가진 내용을 ,title과 content변수에 저장합니다.
    for (let i = 0 ; i<topics.length ; i++) {
      if (topics[i].id == id) {
        title = topics[i].title;
        content = topics[i].content;
      }
    }
    contents = <Article title={title} content={content} />;
    contentsUpdate = <><li><a href={"/update/"+ id} onClick={(event)=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
    <li><input type='button' value='Delete' onClick={()=>{
      // 삭제한 것을 제외한 리스트를 담을 변수선언언
      const newTopics = [];
      for (let i=0 ; i<topics.length ; i++) {
        if (topics[i].id != id) {
          // 삭제된 리스트를 제외한 데이터를 newTopics에 담는다.
          newTopics.push(topics[i]);
        }
      }
      // newTopics에 담긴 데이터를 다시 topics에 저장
      // 삭제된 데이터를 제왼한 데이터가 담깁니다.
      setTopics(newTopics);
      // 삭제된 후에는 WELCOME모드로 이동합니다.
      setMode('WELCOME');
    }}></input></li></>;
  }
  else if (mode == 'CREATE') {
    // Create 링크를 클릭했을때 Create mode로 변경됩니다.
    // 변경된후 내용을 작성하게 됩니다.
    // create버튼을 클릭하면 리스트에 새로운 내용이 추가됩니다.
    // 추가된내용이 READ모드로 보여지게 만들었습니다.
    contents = <Create onCreate={(title, content) => {
      const newTopic = {id:nextId, title: title, content: content};
      console.log(newTopic);
      //i++; i+=1; i=i+1; -> 자신에게 연사후  새로운값세팅
      // setTopics()를 사용해서 배열을 세팅하려면 자신을 사용하지 못하고 복제본을 사용해서 세팅해야 합니다.
      const newTopics = [...topics];// topics를 복제해서 newTopics를 만듭니다.
      newTopics.push(newTopic);// 복제한배열에 새로운리스트내용 추가
      setTopics(newTopics);// 추가된 배열을 topics에 세팅팅
      setMode('READ');  // READ모드
      setId(nextId); // 새로추가한 데이터id로 세팅
      setNextId(nextId+1);  // 다음id를 1더해서 세팅
    }}/>;//<Create></Create>
  }
  else if (mode == 'UPDATE') {
    // 리스트에 있는 내용중 하나를 클릭했을때 
    let title, content;
    // 전체리스트중에서 클릭한 리스트의 id와 같은 id를 가진 내용을 ,title과 content변수에 저장합니다.
    console.log('topics.length: ', topics.length);
    for (let i = 0 ; i<topics.length ; i++) {
      if (topics[i].id == id) {
        title = topics[i].title;
        content = topics[i].content;
        console.log('title: ', title);
      }
    }
    console.log('id: ', id);
    contents = <Update title={title} content={content} onUpdate={(title, content) => {
      const updateTopic = {id: id, title: title, content: content};
      const newTopics = [...topics]; // topics의 내용을 newTopics에 복제
      for (let i = 0 ; i < newTopics.length ; i++) {
        if (newTopics[i].id == id) {
          newTopics[i].title = title;
          newTopics[i].content = content;
          break;//같은것이 있으면 계속비교하지 않고 for문을 빠져나옵니다.
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  // 아래 return에 구현한 내용이 화면에 보여지게 됩니다.
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}/>
      <Nav topics={topics} onChangeMode={(_id) => {
        console.log('_id: ', _id);//문자열과 변수값을 함께 표시하려면 +를 사용하지 말고, ','로 두값을 구분하여 사용하는것이 좋습니다. +를 사용하면 문자열로 되기때문에 변수가 객체형일경우 값이 보이지 않는다.
        setMode('READ');
        // 리스트중 클릭한 번호로 id값을 변경합니다.
        setId(_id);
      }}/>
      {contents}
      <ul>
        <li><a href="/create" onClick={(event) => {
          event.preventDefault();
          setMode('CREATE');//CREATE mode로 변경
        }}>Create</a></li>
        {contentsUpdate}
      </ul>
    </div>
  );
}

export default App;
