import React from 'react'
import './reply.css'
import Add from "./add/Add"
import Edit from "./edit/Edit"
import Delete from "./delete/Delete"


const Reply = props => {
    const showButtons = props.user === props.reply.username || props.isStaff
    const show_reply_reply = props.formType === 'reply_reply' && props.id === props.reply.id
    const show_edit_reply = props.formType === 'edit_reply' && props.id === props.reply.id
    const show_delete_reply = props.formType === 'delete_reply' && props.id === props.reply.id
    return (
        <div className="reply">
            <div className="reply_img">
                <p>{props.reply.username[0]}</p>
            </div>
            <div className="reply_content">
                <div className="reply_title">
                    <div className="reply_name">{props.reply.username}</div>
                    <div className="reply_date">{props.reply.date}</div>
                </div>
                <div className="reply_text">{props.reply.name_reply &&
                <span>{props.reply.name_reply} </span>}{props.reply.text}</div>
                <div className="reply_buttons">
                    {props.user &&
                    <h4 onClick={() => props.showForm('reply_reply', props.reply.id, '', props.reply.username)}>Ответить</h4>}
                    {showButtons && <>
                        <p onClick={() => props.showForm('edit_reply', props.reply.id, props.reply.text)}>Редактировать</p>
                        <p onClick={() => props.showForm('delete_reply', props.reply.id, props.reply.text)}>Удалить</p>
                    </>}
                </div>
                {show_reply_reply && <Add letter={props.user[0]}
                                          reply_name={props.reply_name}
                                          message={props.message}
                                          onChangeMessage={props.onChangeMessage}
                                          hideForm={props.hideForm}
                                          addReply={props.addReply}
                                          newsId={props.newsId}
                                          isFetching={props.isFetching}
                                          comment_id={props.comment_id}
                />}
                {show_edit_reply && <Edit letter={props.user[0]}
                                          message={props.message}
                                          onChangeMessage={props.onChangeMessage}
                                          hideForm={props.hideForm}
                                          updateReply={props.updateReply}
                                          newsId={props.newsId}
                                          reply_id={props.reply.id}
                                          isFetching={props.isFetching}
                />}
                {show_delete_reply && <Delete letter={props.user[0]}
                                              message={props.message}
                                              hideForm={props.hideForm}
                                              deleteReply={props.deleteReply}
                                              newsId={props.newsId}
                                              reply_id={props.reply.id}
                                              isFetching={props.isFetching}
                />}
            </div>
        </div>
    )
}

export default Reply