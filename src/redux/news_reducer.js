import {newsAPI} from "../API/API";

const SET_NEWS_PAGE = 'SET_NEWS_PAGE'
const TOGGLE_LOADING = 'TOGGLE_LOADING'
const START_IS_FETCHING = 'START_IS_FETCHING'
const END_IS_FETCHING = 'END_IS_FETCHING'
const START_ADD_COMMENT_IS_FETCHING = 'START_ADD_COMMENT_IS_FETCHING'
const END_ADD_COMMENT_IS_FETCHING = 'END_ADD_COMMENT_IS_FETCHING'
const SHOW_FORM = 'SHOW_FORM'
const HIDE_FORM = 'HIDE_FORM'
const ON_CHANGE_MESSAGE = 'ON_CHANGE_MESSAGE'

const initial = {
    username: '',
    isStaff: false,
    news: null,
    comments: [],
    reply_name: '',
    message: '',
    formType: '',
    id: null,
    isLoading: false,
    IsFetching: false,
    addCommentIsFetching: false,
}

const NewsReducer = (state=initial, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
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
        case SET_NEWS_PAGE:
            return {
                ...state,
                news: action.data.news,
                comments: action.data.comments,
                username: action.data.user,
                isStaff: action.data.isStaff,
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

const setNewsPageAC = data => {
    return {
        type: SET_NEWS_PAGE,
        data,
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

export const setNewsThunkCreator = id => {
    return dispatch => {
        dispatch(toggleLoadingAC())
        newsAPI.getNews(id).then(data => {
            dispatch(setNewsPageAC(data))
            dispatch(toggleLoadingAC())
        })
    }

}

export const addCommentThunkCreator = (id, message) => {
    return dispatch => {
        dispatch(startAddCommentIsFetchingAC())
        newsAPI.addComment(id, message).then(data => {
            if(data.status === 200) {
                newsAPI.getNews(id).then(data => {
                    dispatch(setNewsPageAC(data))
                    dispatch(endAddCommentIsFetchingAC())
                })
            }
        })
    }
}

export const updateCommentThunkCreator = (commentId, newsId, message) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        newsAPI.updateComment(commentId, message).then(data => {
            if(data.status === 200) {
                newsAPI.getNews(newsId).then(data => {
                    dispatch(setNewsPageAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const deleteCommentThunkCreator = (commentId, newsId) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        newsAPI.deleteComment(commentId).then(data => {
            if(data.status === 200) {
                newsAPI.getNews(newsId).then(data => {
                    dispatch(setNewsPageAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const addReplyThunkCreator = (id, message, newsId, reply_name='') => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        newsAPI.addReply(id, message, reply_name).then(data => {
            if(data.status === 200) {
                newsAPI.getNews(newsId).then(data => {
                    dispatch(setNewsPageAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const updateReplyThunkCreator = (id, message, newsId) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        newsAPI.updateReply(id, message).then(data => {
            if(data.status === 200) {
                newsAPI.getNews(newsId).then(data => {
                    dispatch(setNewsPageAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export const deleteReplyThunkCreator = (id, newsId) => {
    return dispatch => {
        dispatch(startIsFetchingAC())
        newsAPI.deleteReply(id).then(data => {
            if(data.status === 200) {
                newsAPI.getNews(newsId).then(data => {
                    dispatch(setNewsPageAC(data))
                    dispatch(endIsFetchingAC())
                })
            }
        })
    }
}

export default NewsReducer