import {newsAPI, tournamentAPI} from "../API/API";

const SET_TOURNAMENT = 'SET_TOURNAMENT'
const TOGGLE_LOADING = 'TOGGLE_LOADING'
const START_IS_FETCHING = 'START_IS_FETCHING'
const END_IS_FETCHING = 'END_IS_FETCHING'
const START_ADD_COMMENT_IS_FETCHING = 'START_ADD_COMMENT_IS_FETCHING'
const END_ADD_COMMENT_IS_FETCHING = 'END_ADD_COMMENT_IS_FETCHING'
const START_ONLINE_REGISTRATION_IS_FETCHING = 'START_ONLINE_REGISTRATION_IS_FETCHING'
const END_ONLINE_REGISTRATION_IS_FETCHING = 'END_ONLINE_REGISTRATION_IS_FETCHING'
const SHOW_FORM = 'SHOW_FORM'
const HIDE_FORM = 'HIDE_FORM'
const ON_CHANGE_MESSAGE = 'ON_CHANGE_MESSAGE'

const initial = {
    username: '',
    isStaff: false,
    tournament: null,
    onlineRegistration: [],
    comments: [],
    reply_name: '',
    message: '',
    formType: '',
    id: null,
    isLoading: false,
    IsFetching: false,
    addCommentIsFetching: false,
    onlineRegistrationIsFetching: false,
}

export const TournamentReducer = (state = initial, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case SET_TOURNAMENT:
            return {
                ...state,
                username: action.data.user,
                isStaff: action.data.isStaff,
                tournament: action.data.tournament,
                onlineRegistration: action.data.online_registrations,
                comments: action.data.comments

            }
        case START_IS_FETCHING:
            return {
                ...state,
                IsFetching: true
            }
        case END_IS_FETCHING:
            return {
                ...state,
                IsFetching: false,
                message: '',
                formType: '',
                id: null,
            }
        case START_ADD_COMMENT_IS_FETCHING:
            return {
                ...state,
                addCommentIsFetching: true
            }
        case END_ADD_COMMENT_IS_FETCHING:
            return {
                ...state,
                addCommentIsFetching: false
            }
        case START_ONLINE_REGISTRATION_IS_FETCHING:
            return {
                ...state,
                onlineRegistrationIsFetching: true
            }
        case END_ONLINE_REGISTRATION_IS_FETCHING:
            return {
                ...state,
                onlineRegistrationIsFetching: false,
            }
        case SHOW_FORM:
            return {
                ...state,
                formType: action.formType,
                id: action.id,
                message: action.message,
                reply_name: action.reply_name ? `@${action.reply_name},` : ''
            }
        case HIDE_FORM:
            return {
                ...state,
                formType: '',
                id: null,
                message: '',
                reply_name: '',
            }
        case ON_CHANGE_MESSAGE:
            return {
                ...state,
                message: state.reply_name ? action.message.replace(state.reply_name, '').trimStart() : action.message
            }
        default:
            return state
    }
}

const setTournamentAC = data => {
    return {
        type: SET_TOURNAMENT,
        data
    }
}

const toggleLoadingAC = () => {
    return {
        type: TOGGLE_LOADING
    }
}

const startIsFetchingAC = () => {
    return {
        type: START_IS_FETCHING
    }
}

const endIsFetchingAC = () => {
    return {
        type: END_IS_FETCHING
    }
}

const startOnlineRegistrationIsFetchingAC = () => {
    return {
        type: START_ONLINE_REGISTRATION_IS_FETCHING
    }
}

const endOnlineRegistrationIsFetchingAC = () => {
    return {
        type: END_ONLINE_REGISTRATION_IS_FETCHING
    }
}

const startAddCommentIsFetchingAC = () => {
    return {
        type: START_ADD_COMMENT_IS_FETCHING
    }
}

const endAddCommentIsFetchingAC = () => {
    return {
        type: END_ADD_COMMENT_IS_FETCHING
    }
}

export const showFormAC = (formType, id, message='', reply_name='') => {
    return {
        type: SHOW_FORM,
        formType,
        id,
        message,
        reply_name
    }
}

export const hideFormAC = () => {
    return {
        type: HIDE_FORM
    }
}

export const onChangeMessageAC = message => {
    return {
        type: ON_CHANGE_MESSAGE,
        message,
    }
}

export const setTournamentThunkCreator = id => {
    return dispatch => {
        dispatch(toggleLoadingAC())
        tournamentAPI.getTournament(id).then(data => {
            if (data.status === 200) {
                dispatch(setTournamentAC(data))
                dispatch(toggleLoadingAC())
            }
        })
    }
}

export const addTournamentThunkCreator = (id, group) => {
    return dispatch => {
        dispatch(startOnlineRegistrationIsFetchingAC())
        tournamentAPI.addPlayer(id, group).then(data => {
            tournamentAPI.getTournament(id).then(data => {
                dispatch(setTournamentAC(data))
                dispatch(endOnlineRegistrationIsFetchingAC())
            })
        })
    }
}

export const deleteTournamentThunkCreator = id => {
    return dispatch => {
        dispatch(startOnlineRegistrationIsFetchingAC())
        tournamentAPI.deletePlayer(id).then(data => {
            tournamentAPI.getTournament(id).then(data => {
                dispatch(setTournamentAC(data))
                dispatch(endOnlineRegistrationIsFetchingAC())
            })
        })
    }
}

export const addCommentThunkCreator = (id, message) => {
    return dispatch => {
        dispatch(startAddCommentIsFetchingAC())
        tournamentAPI.addComment(id, message).then(data => {
            if(data.status === 200) {
                tournamentAPI.getTournament(id).then(data => {
                    dispatch(setTournamentAC(data))
                    dispatch(endAddCommentIsFetchingAC())
                })
            }
        })
    }
}

export const updateCommentThunkCreator = (commentId, newsId, message) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        tournamentAPI.updateComment(commentId, message).then(data => {
            if(data.status === 200) {
                tournamentAPI.getTournament(newsId).then(data => {
                    dispatch(setTournamentAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const deleteCommentThunkCreator = (commentId, newsId) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        tournamentAPI.deleteComment(commentId).then(data => {
            if(data.status === 200) {
                tournamentAPI.getTournament(newsId).then(data => {
                    dispatch(setTournamentAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const addReplyThunkCreator = (id, message, newsId, reply_name='') => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        tournamentAPI.addReply(id, message, reply_name).then(data => {
            if(data.status === 200) {
                tournamentAPI.getTournament(newsId).then(data => {
                    dispatch(setTournamentAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const updateReplyThunkCreator = (id, message, newsId) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        tournamentAPI.updateReply(id, message).then(data => {
            if(data.status === 200) {
                tournamentAPI.getTournament(newsId).then(data => {
                    dispatch(setTournamentAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const deleteReplyThunkCreator = (id, newsId) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        tournamentAPI.deleteReply(id).then(data => {
            if(data.status === 200) {
                tournamentAPI.getTournament(newsId).then(data => {
                    dispatch(setTournamentAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}