import React, { 
  useEffect, 
  useCallback, 
  useContext,
  useState
} from "react";

import "./style/main.sass";

import Form from './components/Form'
import Card from './components/Card'

import todoContext from './context/todos'

function App() {
  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    let tds = JSON.parse(localStorage.getItem('todos') || '[]')
    if(tds.length > 0)
      setTodos(tds)
  }, [])

  useEffect((e) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <todoContext.Provider value={{todos, setTodos}}>
      <h1>React Hooks To Do</h1>
      <div className="container">
        <Form/>
        <div className="card-list">
          {
            todos.map((todo, k) => <Card dataKey={k} key={k} todo={todo}/>)
          }
        </div>
      </div>
    </todoContext.Provider>
  );
}

export default App;
