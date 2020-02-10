import React, { useState } from 'react'
import { useStore } from '../model/index.model'
import { getState } from 'react-model'

const Child = props => {
  // const state = getState('Todo')
  const [state, actions] = useStore('Todo')
  return (
    <>
      <div>
        {props.name || 'Child'} Todo State: {JSON.stringify(state)}
      </div>
    </>
  )
}

const Todos = props => {
  const [state, actions] = useStore('Todo')
  const [input, setInput] = useState('')
  return (
    <>
      <div>
        <input onChange={e => setInput(e.target.value)} />
        <button onClick={() => actions.add(input)}>Add</button>
      </div>
      {JSON.stringify(state)}
      <Child />
      {(state.todoList || []).map((todo, index) => (
        <div key={index}>
          {todo} <button onClick={() => actions.remove(todo)}> X </button>
        </div>
      ))}
      <button onClick={() => actions.clear()}>Reset</button>
    </>
  )
}

const P = () => (
  <>
    <Todos />
    <Child name="Parallel" />
  </>
)

export default P
