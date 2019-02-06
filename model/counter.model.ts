const initialState = {
  counter: 0
}

const timeout = () => new Promise(resolve => setTimeout(() => resolve(), 3000))

type StateType = typeof initialState
type ActionsParamType = {
  increment: number | undefined
  incrementTwice: number | undefined
  incrementTwiceUnValid: number | undefined
}

const Model: ModelType<StateType, ActionsParamType> = {
  actions: {
    increment: async (state, _, params) => {
      // console.log(state)
      return {
        counter: state.counter + (params || 1)
      }
    },
    incrementTwice: async (state, actions, params) => {
      await actions.increment(params)
      await actions.increment(params)
      return {}
    },
    incrementTwiceUnValid: (state, actions, params) => {
      actions.increment(params)
      actions.increment(params)
      return {}
    }
  },
  state: initialState,
  asyncState: async () => {
    return {
      counter: 1000
    }
  }
}

export default Model

type ConsumerActionsType = getConsumerActionsType<typeof Model.actions>
type ConsumerType = { actions: ConsumerActionsType; state: StateType }
type ActionType = ConsumerActionsType

export { ConsumerType, StateType, ActionType }
