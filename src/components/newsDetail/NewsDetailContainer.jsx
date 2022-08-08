import React from 'react'
import NewsDetail from "./NewsDetail"
import {compose} from "redux"
import {connect} from "react-redux";
import {hideFormAC, onChangeMessageAC, setNewsThunkCreator, showFormAC} from "../../redux/news_reducer"


class NewsDetailContainer extends React.Component {

    componentDidMount() {
        this.props.setNews(this.props.match.params.id)
    }

    render() {
        return <NewsDetail newsId={this.props.match.params.id} {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        news: state.news,
    }
}

const mapDispatchToProps = {
    setNews: setNewsThunkCreator,
    showForm: showFormAC,
    hideForm: hideFormAC,
    onChangeMessage: onChangeMessageAC,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(NewsDetailContainer)