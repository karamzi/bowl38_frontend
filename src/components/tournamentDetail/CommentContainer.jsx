import React from 'react'
import Comment from "../Comment/Comment"
import {compose} from "redux"
import {connect} from "react-redux"
import {
    addReplyThunkCreator,
    deleteCommentThunkCreator, deleteReplyThunkCreator,
    updateCommentThunkCreator, updateReplyThunkCreator
} from "../../redux/tournament_reducer"


class CommentContainer extends React.Component {

    state = {
        showReply: [],
    }

    onToggleReply = id => {
        this.setState({
            showReply: this.state.showReply.some(element => element === id) ? this.state.showReply.filter(element => element !== id) : [...this.state.showReply, id]
        })
    }

    render() {
        return <Comment showReply={this.state.showReply} onToggleReply={this.onToggleReply} {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.tournament.IsFetching
    }
}

const mapDispatchToProps = {
    updateComment: updateCommentThunkCreator,
    deleteComment: deleteCommentThunkCreator,
    addReply: addReplyThunkCreator,
    updateReply: updateReplyThunkCreator,
    deleteReply: deleteReplyThunkCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CommentContainer)