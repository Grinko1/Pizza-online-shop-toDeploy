import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import pizzaLogo from '../assets/img/pizza-logo.svg';
import Button from './Button';

const Header = () => {
  const {totalCount, totalPrice} = useSelector(state => state.cart)

    return (
        <div className="header">
        <div className="container">
          <Link to='/'>
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          </Link>
          <Link to='/cart'>
        <Button totalPrice={totalPrice} totalCount={totalCount}/>
        </Link>
        </div>
      </div>
    );
};

export default Header;