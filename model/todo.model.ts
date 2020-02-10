import { Model } from 'react-model'

const initialState = {
  todoList: ['eat', 'sleep', 'study']
}

type StateType = typeof initialState
type ActionsParamType = {
  add: string
  remove: string
  clear: undefined
}

const model: ModelType<StateType, ActionsParamType> = {
  actions: {
    add: params => {
      return state => {
        state.todoList.push(params)
      }
    },
    remove: async (params, { state }) => {
      return {
        todoList: state.todoList.filter(todo => todo !== params)
      }
    },
    clear: () => {
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
}

export default Model(model)

type ConsumerActionsType = getConsumerActionsType<typeof Model.actions>
type ConsumerType = { actions: ConsumerActionsType; state: StateType }
type ActionType = ConsumerActionsType

export { ConsumerType, StateType, ActionType }
