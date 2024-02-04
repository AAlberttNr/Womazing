import React, { useState, useEffect } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ButtonGray from '../../UI/Buttons/ButtonGray/ButtonGray'
import ArrowRight from '../../assets/svg/ArrowRight.svg'
import NewProduct1 from '../../assets/img/NewProduct1.png'
import NewProduct2 from '../../assets/img/NewProduct2.png'
import NewProduct3 from '../../assets/img/NewProduct3.png'
import { addToCart } from '../../store/actions.js'
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


const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = useState('');
  const [activeColor, setActiveColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = CardDB.find((item) => item.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    if (product) {
      console.log('Product data:', product);
      dispatch(
        addToCart({
          id: productId,
          name: product.name,
          img: product.img,
          price: product.price,
          size: activeSize,
          color: activeColor,
          quantity: quantity,
        })
      );
    }
  };

  const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

  const breadcrumbs = [
    <Link to="/">Главная</Link>,
    <Typography key="3" color="text.primary">
      {product ? product.name : ''}
    </Typography>,
  ];

  const remainingProducts = CardDB.filter((item) => item.id !== parseInt(productId));
  const relatedProducts = remainingProducts.slice(0, 3);

  const handleArrowClick = (id) => {
    navigate(`../product/${id}`);
  };

  return (
    <div className="container product">
      <div className="product__title">
        <h1>{product ? product.name : ''}</h1>
        <Breadcrumbs separator="—" aria-label="breadcrumb" className="custom-breadcrumbs">
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <div className="product__main">
        {product ? (
          <>
            <div>
              <img src={product.img} alt="img" />
            </div>
            <div className="product__prod">
              <div className="product__main_price">
                <p>${product.price}</p>
                {product.Eprice && (
                  <p style={{ textDecoration: 'line-through' }}>${product.Eprice}</p>
                )}
              </div>
              <div className="product__main_size">
                <p>Выберите размер</p>
                <div className="product__main_size_square">
                  {['S', 'M', 'L', 'XS', 'XL'].map((size) => (
                    <button
                      key={size}
                      className={activeSize === size ? 'active' : ''}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="product__main_color">
                <p>Выберите цвет</p>
                <div className="product__main_color_circle">
                  {[
                    { color: '#927876', id: 1 },
                    { color: '#d4d4d4', id: 2 },
                    { color: '#fd9696', id: 3 },
                    { color: '#fdc796', id: 4 },
                  ].map((item) => (
                    <button
                      key={item.id}
                      style={{ background: item.color }}
                      className={activeColor === item.color ? 'active' : ''}
                      onClick={() => handleColorClick(item.color)}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="product__button">
                <input
                  type="number"
                  defaultValue={1}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <div onClick={handleAddToCart}>
                  <ButtonGray>Добавить в корзину</ButtonGray>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Продукт не найден</p>
        )}
      </div>
      <div className="product__link">
        <h2>Связанные товары</h2>
        <div className="product__link_cards">
          {relatedProducts.map((e) => (
            <div onClick={handleClick} key={e.id} className="new__cards_card">
              <div className="image-container">
                <img src={e.img} alt="Card" className="hover-effect" />
                <Link
                  to={`../product/${e.id}`}
                  className="overlay"
                  onClick={() => handleArrowClick(e.id)}
                >
                  <img src={ArrowRight} alt="Arrow" />
                </Link>
              </div>
              <h4 style={{ marginTop: '24px' }}>{e.name}</h4>
              <div>
                {e.Eprice && (
                  <p style={{ textDecoration: 'line-through' }}>{e.Eprice}</p>
                )}
                <p>{e.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;