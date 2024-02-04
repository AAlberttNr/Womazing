import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLogo from '../../assets/svg/MainLogo.svg';
import footer_visa from '../../assets/img/footer-visa.png';
import twitter from '../../assets/svg/twitter.svg';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import { mainList } from './Header';

const Footer = () => {
  const location = useLocation();

  return (
    <div className='footer__bg'>
      <div className='container footer'>
        <Link to='/'>
          <img src={MainLogo} alt='logo' />
        </Link>
        <div className='footer__list'>
          {mainList.map(({ id, list, link }) => (
            <Link to={link} key={id} className={location.pathname === link ? 'active' : ''}>
              {list}
            </Link>
          ))}
        </div>
        <div className='footer__contact'>
          <p>+7 (495) 823-54-12</p>
          <p>hello@womazing.com</p>
        </div>
      </div>
      <div className='container footer__bottom'>
        <p>
          © Все права защищены <br /> Политика конфиденциальности <br />
          Публичная оферта
        </p>
        <ol>
          <li>Пальто</li>
          <li>Свитшоты</li>
          <li>Кардиганы</li>
          <li>Толстовки</li>
        </ol>
        <div className='footer__bottom_social'>
          <div>
            <img src={instagram} alt='social' />
            <img src={facebook} alt='social' />
            <img src={twitter} alt='social' />
          </div>
          <img src={footer_visa} alt='social' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
