import { createContext } from 'react'

const todoContext = createContext({todos: [], setTodos: () => {}})
  
export default todoContext