import React from 'react'
import './edit.css'
import {ButtonPreLoader} from "../../../common/PreLoader"


const Edit = props => {
    return (
        <div className="edit">
            <div className="form_img">
                <p>{props.letter}</p>
            </div>
            <div className="form">
                <div className="message_input">
                    <input onChange={e => props.onChangeMessage(e.target.value)} value={props.message} autoComplete="off" required type="text" placeholder="Редактировать комментарий"/>
                </div>
                <div className="edit_buttons">
                    <p onClick={props.hideForm}>Отмена</p>
                    {props.isFetching ? <ButtonPreLoader/> : <input onClick={() => props.updateReply(props.reply_id, props.message, props.newsId)} disabled={!props.message} type="submit" value="Редактировать"/> }
                </div>
            </div>
        </div>
    )
}


export default Edit