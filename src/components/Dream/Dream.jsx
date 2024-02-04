import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Title from '../../UI/Title/Title'
import DreamImg1 from '../../assets/img/DreamImg1.png'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [imageLoaded, setImageLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setImageLoaded(true)
		}
		img.src = DreamImg1
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
	}

	const goToPrevSlide = () => {
		setCurrentSlide(prevSlide => prevSlide - 1)
	}

	const goToNextSlide = () => {
		setCurrentSlide(prevSlide => prevSlide + 1)
	}

	let sliderRef

	useEffect(() => {
		if (imageLoaded) {
			sliderRef && sliderRef.slickGoTo(currentSlide)
		}
	}, [currentSlide, imageLoaded, sliderRef])

	const handleTopClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className='container'>
			<Title>Команда мечты Womazing</Title>
			<div className='dream'>
				<div className='dream__left'>
					<div>
						<IconButton onClick={goToPrevSlide}>
							<ArrowBackIcon />
						</IconButton>
					</div>
					<div className='dream__carousel'>
						{imageLoaded && (
							<Slider ref={ref => (sliderRef = ref)} {...settings}>
								<div>
									<img src={DreamImg1} alt='' />
								</div>
								<div>
									<img src={DreamImg1} alt='' />
								</div>
								<div>
									<img src={DreamImg1} alt='' />
								</div>
							</Slider>
						)}
					</div>
					<div>
						<IconButton onClick={goToNextSlide}>
							<ArrowForwardIcon />
						</IconButton>
					</div>
				</div>
				<div className='dream__right'>
					<h3>Для каждой</h3>
					<p>
						Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
						<br />
						<br />
						Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
						подчеркивают достоинства каждой девушки.
					</p>
					<Link to='about' onClick={handleTopClick}>
						Подробнее о бренде
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Carousel
