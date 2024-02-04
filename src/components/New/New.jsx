import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonBorder from '../../UI/Buttons/ButtonBorder/ButtonBorder'
import Title from '../../UI/Title/Title'
import NewProduct1 from '../../assets/img/NewProduct1.png'
import NewProduct2 from '../../assets/img/NewProduct2.png'
import NewProduct3 from '../../assets/img/NewProduct3.png'
import ArrowRight from '../../assets/svg/ArrowRight.svg'

export const CardDB = [
	{
		id: 1,
		img: NewProduct1,
		name: 'Футболка USA',
		Eprice: '229',
		price: '129',
	},
	{ id: 2, img: NewProduct2, name: 'Купальник Glow', price: '129' },
	{ id: 3, img: NewProduct3, name: 'Свитшот Sweet Shot', price: '129' },
]

const New = () => {
	const navigate = useNavigate()

	const handleArrowClick = productId => {
		navigate(`product/${productId}`)
	}


	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<section id='secondSection'>
			<div className='container new'>
				<Title>Новая коллекция</Title>
				<div className='new__cards'>
					{CardDB.map(e => (
						<div
							onClick={handleClick}
							key={e.id}
							className='new__cards_card'
						>
							<div className='image-container'>
								<img src={e.img} alt='Card' className='hover-effect' />
								<Link
									to={`product/${e.id}`}
									className='overlay'
									onClick={() => handleArrowClick(e.id)}
								>
									<img src={ArrowRight} alt='Arrow' />
								</Link>
							</div>
							<h4 style={{ marginTop: '24px' }}>{e.name}</h4>
							<div>
								{e.Eprice && (
									<p style={{ textDecoration: 'line-through' }}>${e.Eprice}</p>
								)}
								<p>${e.price}</p>
							</div>
						</div>
					))}
				</div>
				<Link className='new__link' to='/shop' onClick={handleClick}>
					<ButtonBorder>Открыть магазин</ButtonBorder>
				</Link>
			</div>
		</section>
	)
}

export default New
