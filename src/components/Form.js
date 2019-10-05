import React, { useCallback, useState, useContext } from 'react';

import Input from './Input'

import todoContext from '../context/todos'

function Form() {

  const context = useContext(todoContext)

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    
    context.setTodos([...context.todos, {
      title,
      description: desc
    }])

    setTitle('')
    setDesc('')
  })

  const handleTitle = useCallback(({target: { value }}) => {
    setTitle(value)
  })

  const handleDesc = useCallback(({target: { value }}) => {
    setDesc(value)
  })

  const [ title, setTitle ] = useState('')
  const [ desc, setDesc ] = useState('')

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <Input
        label="Title"
        placeholder="Example Title"
        onChange={handleTitle}
        value={title}
      />
      <Input
        label="Description"
        placeholder="Example Description"
        onChange={handleDesc}
        value={desc}
      />
      <button>Add</button>
    </form>
  )
};

export default Form;