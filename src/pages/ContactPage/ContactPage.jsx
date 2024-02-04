import Breadcrumbs from '@mui/material/Breadcrumbs'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonBorder from '../../UI/Buttons/ButtonBorder/ButtonBorder'

const breadcrumbs = [
	<Link to='/'>Главный</Link>,
	<Typography key='3' color='text.primary'>
		Контакты
	</Typography>,
]

const contacts = [
	{
		id: 1,
		name: 'Телефон',
		contact: '+7 (495) 823-54-12',
	},
	{
		id: 2,
		name: 'E-mail',
		contact: 'info@sitename.com',
	},
	{
		id: 3,
		name: 'Адрес',
		contact: 'г. Москва, 3-я улица Строителей, 25',
	},
]

const ContactPage = () => {
	const [isFormSubmitted, setFormSubmitted] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const [inputFilled, setInputFilled] = useState({
		name: false,
		email: false,
		phone: false,
		message: false,
	})

	const [showErrorMessage, setShowErrorMessage] = useState(false)

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))

		setInputFilled(prevFilled => ({
			...prevFilled,
			[name]: value.trim() !== '',
		}))
	}

	const handleFormSubmit = e => {
		e.preventDefault()
		const allFieldsFilled = Object.values(formData).every(
			value => value.trim() !== ''
		)

		if (!allFieldsFilled) {
			setShowErrorMessage(true)
			return
		}

		console.log('Форма отправлена:', formData)
		setFormSubmitted(true)
	}

	return (
		<section className='container contact'>
			<div className='about__title'>
				<h1>Контакты</h1>
				<Breadcrumbs
					separator='—'
					aria-label='breadcrumb'
					className='custom-breadcrumbs'
				>
					{breadcrumbs}
				</Breadcrumbs>
			</div>
			<div className='contact__main'>
				<div className='contact__main_img' />
				<div className='contact__main_contacts'>
					{contacts.map(con => (
						<div key={con.id}>
							<p>{con.name}</p>
							<h3>{con.contact}</h3>
						</div>
					))}
				</div>
				<div className='contact__main_form'>
					{isFormSubmitted ? (
						<h2 style={{ fontSize: '25px' }}>
							Отлично! Мы скоро вам перезвоним.
						</h2>
					) : (
						<>
							<h2 style={{ fontSize: '25px' }}>Напишите нам</h2>
							<form onSubmit={handleFormSubmit}>
								<input
									type='text'
									placeholder='Имя'
									name='name'
									value={formData.name}
									onChange={handleInputChange}
								/>

								<input
									type='email'
									placeholder='E-mail'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
								/>

								<input
									type='tel'
									placeholder='Телефон'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
								/>

								<TextareaAutosize
									placeholder='Сообщение'
									name='message'
									value={formData.message}
									onChange={handleInputChange}
									minRows={3}
									style={{
										width: '100%',
										padding: '10px',
										fontSize: '14px',
										border: '1px solid #ccc',
										borderRadius: '4px',
									}}
								/>

								<ButtonBorder>
									{isFormSubmitted ? 'Отправить' : 'Отправить'}
								</ButtonBorder>
								{showErrorMessage && !inputFilled.message && (
									<p className='contact__p' style={{ color: 'red' }}>
										Поле не должно быть пустым
									</p>
								)}
							</form>
						</>
					)}
				</div>
			</div>
		</section>
	)
}

export default ContactPage
