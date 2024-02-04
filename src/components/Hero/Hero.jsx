import React, { useState } from 'react';
import { Typography } from '@mui/material';
import ButtonGray from '../../UI/Buttons/ButtonGray/ButtonGray';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import ButtonArrow from '../../assets/svg/ArrowDown.svg';
import HeroMain from '../../assets/img/HeroImg1.png';
import HeroShrink1 from '../../assets/img/HeroImg2.png';
import HeroShrink2 from '../../assets/img/HeroImg3.png';

const slides = [
  {
    title: 'Что-то новенькое. Мы заждались тебя.',
    description:
      'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!',
  },
  {
    title: 'Новые поступления в этом сезоне',
    description:
      'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.',
  },
  {
    title: 'Включай новый сезон с WOMAZING',
    description:
      'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров',
  },
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };

  const handleArrowButtonClick = () => {
    scroll.scrollTo(document.getElementById('secondSection').offsetTop, {
      duration: 2000,
      smooth: 'easeInOutQuart',
    });
  };

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section>
      <div className='container hero'>
        <div className='hero__left'>
          <Typography variant='h1'>{slides[slideIndex].title}</Typography>
          <Typography variant='body1'>{slides[slideIndex].description}</Typography>
          <div className='button-container'>
            <button onClick={handleArrowButtonClick} className='button-container_arrow'>
              <img src={ButtonArrow} alt='Arrow' />
            </button>
            <Link to='shop'>
              <ButtonGray onClick={handleTopClick}>Открыть Магазин</ButtonGray>
            </Link>
          </div>
          <div className='squares-container'>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`square ${slideIndex === index ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className='hero__right'>
          <div className='hero__right_bg'>
            <div></div>
          </div>
          <div className='hero__right_main'>
            <div className='hero__right_main_main'>
              <img src={HeroMain} alt='Hero' />
            </div>
            <div className='hero__right_main_shrink'>
              <div className='hero__right_main_shrink_1'>
                <img src={HeroShrink1} alt='shrink' />
              </div>
              <div className='hero__right_main_shrink_2'>
                <img src={HeroShrink2} alt='shrink' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
