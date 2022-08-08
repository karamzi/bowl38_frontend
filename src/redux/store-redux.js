import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import NewsReducer from "./news_reducer"
import {TournamentReducer} from "./tournament_reducer"


const reducers = combineReducers({
    news: NewsReducer,
    tournament: TournamentReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store