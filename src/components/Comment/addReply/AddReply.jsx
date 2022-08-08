import React from 'react'
import './addReply.css'
import {ButtonPreLoader} from "../../common/PreLoader";


const AddReply = props => {

    const onAddReply = () => {
        props.addReply(props.commentId, props.message, props.newsId)
        props.onToggleReply(props.commentId)
    }

    return (
        <div className="add_reply">
            <div className="form_img">
                <p>{props.letter}</p>
            </div>
            <div className="form">
                <div className="message_input">
                    <input onChange={e => props.onChangeMessage(e.target.value)} value={props.message} autoComplete="off" required type="text" placeholder="Добавьте ответ"/>
                </div>
                <div className="add_comment_button">
                    <p onClick={props.hideForm}>Отмена</p>
                    {props.isFetching ? <ButtonPreLoader/> : <input onClick={() => onAddReply()} disabled={!props.message} type="submit" value="Ответить"/> }
                </div>
            </div>
        </div>
    )
}

export default AddReply