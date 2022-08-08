import React from 'react'
import AddComment from "../addComment/AddComment";
import {compose} from "redux"
import {connect} from "react-redux"
import {addCommentThunkCreator} from "../../redux/tournament_reducer";

class AddCommentContainer extends React.Component {

    state = {
        showButtons: false,
        message: '',
    }

    onAddComment = (id, message) => {
        this.props.addComment(id, message)
        this.setState({
            showButtons: false,
            message: '',
        })
    }

    onChangeMessage = message => {
        this.setState({
            message: message,
        })
    }

    onShowButtons = () => {
        this.setState({
            showButtons: true
        })
    }

    onHideButtons = () => {
        this.setState({
            showButtons: false,
            message: '',
        })
    }

    render() {
        return <AddComment onShowButtons={this.onShowButtons} onChangeMessage={this.onChangeMessage}
                           showButtons={this.state.showButtons} message={this.state.message}
                           onHideButtons={this.onHideButtons} {...this.props}
                           onAddComment={this.onAddComment}
        />
    }
}

const mapStateToProps = state => {
    return {
        addCommentIsFetching: state.tournament.addCommentIsFetching
    }

}

const mapDispatchToProps = {
    addComment: addCommentThunkCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AddCommentContainer)