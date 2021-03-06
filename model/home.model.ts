const initialState = {
  counter: 0,
  light: false,
  response: {} as {
    code: number
    message: string
  }
}

type StateType = typeof initialState
type ActionsParamType = {
  increment: number
  openLight: undefined
  get: undefined
}

const Model: ModelType<StateType, ActionsParamType> = {
  actions: {
    increment: params => {
      return state => {
        state.counter += params || 1
      }
    },
    openLight: async (_, { state, actions }) => {
      await actions.increment(1)
      actions.get()
      await actions.get()
      await actions.increment(1)
      await actions.increment(1)
      await actions.increment(1)
      await actions.increment(1)
      await actions.increment(1)
      await actions.increment(1)
      await actions.increment(1)
      return { light: !state.light }
    },
    get: async () => {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve()
          console.log('resolve')
        }, 3000)
      )
      console.log('getted')
      return {
        response: {
          code: 200,
          message: `${new Date().toLocaleString()} open light success`
        }
      }
    }
  },
  state: initialState,
  asyncState: async () => {
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve()
        console.log('resolve')
      }, 3000)
    )
    console.log('getted')
    return {
      response: {
        code: 200,
        message: `${new Date().toLocaleString()} open light success`
      }
    }
  }
}
export default Model

type ConsumerActionsType = getConsumerActionsType<typeof Model.actions>
type ConsumerType = { actions: ConsumerActionsType; state: StateType }
type ActionType = ConsumerActionsType

export { ConsumerType, StateType, ActionType }
