import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Category from '../../components/Category/Category'

const ShopPage = () => {
	const breadcrumbs = [
		<Link to='/'>Главный</Link>,
		<Typography key='3' color='text.primary'>
			Магазин
		</Typography>,
	]

	return (
		<section>
			<div className="container">
			<div className='about__title'>
					<h1>Магазин</h1>
					<Breadcrumbs
						separator='—'
						aria-label='breadcrumb'
						className='custom-breadcrumbs'
					>
						{breadcrumbs}
					</Breadcrumbs>
				</div>
				<Category />
			</div>
		</section>
	)
}

export default ShopPage