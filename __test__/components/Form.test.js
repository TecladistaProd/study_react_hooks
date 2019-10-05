import React, {useContext} from 'react'
import { act, fireEvent, wait, render as rtlRender } from '@testing-library/react';

import Form from '../../src/components/Form'
import context from '../../src/context/todos'

console.error = msg => { null };

describe('Form Component', () => {
  let todos = []

  let setTodos = jest.fn()
  const MockContext = ({children}) => (
    <context.Provider value={{ todos, setTodos }}>{children}</context.Provider>
  )

  it('should render normaly', () => {
    const { container } = rtlRender(
      <MockContext>
        <Form />
      </MockContext>
    )

    expect(!!container.querySelector('.form')).toBe(true)
  })

  it('should dispatch function when form was submited', async () => {
    const { container } = rtlRender(
      <MockContext>
        <Form/>
      </MockContext>
    )

    act(() => {
      fireEvent.submit(container.querySelector('form'));
    });
    
    await wait(() => expect(setTodos).toBeCalled() )

  })
})