import React from 'react'
import Counter from '../Counter'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

let getByTestId

beforeEach( () => {
  // Can fire events in beforeEach like for a login form or something
  const component = render( <Counter /> )
  getByTestId = component.getByTestId
} )

afterEach( () => {
  // cleans up all doms in react tree after tests
  cleanup() //happens by default if created with create-react-app
} )

test( 'Header renders with correct text', () => {
  // render( <Counter /> )
  const headerElement = screen.getByTestId( 'header' )
  expect( headerElement.textContent ).toBe( 'My Counter App' )
} )

test( 'Counter initially starts with text of zero', () => {
  // render( <Counter /> )
  const counterEl = screen.getByTestId( 'counter' )
  expect( counterEl.textContent ).toBe( '0' )
} )

test( 'Input contains initial value of 1', () => {
  // render( <Counter /> )
  const inputEl = screen.getByTestId( 'input' )
  expect( inputEl.value ).toBe( '1' )
} )

test( 'add button renders with +', () => {
  // render( <Counter /> )
  const addButtonEl = screen.getByTestId( 'add-btn' )
  expect( addButtonEl.textContent ).toBe( '+' )
} )

test( 'add button renders with -', () => {
  // render( <Counter /> )
  const subtractButtonEl = screen.getByTestId( 'subtract-btn' )
  expect( subtractButtonEl.textContent ).toBe( '-' )
} )

test( 'change value of input works correctly', () => {
  // render( <Counter /> )
  const inputEl = screen.getByTestId( 'input' )
  expect( inputEl.value ).toBe( '1' )
  fireEvent.change( inputEl, {
    target: {
      value: '5'
    }
  } )
  expect( inputEl.value ).toBe( '5' )
} )

test( 'clicking on + button adds one to counter', () => {
  // render( <Counter /> )
  const addBtnEl = screen.getByTestId( 'add-btn' )
  const counterEl = screen.getByTestId( 'counter' )

  expect( counterEl.textContent ).toBe( '0' )
  fireEvent.click( addBtnEl )
  expect( counterEl.textContent ).toBe( '1' )
} )

test( 'clicking on - button subtracts one from counter', () => {
  // render( <Counter /> )
  const subtractBtnEl = screen.getByTestId( 'subtract-btn' )
  const counterEl = screen.getByTestId( 'counter' )

  expect( counterEl.textContent ).toBe( '0' )
  fireEvent.click( subtractBtnEl )
  expect( counterEl.textContent ).toBe( '-1' )
} )

test( 'changing value then clicking on add btn works correctly', () => {
  // render( <Counter /> )
  const addBtnEl = screen.getByTestId( 'add-btn' )
  const counterEl = screen.getByTestId( 'counter' )
  const inputEl = screen.getByTestId( 'input' )

  fireEvent.change( inputEl, {
    target: {
      value: '5'
    }
  } )

  fireEvent.click( addBtnEl )

  expect( counterEl.textContent ).toBe( '5' )
} )

test( 'changing value then clicking on subtract btn works correctly', () => {
  // render( <Counter /> )
  const subtractBtnEl = screen.getByTestId( 'subtract-btn' )
  const counterEl = screen.getByTestId( 'counter' )
  const inputEl = screen.getByTestId( 'input' )

  fireEvent.change( inputEl, {
    target: {
      value: '5'
    }
  } )

  fireEvent.click( subtractBtnEl )

  expect( counterEl.textContent ).toBe( '-5' )
} )

test( 'adding and then subtracting leads to correct counter number', () => {
  // render( <Counter /> )
  const addBtnEl = screen.getByTestId( 'add-btn' )
  const subtractBtnEl = screen.getByTestId( 'subtract-btn' )
  const counterEl = screen.getByTestId( 'counter' )
  const inputEl = screen.getByTestId( 'input' )

  fireEvent.change( inputEl, {
    target: {
      value: '10'
    }
  } )

  fireEvent.click( addBtnEl )
  fireEvent.click( addBtnEl )
  fireEvent.click( addBtnEl )
  fireEvent.click( addBtnEl )
  fireEvent.click( subtractBtnEl )
  fireEvent.click( subtractBtnEl )

  expect( counterEl.textContent ).toBe( '20' )

  fireEvent.change( inputEl, {
    target: {
      value: '5'
    }
  } )

  fireEvent.click( addBtnEl )
  fireEvent.click( subtractBtnEl )
  fireEvent.click( subtractBtnEl )

  expect( counterEl.textContent ).toBe( '15' )
} )

test( 'counter contains correct class name', () => {
  // render( <Counter /> )
  const counterEl = screen.getByTestId( 'counter' )
  const inputEl = screen.getByTestId( 'input' )
  const addBtnEl = screen.getByTestId( 'add-btn' )
  const subtractBtnEl = screen.getByTestId( 'subtract-btn' )



  fireEvent.change( inputEl, {
    target: {
      value: '50'
    }
  } )

  fireEvent.click( addBtnEl )

  expect( counterEl.className ).toBe( '' )

  fireEvent.click( addBtnEl )

  expect( counterEl.className ).toBe( 'green' )

  fireEvent.click( addBtnEl )

  expect( counterEl.className ).toBe( 'green' )

  fireEvent.click( subtractBtnEl )
  fireEvent.click( subtractBtnEl )

  expect( counterEl.className ).toBe( '' )

  fireEvent.click( subtractBtnEl )
  fireEvent.click( subtractBtnEl )
  fireEvent.click( subtractBtnEl )
  fireEvent.click( subtractBtnEl )

  expect( counterEl.className ).toBe( 'red' )



} )
