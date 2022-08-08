import React from 'react'
import OnlineRegistration from "./OnlineRegistration"
import {addTournamentThunkCreator, deleteTournamentThunkCreator} from "../../../../redux/tournament_reducer"
import {connect} from "react-redux"
import {compose} from "redux"


class OnlineRegistrationContainer extends React.Component {

    render() {
        return <OnlineRegistration {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        user: state.tournament.username,
        players: state.tournament.onlineRegistration,
        isFetching: state.tournament.IsFetching,
        onlineRegistrationIsFetching: state.tournament.onlineRegistrationIsFetching,
        tournament: state.tournament.tournament
    }
}

const mapDispatchToProps = {
    addPlayer: addTournamentThunkCreator,
    deletePlayer: deleteTournamentThunkCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(OnlineRegistrationContainer)