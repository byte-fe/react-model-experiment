import Home from './home.model'
import Counter from './counter.model'
import BenchMark from './benchmark.model'
import Todo from './todo.model'
import Shared from './shared.model'
import { Model } from 'react-model'

export const models = {
  Home,
  Counter,
  BenchMark,
  Todo,
  Shared
}

console.log(
  `variable hold in ${
    (process as any).browser ? 'browser' : 'client'
  } ${Date.now()}`
)

export const { getInitialState, useStore, getState } = Model(models)
export type Models = typeof models
