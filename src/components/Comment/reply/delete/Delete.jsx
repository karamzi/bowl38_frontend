import React from 'react'
import './delete.css'
import {ButtonPreLoader} from "../../../common/PreLoader"


const Delete = props =>{
    return (
        <div className="delete">
            <div className="form_img">
                <p>{props.letter}</p>
            </div>
            <div className="form">
                <div className="message_input">
                    <input autoComplete="off" required type="text" defaultValue={props.message}/>
                </div>
                <div className="delete_buttons">
                    <p onClick={props.hideForm}>Отмена</p>
                    {props.isFetching ? <ButtonPreLoader/> : <input onClick={() => props.deleteReply(props.reply_id, props.newsId)} disabled={props.isFetching} type="submit" value="Удалить"/> }
                </div>
            </div>
        </div>
    )
}

export default Delete