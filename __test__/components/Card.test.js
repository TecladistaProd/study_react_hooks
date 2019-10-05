import React, {useContext} from 'react'
import { act, fireEvent, wait, render as rtlRender } from '@testing-library/react';

import Card from '../../src/components/Card'
import context from '../../src/context/todos'

console.error = msg => { null };

describe('Card Component', () => {
  let todos = [{title: '123', description: '321'}, {title: '456', description: '321'}]
  let props = {
    dataKey: 0,
    todo: todos[0]
  }
  let setTodos = jest.fn()
  const MockContext = ({children}) => (
    <context.Provider value={{ todos, setTodos }}>{children}</context.Provider>
  )

  it('should render normaly', () => {
    const { container } = rtlRender(
      <MockContext>
        <Card {...props} />
      </MockContext>
    )

    expect(!!container.querySelector('.card')).toBe(true)
  })
  
  it('should dispatch an error whitout props', () => {
    const res = () => rtlRender(
      <MockContext>
        <Card />
      </MockContext>
    )

    expect(res).toThrow()
  })

  it('should dispatch function when button was clicked', async () => {
    const { container } = rtlRender(
      <MockContext>
        <Card {...props} />
      </MockContext>
    )

    act(() => {
      fireEvent.click(container.querySelector('button'));
    });
    
    await wait(() => expect(setTodos).toBeCalled() )

  })
})