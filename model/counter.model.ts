const initialState = {
  counter: 0
}

type StateType = typeof initialState
type ActionsParamType = {
  increment: number | undefined
  incrementTwice: number | undefined
  incrementTwiceUnValid: number | undefined
}

const Model: ModelType<StateType, ActionsParamType> = {
  actions: {
    increment: params => {
      return state => {
        state.counter += params || 1
      }
    },
    incrementTwice: async (params, { actions }) => {
      await actions.increment(params)
      await actions.increment(params)
    },
    incrementTwiceUnValid: (params, { actions }) => {
      actions.increment(params)
      actions.increment(params)
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

// @ts-ignore
export { ConsumerType, StateType, ActionType }
