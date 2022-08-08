import React from 'react'
import './onlineRegistration.css'
import Buttons from "./buttons/Buttons"


const OnlineRegistration = props => {
    const first_group = props.players.filter(element => element.group === 1)
    const second_group = props.players.filter(element => element.group === 2)
    const third_group = props.players.filter(element => element.group === 3)

    return (
        <>
            <div className="tournament_registration_tables">
                <div className="tournament_registration_table">
                    <p>Группа 1</p>
                    <table className="table_col">
                        <colgroup>
                            <col style={{background: '#C7DAF0'}}/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>Номер</th>
                            <th>Спортсмен</th>
                        </tr>
                        {first_group.map((element, id) => {
                            return (
                                <tr key={id}>
                                    <td className="number1">{id + 1}</td>
                                    <td>{element.name}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="tournament_registration_table">
                    <p>Группа 2</p>
                    <table className="table_col">
                        <colgroup>
                            <col style={{background: '#C7DAF0'}}/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>Номер</th>
                            <th>Спортсмен</th>
                        </tr>
                        {second_group.map((element, id) => {
                            return (
                                <tr key={id}>
                                    <td className="number1">{id + 1}</td>
                                    <td>{element.name}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="tournament_registration_table">
                    <p>Группа 3</p>
                    <table className="table_col">
                        <colgroup>
                            <col style={{background: '#C7DAF0'}}/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>Номер</th>
                            <th>Спортсмен</th>
                        </tr>
                        {third_group.map((element, id) => {
                            return (
                                <tr key={id}>
                                    <td className="number1">{id + 1}</td>
                                    <td>{element.name}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            {props.user &&
            <Buttons players={props.players}
                     user={props.user}
                     onlineRegistrationIsFetching={props.onlineRegistrationIsFetching}
                     isFetching={props.isFetching}
                     first_group={first_group}
                     second_group={second_group}
                     third_group={third_group}
                     id={props.id}
                     addPlayer={props.addPlayer}
                     deletePlayer={props.deletePlayer}
                     tournament={props.tournament}
            />
            }
        </>
    )
}

export default OnlineRegistration