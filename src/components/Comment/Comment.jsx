import React from 'react'
import './comment.css'
import AddReply from "./addReply/AddReply"
import EditComment from "./editComment/EditComment"
import DeleteComment from "./deleteComment/DeleteComment"
import Reply from "./reply/Reply";


const Comment = props => {
    const showButtons = props.user === props.comment.username || props.isStaff
    const show_add_reply = props.formType === 'add_reply' && props.id == props.comment.id
    const show_edit_comment = props.formType === 'edit_comment' && props.id == props.comment.id
    const show_delete_comment = props.formType === 'delete_comment' && props.id == props.comment.id
    return (
        <div className="comment">
            <div className="comment_img">
                <p className="comment_letter">{props.comment.username[0]}</p>
            </div>
            <div className="comment_content">
                <div className="comment_title">
                    <div className="comment_name">{props.comment.username}</div>
                    <div className="comment_date">{props.comment.date}</div>
                </div>
                <p className="comment_text">{props.comment.text}</p>
                <div className="comment_buttons">
                    {props.user && <h4 onClick={() => props.showForm('add_reply', props.comment.id)}>Ответить</h4>}
                    {showButtons && <>
                        <p onClick={() => props.showForm('edit_comment', props.comment.id, props.comment.text)}>Редактировать</p>
                        <p onClick={() => props.showForm('delete_comment', props.comment.id, props.comment.text)}>Удалить</p>
                    </>}
                </div>
                {props.comment.replyComments.length > 0 &&
                <div className="show_reply" onClick={() => props.onToggleReply(props.comment.id)}>{
                    props.showReply.some(element => element === props.comment.id) ? 'Скрыть ответы' : 'Показать ответы'
                }</div>}

                {show_add_reply && <AddReply letter={props.user[0]}
                                             message={props.message}
                                             onChangeMessage={props.onChangeMessage}
                                             hideForm={props.hideForm}
                                             addReply={props.addReply}
                                             isFetching={props.isFetching}
                                             commentId={props.comment.id}
                                             newsId={props.newsId}
                                             onToggleReply={props.onToggleReply}
                />}
                {show_edit_comment && <EditComment letter={props.user[0]}
                                                   message={props.message}
                                                   onChangeMessage={props.onChangeMessage}
                                                   hideForm={props.hideForm}
                                                   isFetching={props.isFetching}
                                                   commentId={props.comment.id}
                                                   newsId={props.newsId}
                                                   updateComment={props.updateComment}
                />}
                {show_delete_comment && <DeleteComment letter={props.user[0]}
                                                       message={props.message}
                                                       hideForm={props.hideForm}
                                                       deleteComment={props.deleteComment}
                                                       isFetching={props.isFetching}
                                                       commentId={props.comment.id}
                                                       newsId={props.newsId}
                />}
                {props.showReply.some(element => element == props.comment.id) && props.comment.replyComments.map((element, id) => {
                    return <Reply key={id} reply={element}
                                  user={props.user}
                                  isStaff={props.isStaff}
                                  id={props.id}
                                  showForm={props.showForm}
                                  message={props.message}
                                  onChangeMessage={props.onChangeMessage}
                                  hideForm={props.hideForm}
                                  reply_name={props.reply_name}
                                  formType={props.formType}
                                  newsId={props.newsId}
                                  comment_id={props.comment.id}
                                  addReply={props.addReply}
                                  updateReply={props.updateReply}
                                  deleteReply={props.deleteReply}
                                  isFetching={props.isFetching}
                    />
                })}

            </div>
        </div>
    )
}

export default Comment