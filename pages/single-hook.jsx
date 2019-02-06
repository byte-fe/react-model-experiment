import React from 'react'
import { useStore, getState } from '../model/index.model'

const SingleHook = props => {
  const [state, actions] = useStore('Counter')
  return (
    <>
      <div>
        <h2>There is a simple counter</h2>
        <h3>state: {JSON.stringify(state)}</h3>
        <h3>Counter number: {state.counter}</h3>
      </div>
      <button onClick={() => actions.increment()}> + 1 </button>
      <button onClick={() => actions.increment(-1)}> - 1 </button>
      <button
        onClick={async () => {
          await actions.increment()
          await actions.increment()
        }}
      >
        onClick run +1 actions twice use await
      </button>
      <button
        onClick={() => {
          actions.increment()
          actions.increment()
        }}
      >
        onClick run +1 actions twice without await
      </button>
      <button
        onClick={() => {
          actions
            .increment()
            .then(() =>
              console.log('after updating', JSON.stringify(getState('Counter')))
            )
          console.log(JSON.stringify(getState('Counter')))
        }}
      >
        onClick run two +1 by action.fun().then(...)
      </button>
      <button
        onClick={() => {
          actions.incrementTwice()
        }}
      >
        Actions run two increment actions with await
      </button>
      <button onClick={() => actions.incrementTwiceUnValid()}>
        Actions run two increment actions without await
      </button>
    </>
  )
}

export default SingleHook
