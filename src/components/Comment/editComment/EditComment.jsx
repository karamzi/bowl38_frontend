import React from 'react'
import './editComment.css'
import {ButtonPreLoader} from "../../common/PreLoader"


const EditComment = props => {
    return (
        <div className="edit_comment">
            <div className="form_img">
                <p>{props.letter}</p>
            </div>
            <div className="form">
                <div className="message_input">
                    <input onChange={e => props.onChangeMessage(e.target.value)} value={props.message} autoComplete="off" required type="text" placeholder="Редактировать комментарий"/>
                </div>
                <div className="edit_comment_buttons">
                    <p onClick={props.hideForm}>Отмена</p>
                    {props.isFetching ? <ButtonPreLoader/> : <input onClick={() => props.updateComment(props.commentId, props.newsId, props.message)} disabled={!props.message} type="submit" value="Редактировать"/> }
                </div>
            </div>
        </div>
    )
}

export default EditComment