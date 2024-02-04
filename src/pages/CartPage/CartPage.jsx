import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	removeFromCart,
	setCartItems,
	updateCartItemQuantity,
} from '../../store/actions'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { Link, useNavigate } from 'react-router-dom'
import Close from '../../assets/svg/Close.svg'
import { Input } from '@mui/material'
import ButtonBorder from '../../UI/Buttons/ButtonBorder/ButtonBorder'
import ButtonGray from '../../UI/Buttons/ButtonGray/ButtonGray'

const CartPage = () => {
	const cartItems = useSelector(state => state.cartItems)
	const dispatch = useDispatch()
	const [totalAmount, setTotalAmount] = useState(0)

	const handleRemoveFromCart = productId => {
		dispatch(removeFromCart(productId))
	}

	const handleQuantityChange = (productId, newQuantity) => {
		dispatch(updateCartItemQuantity(productId, newQuantity))
	}

	useEffect(() => {
		const savedCartItems = localStorage.getItem('cartItems')
		console.log('Saved cart items:', savedCartItems)
		if (savedCartItems) {
			dispatch(setCartItems(JSON.parse(savedCartItems)))
		}
	}, [dispatch])

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
		const newTotalAmount = cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
		setTotalAmount(newTotalAmount)
	}, [cartItems])

	useEffect(() => {
		const newTotalAmount = cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
		setTotalAmount(newTotalAmount)

		dispatch({ type: 'SET_TOTAL_AMOUNT', payload: newTotalAmount })
	}, [cartItems, dispatch])

	const breadcrumbs = [
		<Link to='/'>Главный</Link>,
		<Typography key='3' color='text.primary'>
			Корзина
		</Typography>,
	]
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className='container cart'>
			<div className='about__title'>
				<h1>Корзина</h1>
				<Breadcrumbs
					separator='—'
					aria-label='breadcrumb'
					className='custom-breadcrumbs'
				>
					{breadcrumbs}
				</Breadcrumbs>
			</div>
			<div className='cart__main'>
				<div className='cart__main_title'>
					<p>Товар</p>
					<p>Цена</p>
					<p>Количество</p>
					<p>Всего</p>
				</div>
				<hr />
				<div>
					{cartItems.length === 0 ? (
						<div className='cart__empty'>
							<p>Корзина пуста</p>
						</div>
					) : (
						<div className='cart__main_cards'>
							{cartItems.map(item => (
								<div className='cart__main_cards_card' key={item.id}>
									<div
										className='closeButton'
										onClick={() => handleRemoveFromCart(item.id)}
									>
										<img src={Close} alt='Close' />
									</div>
									<div className='productInfo'>
										<img width={136} src={item.img} alt='product' />
										<div className='productName'>{item.name}</div>
									</div>
									<div className='price'>
										<p>${item.price}</p>
									</div>
									<div className='quantity'>
										<input
											type='number'
											value={item.quantity}
											onChange={e =>
												handleQuantityChange(item.id, e.target.value)
											}
										/>
									</div>
									<div className='totalPrice'>
										<p>${item.price * item.quantity}</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<div className='cart__main_under'>
				<div className='cart__main_under_input'>
					<div>
						<Input placeholder='Введите купон' />
						<ButtonBorder>Применить Купон</ButtonBorder>
					</div>
					<ButtonBorder>Обновить корзину</ButtonBorder>
				</div>
				{cartItems.length > 0 && (
					<div className='cart__complete'>
						<p>Подытог: ${totalAmount}</p>
						<div className='cart__complete_final'>
							<div className='cart__complete_final_div'>
								<div>Итого:</div>
								<div>${totalAmount}</div>
							</div>

							<Link onClick={handleClick} to='../confirm'>
								<ButtonGray>Оформить заказ</ButtonGray>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default CartPage
