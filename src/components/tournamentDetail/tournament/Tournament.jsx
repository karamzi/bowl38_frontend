import React from 'react'
import './tournament.css'
import OnlineRegistrationContainer from "./onlineRegistration/OnlineRegistrationContainer"


const Tournament = props => {
    const open_registration = props.tournament.tournament.status_registrations || props.tournament.onlineRegistration.length > 0

    return (
        <div className="block_tournament_registration">
            <div className="tournament_registration">
                {props.tournament.tournament.description &&
                <div className="tournament_description">
                    <h3>Информация о турнире</h3>
                    <p>{props.tournament.tournament.description}</p>
                </div>
                }
                <div className="tournament_pattern">
                    <h3>Номер слота - {props.tournament.tournament.pattern}</h3>
                    <a className="pattern_link" href={props.tournament.tournament.img} target='_blank'>
                        <img src={props.tournament.tournament.img} alt="pattern of oil"/>
                    </a>
                </div>
                {props.tournament.tournament.regulations &&
                <div className="tournament_regulations">
                    <a target="_blank" href={props.tournament.tournament.regulations}>Регламент</a>
                </div>
                }
                {open_registration &&
                <>
                    <div className="tournament_registrations_tittle">
                        <h3>Онлайн регистрация на турнир</h3>
                    </div>
                    <OnlineRegistrationContainer id={props.id} />
                </>
                }
                {props.tournament.tournament.results &&
                <div className="tournament_result">
                    <a target="_blank" href={props.tournament.tournament.results}>Результаты</a>
                </div>
                }
            </div>
        </div>
    )
}

export default Tournament