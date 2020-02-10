import { Model } from 'react-model'

type Todo = {
  id: number
  name: string
}
const initialState = {
  todoList: [] as Todo[]
}

type StateType = typeof initialState
type ActionsParamType = {
  add: Todo
  remove: number
}

const model: ModelType<StateType, ActionsParamType> = {
  actions: {
    add: async params => {
      return (state: StateType) => {
        state.todoList.push(params)
      }
    },
    remove: index => {
      return state => {
        delete state.todoList[index]
      }
    }
  },
  state: initialState,
  asyncState: async () => {
    return {
      todoList: [
        { id: 1, name: 'eat' },
        { id: 2, name: 'drink' },
        { id: 3, name: 'play' },
        { id: 4, name: 'sleep' }
      ]
    }
  }
}

export default Model(model)
