import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import AboutGirl1 from '../../assets/img/AboutImg/AboutGirl1.png'
import AboutGirl2 from '../../assets/img/AboutImg/AboutGirl2.png'
import ButtonGray from '../../UI/Buttons/ButtonGray/ButtonGray'

const handleTopClick = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

const AboutPage = () => {
	const breadcrumbs = [
		<Link to='/'>Главный</Link>,
		<Typography key='3' color='text.primary'>
			О бренде
		</Typography>,
	]

	return (
		<section>
			<div className='container about'>
				<div className='about__title'>
					<h1>О бренде</h1>
					<Breadcrumbs
						separator='—'
						aria-label='breadcrumb'
						className='custom-breadcrumbs'
					>
						{breadcrumbs}
					</Breadcrumbs>
				</div>
				<div className='about__main'>
					<div className='about__main_1'>
						<img src={AboutGirl1} alt='girl' />
						<div className=''>
							<h3>Идея и женщина</h3>
							<p>
								Womazing была основана в 2010-ом и стала одной из самых успешных
								компаний нашей страны. Как и многие итальянские фирмы, Womazing
								остаётся семейной компанией, хотя ни один из членов семьи не
								является модельером.
								<br />
								<br />
								Мы действуем по успешной формуле, прибегая к услугам известных
								модельеров для создания своих коллекций. Этот метод был описан
								критиком моды Колином Макдауэллом как форма дизайнерского
								со-творчества, характерная для ряда итальянских prêt-a-porter
								компаний.{' '}
							</p>
						</div>
					</div>
					<div className='about__main_1'>
						<div className=''>
							<h3>Магия в деталях</h3>
							<p>
								Первый магазин Womazing был открыт в маленьком городке на севере
								страны в 2010-ом году. Первая коллекция состояла из двух пальто
								и костюма, которые были копиями парижских моделей.
								<br />
								<br />
								Несмотря на то, что по образованию основательница была
								адвокатом, ее семья всегда была тесно связана с шитьём
								(прабабушка основательницы шила одежду для женщин, а мать
								основала профессиональную школу кроя и шитья). Стремление
								производить одежду для масс несло в себе большие перспективы,
								особенно в то время, когда высокая мода по-прежнему
								доминировала, а рынка качественного prêt-a-porter попросту не
								существовало.{' '}
							</p>
						</div>
						<img src={AboutGirl2} alt='girl' />
					</div>
				</div>
				<div className='about__button'>
					<Link to='../shop' onClick={handleTopClick}>
						<ButtonGray>Перейти в магазин</ButtonGray>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default AboutPage
