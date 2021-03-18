/* eslint-disable import/no-anonymous-default-export */
import {GET_TROMBINOSCOPE} from '../actions/trombinoscope'

const initialState = {
    list: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_TROMBINOSCOPE:
        return {
          ...state,
          list: action.payload
        }
      default:
        return state
    }
  }