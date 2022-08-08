import React from 'react'
import './App.css'
import Footer from "./components/footer/Footer"
import {Route, Switch} from "react-router-dom";
import NewsDetailContainer from "./components/newsDetail/NewsDetailContainer"
import TournamentDetailContainer from "./components/tournamentDetail/TournamentDetailContainer"

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/news/:id/' component={NewsDetailContainer}/>
                <Route exact path='/tournament/:id/' component={TournamentDetailContainer}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default App
