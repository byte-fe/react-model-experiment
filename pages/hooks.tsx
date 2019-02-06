import * as React from 'react'
import { useStore } from '../model/index.model'

const SharedChild = () => {
  const [state, actions] = useStore('Home')
  return <div>{JSON.stringify(state)}</div>
}

const Hooks = () => {
  const [state, actions] = useStore('Home')
  const [sharedState, sharedActions] = useStore('Shared')

  return (
    <div>
      <div>Home model value: {JSON.stringify(state)}</div>
      <div>Shared model value: {JSON.stringify(sharedState)}</div>
      <button
        onClick={e => {
          actions.increment(33)
        }}
      >
        home increment
      </button>
      <button onClick={e => sharedActions.increment(20)}>
        shared increment
      </button>
      <button
        onClick={async e => {
          await actions.get()
          await sharedActions.get()
        }}
      >
        fake request
      </button>
      <button onClick={e => actions.openLight()}>fake nested call</button>
    </div>
  )
}

export default () => (
  <>
    <Hooks />
    <SharedChild />
  </>
)
