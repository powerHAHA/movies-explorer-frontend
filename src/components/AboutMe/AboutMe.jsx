import React from 'react';
import './AboutMe.css';
import photo from '../../images/studentPhoto.jpg';

export const AboutMe = () => {
	return (

		<section className="about-me" id='student'>
			<div className='section section_size_s'>
				<h2 className='section__title'>Студент</h2>
				<div className='about-me__container'>
					<div className='about-me__container-description'>
						<h3 className='about-me__title'>Денис</h3>
						<p className='about-me__subtitle'>Фронтенд-разработчик, 21 год</p>
						<p className='about-me__description'>Я родился и живу в Москве, окончил МАИ по специальности "Информационная безопасность", но вскоре понял, что это не то чем я хочу заниматься и решил кодить, поступив на курс по веб-разработке от Яндекс.Практикум</p>
						<a href="https://github.com/powerHAHA" target='blank' className='about-me__link'>Github</a>
					</div>
					<img src={photo} alt="Фото студента" className='about-me__photo' />
				</div>
				<h4 className='portfolio__title'>Портфолио</h4>
				<ul className='portfolio'>
					<li className='portfolio__item'>
						<a href="https://github.com/powerHAHA/how-to-learn" target='blank' className='portfolio__link'>Статичный сайт
							<span className='portfolio__icon'>&#8599;</span>
						</a>
					</li>
					<li className='portfolio__item'>
						<a href="https://github.com/powerHAHA/russian-travel" target='blank' className='portfolio__link'>Адаптивный сайт
							<span className='portfolio__icon'>&#8599;</span>
						</a>
					</li>
					<li className='portfolio__item'>
						<a href="https://github.com/powerHAHA/react-mesto-auth" target='blank' className='portfolio__link'>Одностраничное приложение
							<span className='portfolio__icon'>&#8599;</span>
						</a>
					</li>
				</ul>
			</div>
		</section>

	)
}