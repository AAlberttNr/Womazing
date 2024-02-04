import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from '../components/Header-Footer/Footer'
import Header from '../components/Header-Footer/Header'
import AboutPage from '../pages/AboutPage/AboutPage'
import CartPage from '../pages/CartPage/CartPage'
import MainPage from '../pages/MainPage/MainPage'
import ShopPage from '../pages/ShopPage/ShopPage'
import ProductPage from '../pages/productPage/ProductPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import ConfirmPage from '../pages/ConfirmPage/ConfirmPage'
import CompletePage from '../pages/CompletePage/CompletePage'

const Layout = () => (
	<div>
		<Header />
		<Outlet />
		<Footer />
	</div>
)

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<Layout />}>
			<Route index element={<MainPage />} />
			<Route path='shop' element={<ShopPage />} />
			<Route path='about' element={<AboutPage />} />
			<Route path='contact' element={<ContactPage />} />
			<Route path='product/:productId' element={<ProductPage />} />
			<Route path='cart' element={<CartPage />}/>
			<Route path='confirm' element={<ConfirmPage />} />
			<Route path='complete' element={<CompletePage />} />
		</Route>
	</Routes>
)

export default AppRoutes
