import { legacy_createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'

export const store = legacy_createStore(rootReducer,
   composeWithDevTools(
      applyMiddleware(thunk)
   )
)