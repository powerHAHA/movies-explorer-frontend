import React from 'react'
import './Portfolio.css'

import link from '../../images/linkItem.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__components'>
                <li className='portfolio__component'>
                    <a className='portfolio__link' href='https://github.com/powerHAHA/how-to-learn' target="_blank" rel='noreferrer'>
                    <img src={link} className='portfolio__link-img' alt='link' />Статичный сайт</a></li>
                <li className='portfolio__component'>
                    <a className='portfolio__link' href='https://github.com/powerHAHA/russian-travel' target="_blank" rel='noreferrer'>
                    <img src={link} className='portfolio__link-img' alt='link' />Адаптивный сайт</a></li>
                <li className='portfolio__component'>
                    <a className='portfolio__link' href='https://github.com/powerHAHA/react-mesto-auth' target="_blank" rel='noreferrer'>
                    <img src={link} className='portfolio__link-img' alt='link' />Одностраничное приложение</a></li>
            </ul>
        </section>
    )
}

export default Portfolio;