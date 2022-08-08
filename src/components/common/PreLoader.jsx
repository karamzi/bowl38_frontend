import React from 'react'
import './preLoader.css'
import pre_loader from '../../img/pre_loader.svg'
import button_pre_loader from '../../img/button_pre_loader.svg'


export const PreLoader = () => {
    return (
        <section className="section_pre_loader">
            <div className="pre_loader">
                <img src={pre_loader} alt="pre_loader"/>
            </div>
        </section>
    )
}

export const ButtonPreLoader = () => {
    return (
        <div>
            <img src={button_pre_loader} alt="button_pre_loader"/>
        </div>
    )
}