import React from 'react'
import {ButtonPreLoader} from "../../../../common/PreLoader"


const Buttons = props => {
    let selectElement = React.createRef()
    const lastNameWithFirstLetter = props.user.split(' ')[1] + ' ' + props.user.split(' ')[0][0]
    const lastName = props.user.split(' ')[1]
    const show_buttons = props.first_group.length < props.tournament.first_group || props.second_group.length < props.tournament.second_group || props.third_group.length < props.tournament.third_group

    const onAddPlayer = () => {
        props.addPlayer(props.id, selectElement.current.value)
    }

    return props.players.some(element => element.name === props.user | element.name === lastNameWithFirstLetter | element.name === lastName) ? props.onlineRegistrationIsFetching ?
        <div className="tournament_form"><ButtonPreLoader/></div> :
        <div className="tournament_form">
            <button onClick={() => props.deletePlayer(props.id)} name="cancel" className="submit"
                    disabled={props.onlineRegistrationIsFetching}>Отменить регистрацию
            </button>
        </div> : props.onlineRegistrationIsFetching ? <div className="tournament_form"><ButtonPreLoader/></div> :
        show_buttons &&
        <div className="tournament_form">
            <select ref={selectElement} name="group" className="form-control">
                {props.first_group.length < props.tournament.first_group && <option value="1">1 группа</option>}
                {props.second_group.length < props.tournament.second_group && <option value="2">2 группа</option>}
                {props.third_group.length < props.tournament.third_group && <option value="3">3 группа</option>}
            </select>
            <button onClick={onAddPlayer} name="registration" className="submit"
                    disabled={props.onlineRegistrationIsFetching}>Зарегистрироваться
            </button>
        </div>
}

export default Buttons