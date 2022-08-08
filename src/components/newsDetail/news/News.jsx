import React from 'react'
import './news.css'


const News = props => {
    const description =  {__html: props.news.description}
    return (
        <div className="block_news">
            <div className="news">
                <div className="news_content">
                    <p dangerouslySetInnerHTML={description} />
                    {props.news.img.map((element, id) => {
                        return (
                            <>
                                <div key={id} className="news_img">
                                    <a href={element.img} target='_blank'><img src={element.img} alt="Изображения с турнира"/></a>
                                </div>
                            </>
                        )
                    })}
                    <a target="_blank" href={props.news.link}>Результаты</a>
                </div>
            </div>
        </div>
    )
}

export default News