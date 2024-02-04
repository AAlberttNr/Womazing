import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Complete_task from '../../assets/img/Complete_task.png'
import ButtonBorder from '../../UI/Buttons/ButtonBorder/ButtonBorder'

const breadcrumbs = [
	<Link to='/'>Главный</Link>,
	<Link to='/confirm'>Оформления заказа</Link>,
	<Typography key='3' color='text.primary'>
		Заказ получен
	</Typography>,
]

const CompletePage = () => {
	return (
		<section>
			<div className='container complete'>
				<div className='about__title'>
					<h1>Заказ получен</h1>
					<Breadcrumbs
						separator='—'
						aria-label='breadcrumb'
						className='custom-breadcrumbs'
					>
						{breadcrumbs}
					</Breadcrumbs>
				</div>
				<div className='complete__main'>
					<div>
						<img src={Complete_task} alt='Complete' />

						<div>
							<h3>Заказ успешно оформлен</h3>
							<p>Мы свяжемся с вами в ближайшее время!</p>
						</div>
					</div>
					<Link to='/'>
						<ButtonBorder>На главную</ButtonBorder>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default CompletePage
