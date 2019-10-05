import React, { useEffect, useRef, useCallback } from 'react'

import emitError from '../helpers/emitError'

function Input({label, placeholder, onChange, value} = {}) {
  const inputRef = useRef()
  label = label || emitError("You should pass label")
  onChange = onChange || emitError("You should pass onChange")

  if(value === undefined || value === null)
    emitError('You should pass value')

  const inputProps = { placeholder, onChange, value }

  const clickLabel = useCallback(() => inputRef.current.focus())

  return (
    <>
      <label onClick={clickLabel}>{label}</label>
      <input ref={inputRef} {...inputProps}/>
    </>
  )
}

export default Input