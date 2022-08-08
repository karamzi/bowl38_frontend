import React from 'react'
import './addComment.css'
import {ButtonPreLoader} from "../common/PreLoader";


const AddComment = props => {
    const disabled = props.IsFetching || !props.message
    const showButtons = props.showButtons || props.addCommentIsFetching
    return (
        <div className="add_comment">
            <div className="form_img">
                <p>М</p>
            </div>
            <div className="form">
                <div className="message_input">
                    <input onFocus={props.onShowButtons} onChange={e => props.onChangeMessage(e.target.value)}
                           value={props.message} type="text"
                           placeholder="Оставьте комментарий" required/>
                </div>
                {showButtons &&
                <div className="add_comment_button">
                    <p onClick={props.onHideButtons}>Отмена</p>
                    {props.addCommentIsFetching ? <ButtonPreLoader/> :
                        <input onClick={() => props.onAddComment(props.newsId, props.message)} disabled={disabled}
                               type="submit" value="Оставить комментарий"/>}
                </div>
                }
            </div>
        </div>
    )
}

export default AddComment