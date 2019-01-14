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

const Model: ModelType<StateType, ActionsParamType> = {
  actions: {
    add: async (state, _, params) => {
      const newState = state
      newState.todoList.push(params)
      return {
        ...newState
      }
    },
    remove: (state, _, index) => {
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

export default Model
