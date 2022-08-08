import React from 'react'
import './tournamentDetail.css'
import Tournament from "./tournament/Tournament"
import {PreLoader} from "../common/PreLoader"
import AddCommentContainer from "./AddCommentContainer"
import CommentContainer from "./CommentContainer"

const TournamentDetail = props => {
    if (!props.tournament.tournament) {
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
        <section className="section_tournament_registration">
            <div className="container">
                <Tournament tournament={props.tournament}
                            addPlayer={props.addPlayer}
                            deletePlayer={props.deletePlayer}
                            id={props.id}
                />
                <div className="count_comments">{commentsNumber(props.tournament.comments.length)}</div>
                {props.tournament.username && <AddCommentContainer newsId={props.id}/>}
                {props.tournament.comments.map((element, id) => {
                    return <CommentContainer key={id} isStaff={props.tournament.isStaff}
                                             user={props.tournament.username}
                                             comment={element}
                                             formType={props.tournament.formType}
                                             id={props.tournament.id}
                                             message={props.tournament.message}
                                             showForm={props.showForm}
                                             hideForm={props.hideForm}
                                             onChangeMessage={props.onChangeMessage}
                                             reply_name={props.tournament.reply_name}
                                             newsId={props.id}
                    />
                })}
            </div>
        </section>
    )
}

export default TournamentDetail