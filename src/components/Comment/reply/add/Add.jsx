import React from 'react'
import './add.css'
import {ButtonPreLoader} from "../../../common/PreLoader"


const Add = props => {
    return (
        <div className="add">
            <div className="form_img">
                <p>{props.letter}</p>
            </div>
            <div className="form">
                <div className="message_input">
                    <input onChange={e => props.onChangeMessage(e.target.value)}
                           value={`${props.reply_name} ${props.message}`} autoComplete="off" required type="text"
                           placeholder="Добавьте ответ"/>
                </div>
                <div className="add_button">
                    <p onClick={props.hideForm}>Отмена</p>
                    {props.isFetching ? <ButtonPreLoader/> : <input onClick={() => props.addReply(props.comment_id, props.message, props.newsId, props.reply_name)} disabled={!props.message} type="submit" value="Ответить"/> }
                </div>
            </div>
        </div>
    )
}

export default Add