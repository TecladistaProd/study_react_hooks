import React from 'react'
import { act, fireEvent, wait, render as rtlRender } from '@testing-library/react';

import App from '../src/App'

import todos from './mockTodos'

import LocalStorage from './localStorageMock'

console.error = msg => { null };

var localStorageMock = new LocalStorage({ todos: '[]' })

Object.defineProperty(window, 'localStorage', {
     value: localStorageMock
});

describe('App Component', () => {
  beforeEach(() => {
    localStorage.setItem('todos', JSON.stringify([]))
  })

  it('should render normaly', () => {  
    let { container } = rtlRender(<App/>)
    expect(!!container.querySelector('h1')).toBe(true)
  })

  it('should render 3 card items', () => {
    localStorage.setItem('todos', todos)

    let { container } = rtlRender(<App/>)

    let cards = container.querySelectorAll('.card')

    expect(cards).toHaveLength(3)
  })

  it('should add 1 item in localStorage', async () => {
    let { container } = rtlRender(<App/>)

    act(() => {
      fireEvent.change(container.querySelector('.form input[placeholder="Example Title"]'), { target: { value: 'Some Text'  } })
      fireEvent.change(container.querySelector('.form input[placeholder="Example Description"]'), { target: { value: 'Some Text'  } })
    })

    act(() => {
      fireEvent.submit(container.querySelector('.form'))
    })

    await wait(() => {
      let todos = JSON.parse(localStorage.getItem('todos'))

      expect(todos).toHaveLength(1)
      expect(todos).toEqual(expect.arrayContaining([{ title: 'Some Text', description: 'Some Text' }]))
    })
  })

})