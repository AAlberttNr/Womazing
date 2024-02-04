import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import ButtonBorder from '../../UI/Buttons/ButtonBorder/ButtonBorder'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useSelector } from 'react-redux'

const breadcrumbs = [
	<Link to='/'>Главный</Link>,
	<Typography key='3' color='text.primary'>
		Оформление заказа
	</Typography>,
]

const ConfirmPage = () => {
	const [checked, setChecked] = useState(false)
	const totalAmount = useSelector(state => state.totalAmount)

	// Form 1
	const [formData1, setFormData1] = useState({
		name: '',
		email: '',
		phone: '',
	})
	const [showErrorMessage1, setShowErrorMessage1] = useState(false)

	// Form 2
	const [formData2, setFormData2] = useState({
		state: '',
		city: '',
		street: '',
		home: '',
		room: '',
	})

	const handleChange1 = event => {
		setFormData1({
			...formData1,
			[event.target.name]: event.target.value,
		})
	}

	const handleChange2 = event => {
		setFormData2({
			...formData2,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()

		const form1FieldsFilled = Object.values(formData1).every(
			value => value.trim() !== ''
		)

		const form2FieldsFilled = Object.values(formData2).every(
			value => value.trim() !== ''
		)

		if (form1FieldsFilled && form2FieldsFilled) {
			console.log('Form 1 Data:', formData1)
			console.log('Form 2 Data:', formData2)

			console.log('Order placed!')
		} else {
			setShowErrorMessage1(true)
		}
	}

	const form1FieldsFilled = Object.values(formData1).every(
		value => value.trim() !== ''
	)
	const form2FieldsFilled = Object.values(formData2).every(
		value => value.trim() !== ''
	)

	const handleChange = event => {
		setChecked(event.target.checked)
	}

	return (
		<section className='container confirm'>
			<div className='about__title'>
				<h1>Оформление заказа</h1>
				<Breadcrumbs
					separator='—'
					aria-label='breadcrumb'
					className='custom-breadcrumbs'
				>
					{breadcrumbs}
				</Breadcrumbs>
			</div>

			<div className='confirm__main'>
				{/* Form 1 */}
				<div className='confirm__main_card'>
					<form onSubmit={handleSubmit}>
						<h3>Данные покупателя</h3>
						<input
							type='text'
							placeholder='Имя'
							name='name'
							value={formData1.name}
							onChange={handleChange1}
						/>
						<input
							type='email'
							placeholder='E-mail'
							name='email'
							value={formData1.email}
							onChange={handleChange1}
						/>
						<input
							type='tel'
							placeholder='Телефон'
							name='phone'
							value={formData1.phone}
							onChange={handleChange1}
						/>

						{showErrorMessage1 &&
							!Object.values(formData1).every(value => value.trim() !== '') && (
								<p className='contact__p' style={{ color: 'red' }}>
									Поля не должны быть пустыми
								</p>
							)}
					</form>
					<div className='confirm_order'>
						<h3>Ваш заказ</h3>
						<div className='confirm_order_main'>
							<div>
								<div>Товар</div>
								<div>Всего</div>
							</div>
							<div>
								<div>Футолка Usa</div>
								<div>${totalAmount}</div>
							</div>
							<div>
								<div>Подытог</div>
								<div>${totalAmount}</div>
							</div>
							<div>
								<div>Итого</div>
								<div>${totalAmount}</div>
							</div>
						</div>
					</div>
				</div>

				{/* Form 2 */}
				<div className='confirm__main_card'>
					<form onSubmit={handleSubmit}>
						<h3>Адрес получателя</h3>
						<input
							type='text'
							placeholder='Страна'
							name='state'
							value={formData2.state}
							onChange={handleChange2}
						/>
						<input
							type='text'
							placeholder='Город'
							name='city'
							value={formData2.city}
							onChange={handleChange2}
						/>
						<input
							type='text'
							placeholder='Улица'
							name='street'
							value={formData2.street}
							onChange={handleChange2}
						/>
						<input
							type='text'
							placeholder='Дом'
							name='home'
							value={formData2.home}
							onChange={handleChange2}
						/>
						<input
							type='text'
							placeholder='Квартира'
							name='room'
							value={formData2.room}
							onChange={handleChange2}
						/>
					</form>
					<div className='confirm_order2'>
						<h3>Cпособы оплаты</h3>
						<div>
							<FormControlLabel
								control={<Checkbox checked={checked} onChange={handleChange} />}
								label='Оплата наличными'
							/>
						</div>
						{form1FieldsFilled && form2FieldsFilled && (
							<Link to='../complete'>
								<ButtonBorder>Разместить заказ</ButtonBorder>
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ConfirmPage
