import React from 'react'
import './deleteComment.css'
import {ButtonPreLoader} from "../../common/PreLoader"


const DeleteComment = props => {
    return (
        <div className="delete_comment">
            <div className="form_img">
                <p>{props.letter}</p>
            </div>
            <div className="form">
                <div className="message_input">
                    <input autoComplete="off" required type="text" defaultValue={props.message}/>
                </div>
                <div className="delete_comment_buttons">
                    <p onClick={props.hideForm}>Отмена</p>
                    {props.isFetching ? <ButtonPreLoader/> : <input onClick={() => props.deleteComment(props.commentId, props.newsId)} disabled={props.isFetching} type="submit" value="Удалить"/> }
                    </div>
            </div>
        </div>
    )
}

export default DeleteComment