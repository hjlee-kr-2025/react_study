// Calculation.jsx
import React,{useState, useMemo} from "react";

function Calculation(props) {
  // count=0 의 변수선언
  const [count, setCount] = useState(0);
  // todos=[] 의 변수선언
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalulation(count);

  const increment = () => {
    setCount((count) => count + 1);
  }
  const addTodo = () => {
    setTodos((t) => [...t, "new Todo"]);
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index)=>{
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

const expensiveCalulation = (num) => {
  console.log("Calculating....");
  for (let i = 0; i<10000000000 ; i++) {
    num += 1;
  }
  return num;
}

export default Calculation;