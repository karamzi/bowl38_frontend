import React from 'react'
import './newsDetail.css'
import News from "./news/News"
import AddCommentContainer from "./AddCommentContainer"
import CommentContainer from "./CommentContainer"
import {PreLoader} from "../common/PreLoader"


const NewsDetail = props => {
    if (!props.news.news) {
        return <PreLoader/>
    }

    const commentsNumber = count => {
        if (count % 100 >= 11 && count % 100 <= 19) {
            return count + ' коментариев'
        } else {
            switch (count % 10) {
                case 1:
                    return count + ' комментарий'
                case 2:
                    return count + ' комментария'
                case 3:
                    return count + ' комментария'
                case 4:
                    return count + ' комментария'
                default:
                    return count + ' комментариев'

            }
        }
    }

    return (
        <>
            <section className="section_news">
                <div className="container">
                    <News news={props.news.news}/>
                    <div className="count_comments">{commentsNumber(props.news.comments.length)}</div>
                    {props.news.username && <AddCommentContainer newsId={props.newsId} />}
                    {props.news.comments.map((element, id) => {
                        return <CommentContainer key={id} isStaff={props.news.isStaff}
                                                 user={props.news.username}
                                                 comment={element}
                                                 formType={props.news.formType}
                                                 id={props.news.id}
                                                 message={props.news.message}
                                                 showForm={props.showForm}
                                                 hideForm={props.hideForm}
                                                 onChangeMessage={props.onChangeMessage}
                                                 reply_name={props.news.reply_name}
                                                 newsId={props.newsId}
                        />
                    })}
                </div>
            </section>
        </>
    )
}

export default NewsDetail