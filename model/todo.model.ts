const initialState = {
  todoList: ['eat', 'sleep', 'study']
}

type StateType = typeof initialState
type ActionsParamType = {
  add: string
  remove: string
  clear: undefined
}

const Model = {
  actions: {
    add: async (state, _, params) => {
      const newState = state
      newState.todoList.push(params)
      return {
        ...newState
      }
    },
    remove: async (state, _, params) => {
      return {
        todoList: state.todoList.filter(todo => todo !== params)
      }
    },
    clear: (state, actions, params) => {
      return {
        todoList: []
      }
    }
  },
  state: initialState,
  asyncState: async () => {
    return {
      todoList: ['eat', 'drink', 'play', 'sleep']
    }
  }
} as ModelType<StateType, ActionsParamType>

export default Model

type ConsumerActionsType = getConsumerActionsType<typeof Model.actions>
type ConsumerType = { actions: ConsumerActionsType; state: StateType }
type ActionType = ConsumerActionsType

export { ConsumerType, StateType, ActionType }
