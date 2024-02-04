import Title from '../../UI/Title/Title'
import Svg1 from '../../assets/svg/ImportantSvg/Svg1.svg'
import Svg2 from '../../assets/svg/ImportantSvg/Svg2.svg'
import Svg3 from '../../assets/svg/ImportantSvg/Svg3.svg'

const ImportantDB = [
	{
		img: Svg1,
		name: 'Качество',
		options:
			'Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества',
	},
	{
		img: Svg2,
		name: 'Скорость',
		options:
			'Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах',
		size: 61,
	},
	{
		img: Svg3,
		name: 'Ответственность',
		options:
			'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing',
	},
]
const Important = () => {
	return (
		<section>
			<div className='container'>
				<Title>Что для нас важно</Title>
				<div className='important'>
					{ImportantDB.map(e => {
						return (
							<div className='important__card'>
								<img width={e.size} src={e.img} alt='svg' />
								<div>
									<h4>{e.name}</h4>
									<p>{e.options}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Important
