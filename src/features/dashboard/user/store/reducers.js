import { initialState } from './state';
import { types } from './constants'

function clientsMapReducers(state = initialState, action) {
  switch (action.type) {
    case types.GET_ORDER:
      return {
        ...state,
        orderID: action.payload.order[0].orderID,
        cost: action.payload.order[0].cost,
        firstName: action.payload.order[0].firstName
      }
    case types.CHANGE__ORDER_STATUS:
      return {
        ...state
      }
    case types.GET_ORDER_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export {
  clientsMapReducers
}
