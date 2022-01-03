import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [ counterValue, setCounterValue ] = useState( 0 )
  const [ inputValue, setInputValue ] = useState( 1 )

  const addToCounter = () => {
    setCounterValue( counterValue + inputValue )
  }

  const subtractFromCounter = () => {
    setCounterValue( counterValue - inputValue )
  }

  return (
    <div className='Counter'>
      <h2 data-testid='header'>My Counter App</h2>
      <h2
        data-testid='counter'
        className={
          `${counterValue >= 100 ? 'green' : ''}${counterValue <= -100 ? 'red' : ''}`
        }
      >
        { counterValue }
      </h2>
      <button
        data-testid='subtract-btn'
        onClick={ subtractFromCounter }
      >
        -
      </button>
      <input
        data-testid='input'
        type='number'
        value={ inputValue }
        className='input'
        onChange={ ( e ) => setInputValue( parseInt( e.target.value ) ) }
      />
      <button
        data-testid='add-btn'
        onClick={ addToCounter }
      >
        +
      </button>
    </div>
  )
}

export default Counter