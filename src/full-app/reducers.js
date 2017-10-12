import {combineReducers} from 'redux'

const incCount = (count=0, action) => (
  action.type == 'INC_COUNT' ? count + 1 : count
)

export const incCountAction = () => ({type: 'INC_COUNT'})


export const reducers = combineReducers({
  count: incCount
})
