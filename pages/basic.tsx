import * as React from 'react'
import { useEffect, useState } from 'react'
import { useStore, getState } from '../model/index.model'

const Basic = () => {
  const [visible, setVisible] = useState(true)
  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        <span>Component mounted / unmounted</span>
      </button>
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <div style={{ padding: '2rem' }}>
          {visible && <BasicHook />}
          <pre style={{ backgroundColor: '#00066', padding: '0.5rem' }}>
            <code>
              {`
const BasicHook = () => {
  const [state, actions] = useStore('Counter')
  useEffect(() => {
    console.log('some mounted actions from BasicHooks')
    return () => console.log('some unmounted actions from BasicHooks')
  }, [])
  useEffect(() => console.log('state change'), [state])
  return (
    <>
      <div>state: {JSON.stringify(state)}</div>
      <div>
        <button style={styles.button} onClick={() => actions.increment(1)}>
          increment
        </button>
      </div>
    </>
  )
}
          `}
            </code>
          </pre>
        </div>

        <div style={{ padding: '2rem' }}>
          {/* {visible && <BasicClass />} */}
          <pre style={{ backgroundColor: '#00066', padding: '0.5rem' }}>
            <code>
              {`
@connect(
  'Counter',
  (state: any) => state
)
class BasicClass extends React.Component {
  componentDidMount() {
    console.log('some mounted actions from BasicClass')
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps && prevProps.state) {
      if (prevProps.state.counter === this.props.state.counter - 1) {
        console.log('increment happened')
      }
    }
  }
  componentWillUnmount() {
    console.log('some unmounted actions from BasicClass')
  }
  render() {
    const { state, actions } = this.props
    return (
      <>
        <div>state: {JSON.stringify(state)}</div>
        <div>
          <button style={styles.button} onClick={() => actions.increment(1)}>
            increment
          </button>
        </div>
      </>
    )
  }
}
          `}
            </code>
          </pre>
        </div>
      </div>
    </>
  )
}

const BasicHook = () => {
  const [state, actions] = useStore('Counter')
  useEffect(() => {
    console.log('some mounted actions from BasicHooks')
    return () =>
      console.log(
        `Basic Hooks unmounted, current Counter state: ${JSON.stringify(
          getState('Counter')
        )}`
      ) // Hint when use react-modelx
  }, [])
  useEffect(() => console.log('state change'), [state])
  return (
    <>
      <div>state: {JSON.stringify(state)}</div>
      <div>
        <button style={styles.button} onClick={() => actions.increment(1)}>
          increment
        </button>
      </div>
    </>
  )
}

const styles = {
  button: {
    width: '7rem',
    height: '3rem',
    borderColor: 'transparent',
    backgroundColor: 'skyblue'
  }
}
export default Basic
