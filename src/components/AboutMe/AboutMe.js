import React from 'react';
import './AboutMe.css';

import photo from '../../images/studentPhoto.jpg';

function AboutMe(props) {
    return (
        <section className='aboutMe'>
            <h2 className='aboutMe__tittle'>Студент</h2>
            <div className='aboutMe__line'></div>
            <div className='aboutMe__components'>
                <div className='aboutMe__info'>
                    <h3 className='aboutMe__name'>Денис</h3>
                    <p className='aboutMe__description'>Фронтенд-разработчик, 21 год</p>
                    <p className='aboutMe__text'>Я родился и живу в Москве, окончил МАИ по специальности "Информационная безопасность", но вскоре понял, что это не то чем я хочу заниматься и решил кодить, поступив на курс по веб-разработке от Яндекс.Практикум</p>
                    <a className='aboutMe__git' href='https://github.com/powerHAHA' target="_blank" rel="noreferrer" >Github</a>
                </div>
                <img className='aboutMe__photo' src={photo} alt='Фотографиz vtyz' />
            </div>
        </section>)
}

export default AboutMe;