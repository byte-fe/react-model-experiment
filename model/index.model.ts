import Home from './home.model'
import Counter from './counter.model'
import BenchMark from './benchmark.model'
import Todo from './todo.model'
import Shared from './shared.model'

const models = {
  Home,
  Counter,
  BenchMark,
  Todo,
  Shared
}

export type ModelProps = ModelsProps<typeof models>
