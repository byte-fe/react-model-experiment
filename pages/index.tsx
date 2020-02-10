import React, { PureComponent } from 'react'
import Link from 'next/link'
import { connect } from 'react-model'

import { StateType, ActionType } from '../model/home.model'
import H from './hooks'

export default class App extends PureComponent {
  render() {
    return (
      <>
        {/* <T {...this.props} /> */}
        {/* <J {...this.props} /> */}
        <H />
        <H />
      </>
    )
  }
}

const mapProps = ({ light, counter, response }: StateType) => ({
  lightStatus: light ? 'open' : 'close',
  counter,
  response
})

type RType = ReturnType<typeof mapProps>

class TSCounter extends PureComponent<
  { state: RType } & { actions: ActionType }
> {
  render() {
    return (
      <>
        <Link href="/hooks">
          <a>Hooks</a>
        </Link>
        <div>TS Counter</div>
        <div>states - {JSON.stringify(this.props.state)}</div>
        <button onClick={e => this.props.actions.increment(3)}>
          increment
        </button>
        <button onClick={e => this.props.actions.openLight()}>
          Light Switch
        </button>
        <button onClick={e => this.props.actions.get()}>Get Response</button>
        <div>message: {JSON.stringify(this.props.state.response)}</div>
      </>
    )
  }
}

const T = connect('Home', mapProps)(TSCounter)
