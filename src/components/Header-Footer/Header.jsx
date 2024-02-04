import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ButtonBorder from '../../UI/Buttons/ButtonBorder/ButtonBorder'
import Close from '../../assets/svg/Close.svg'
import HeaderPhoneGray from '../../assets/svg/HeaderPhoneGray.svg'
import HeaderPhoneWhite from '../../assets/svg/HeaderPhoneWhite.svg'
import MainCart from '../../assets/svg/MainCart.svg'
import MainLogo from '../../assets/svg/MainLogo.svg'

export const mainList = [
	{ id: 1, list: 'Главная', link: '/' },
	{ id: 2, list: 'Магазин', link: '/shop' },
	{ id: 3, list: 'О бренде', link: '/about' },
	{ id: 4, list: 'Контакты', link: '/contact' },
]

const Header = () => {
	const location = useLocation()
	const [isHovered, setHovered] = useState(false)
	const [isPopupOpen, setPopupOpen] = useState(false)
	const [isFormSubmitted, setFormSubmitted] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	})

	// Новое состояние для отслеживания заполненности полей
	const [inputFilled, setInputFilled] = useState({
		name: true,
		email: true,
		phone: true,
	})

	// Новое состояние для отслеживания, нужно ли отображать сообщение
	const [showErrorMessage, setShowErrorMessage] = useState(false)
	const [isSticky, setIsSticky] = useState(false)

	const handleHover = () => {
		setHovered(!isHovered)
	}

	const handlePopupToggle = () => {
		setPopupOpen(!isPopupOpen)
		setFormSubmitted(false)
		setShowErrorMessage(false)
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))

		// Помечаем поле как заполненное, если введено хотя бы один символ
		setInputFilled(prevFilled => ({
			...prevFilled,
			[name]: value.trim() !== '',
		}))
	}

	const handleFormSubmit = e => {
		e.preventDefault()

		// Проверка на заполненность всех полей
		const allFieldsFilled = Object.values(formData).every(
			value => value.trim() !== ''
		)

		if (!allFieldsFilled) {
			// Если хотя бы одно поле не заполнено, показываем сообщение
			setShowErrorMessage(true)
			return
		}

		console.log('Форма отправлена:', formData)
		setFormSubmitted(true)
	}

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			setIsSticky(offset > 0);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className={`header_back ${isSticky ? 'sticky' : ''}`}>
			<div className={`container header`}>
				<Link to='/'>
					<img src={MainLogo} alt='logo' />
				</Link>
				<div className='header__list'>
					{mainList.map(({ id, list, link }) => (
						<Link
							to={link}
							key={id}
							className={location.pathname === link ? 'active' : ''}
						>
							{list}
						</Link>
					))}
				</div>

				<div className='header__contact'>
					<button
						onMouseEnter={handleHover}
						onMouseLeave={handleHover}
						onClick={handlePopupToggle}
					>
						<img
							src={isHovered ? HeaderPhoneWhite : HeaderPhoneGray}
							alt='phone'
						/>
					</button>
					<p>+7 (495) 823-54-12</p>
				</div>

				<div className={`popup-bg ${isPopupOpen ? 'active' : ''}`}>
					{isPopupOpen && (
						<div className='popup'>
							<div className='popup__close' onClick={handlePopupToggle}>
								<img src={Close} alt='Close' />
							</div>
							{isFormSubmitted ? (
								<h2 style={{ fontSize: '25px' }}>
									Отлично! Мы скоро вам перезвоним.
								</h2>
							) : (
								<>
									<h2 style={{ fontSize: '25px' }}>Заказать обратный звонок</h2>
									<form onSubmit={handleFormSubmit}>
										<input
											type='text'
											placeholder='Имя'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
										/>
										{showErrorMessage && !inputFilled.name && (
											<p style={{ color: 'red' }}>Поле не должно быть пустым</p>
										)}
										<input
											type='email'
											placeholder='E-mail'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
										/>
										{showErrorMessage && !inputFilled.email && (
											<p style={{ color: 'red' }}>Поле не должно быть пустым</p>
										)}
										<input
											type='tel'
											placeholder='Телефон'
											name='phone'
											value={formData.phone}
											onChange={handleInputChange}
										/>
										{showErrorMessage && !inputFilled.phone && (
											<p style={{ color: 'red' }}>Поле не должно быть пустым</p>
										)}
										<ButtonBorder>
											{isFormSubmitted ? 'Заказать звонок' : 'Заказать звонок'}
										</ButtonBorder>
									</form>
								</>
							)}
						</div>
					)}
				</div>

				<button className='header__cart'>
					<Link onClick={handleClick} to='cart'>
						<img src={MainCart} alt='cart' />
					</Link>
				</button>
			</div>
		</div>
	)
}

export default Header
