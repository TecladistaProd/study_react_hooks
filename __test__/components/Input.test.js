import React from 'react'
import { act, fireEvent, wait, render as rtlRender } from '@testing-library/react';

import Input from '../../src/components/Input'

console.error = msg => { null };

describe('Input Component', () => {
  let props = {
    label: 'Something',
    value: '',
    onChange: jest.fn()
  }
  
  it('should render normaly', () => {  
    let { container } = rtlRender(<Input {...props}/>)
    let results = [
      !!container.querySelector('label'),
      !!container.querySelector('input')
    ]
    expect(results).toEqual(expect.arrayContaining([true, true]))
  })

  it('should dispatch an error without label, onChange and value', () => {
    let res = () => rtlRender(<Input/>)
    expect(res).toThrow()
  })

  it('should dispatch function when input is changed', async () => {
    let { container } = rtlRender(<Input {...props}/>)    
    act(() => {
      fireEvent.change(container.querySelector('input'), { target: { value: 'New data' } });
    });
    await wait(() => expect(props.onChange).toBeCalled() )
  })
})