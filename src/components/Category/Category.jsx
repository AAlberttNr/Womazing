import React, { useState } from 'react'
import ArrowRight from '../../assets/svg/ArrowRight.svg'
import NewProduct1 from '../../assets/img/NewProduct1.png'
import NewProduct2 from '../../assets/img/NewProduct2.png'
import NewProduct3 from '../../assets/img/NewProduct3.png'
import { Link, useNavigate } from 'react-router-dom'

const categories = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки']

const CardDB = [
	{
		id: 1,
		img: NewProduct1,
		name: 'Футболка USA',
		Eprice: '229',
		price: '129',
		category: 'Все',
	},
	{
		id: 2,
		img: NewProduct2,
		name: 'Купальник Glow',
		price: '129',
		category: 'Все',
	},
	{
		id: 3,
		img: NewProduct3,
		name: 'Свитшот Sweet Shot',
		price: '129',
		category: 'Свитшоты',
	},
	{
		id: 4,
		img: NewProduct1,
		name: 'Свитшот',
		price: '99',
		category: 'Свитшоты',
	},
	{
		id: 5,
		img: NewProduct2,
		name: 'Кардиганы',
		price: '149',
		category: 'Кардиганы',
	},
	{
		id: 6,
		img: NewProduct3,
		name: 'Новый товар 3',
		price: '79',
		category: 'Толстовки',
	},
	{
		id: 7,
		img: NewProduct1,
		name: 'Новый товар 4',
		price: '119',
		category: 'Толстовки',
	},
	{
		id: 8,
		img: NewProduct2,
		name: 'Новый товар 5',
		price: '89',
		category: 'Толстовки',
	},
	{
		id: 9,
		img: NewProduct3,
		name: 'Новый товар 6',
		price: '169',
		category: 'Толстовки',
	},
	{
		id: 10,
		img: NewProduct1,
		name: 'Новый товар 7',
		price: '109',
		category: 'Толстовки',
	},
	{
		id: 11,
		img: NewProduct2,
		name: 'Новый товар 8',
		price: '139',
		category: 'Толстовки',
	},
	{
		id: 12,
		img: NewProduct3,
		name: 'Новый товар 9',
		price: '199',
		category: 'Толстовки',
	},
]

const itemsPerPage = 9

const Category = () => {
	const [activeCategory, setActiveCategory] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)

	const navigate = useNavigate()

	const handleCategoryClick = index => {
		setActiveCategory(index)
		setCurrentPage(1)
	}

	const handleArrowClick = id => {
		navigate(`../product/${id}`)
	}

	const totalCards = CardDB.length
	const totalPages = Math.ceil(totalCards / itemsPerPage)
	const indexOfLastCard = currentPage * itemsPerPage
	const indexOfFirstCard = indexOfLastCard - itemsPerPage

	let filteredCards
	if (activeCategory === 0) {
		filteredCards = CardDB
	} else {
		const selectedCategory = categories[activeCategory]
		filteredCards = CardDB.filter(card => card.category === selectedCategory)
	}

	const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard)

	const handleSquareClick = page => {
		setCurrentPage(page)
	}

	return (
		<div>
			<div className='category'>
				{categories.map((category, index) => (
					<div
						key={index}
						className={`categoryItem ${
							index === activeCategory ? 'active' : ''
						}`}
						onClick={() => handleCategoryClick(index)}
					>
						<span>{category}</span>
					</div>
				))}
			</div>
			<div>
				<div className='category__main'>
					<div className='category__main__show'>
						<p>
							Показано: {currentCards.length} из {totalCards} товаров
						</p>
					</div>

					<div className='category__main__cards'>
						{currentCards.map(e => (
							<div key={e.id} className='new__cards_card'>
								<div className='image-container'>
									<img src={e.img} alt='Card' className='hover-effect' />
									<Link
										to={`../product/${e.id}`}
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

					<div className='category__main__show'>
						<p>
							Показано: {currentCards.length} из {totalCards} товаров
						</p>
					</div>

					{totalPages > 1 && (
						<div className='category__main__square'>
							{[...Array(totalPages)].map((_, page) => (
								<div
									key={page}
									className={`square ${
										currentPage === page + 1 ? 'active' : ''
									}`}
									onClick={() => handleSquareClick(page + 1)}
								>
									{page + 1}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Category
