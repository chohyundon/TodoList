import React,{useState} from "react";
import Template from "./component/Template";
import TodoList from "./component/TodoList";
import TodoInsert from "./component/TodoInsert";
import TodoFooter from "./component/TodoFooter";

const App = () => {
  const [insertToggle,setInsertToggle] = useState(false);
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: true
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    },
  ]);

  const oninsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  return( 
  <div>  
  <Template>
    <TodoList todos={todos}/>
    {insertToggle &&<TodoInsert oninsertToggle={oninsertToggle}/>}
    <button onClick={oninsertToggle}>추가</button>
  </Template>
  <TodoFooter/>
  </div>
  );
};

export default App;