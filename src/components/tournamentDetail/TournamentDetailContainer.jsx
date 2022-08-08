import React from 'react'
import TournamentDetail from "./TournamentDetail"
import {compose} from "redux"
import {connect} from "react-redux"
import {hideFormAC, onChangeMessageAC, setTournamentThunkCreator, showFormAC} from "../../redux/tournament_reducer"


class TournamentDetailContainer extends React.Component {

    componentDidMount() {
        this.props.getTournament(this.props.match.params.id)
    }

    render() {
        return <TournamentDetail id={this.props.match.params.id} {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        tournament: state.tournament
    }
}

const mapDispatchToProps = {
    getTournament: setTournamentThunkCreator,
    showForm: showFormAC,
    hideForm: hideFormAC,
    onChangeMessage: onChangeMessageAC,
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(TournamentDetailContainer)