import React from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../../context';

import '../HeaderContent/Header.scss'

function Header(props) {    
    const { cartProducts } = React.useContext(AppContext);
    const totalPrice = cartProducts.reduce((sum, obj) => obj.price + sum, 0);
    return (
        <header className="header">
            <Link to="/">
                <div className="header__left">
                    <img src="/img/icon/logo.svg" alt="Logo" width={50} height={50}/>
                    <div className="header__info">
                        <h3>Food Store</h3>
                        <p>Давай, похаваем</p>
                    </div>
                </div>
            </Link>
            <ul className="header__right">
            <li>
                <img onClick={props.onClickCart} width={25} height={25} src="/img/icon/cart.svg"/>
                <span>{totalPrice} rub</span>
            </li>
            <li>
                <img width={25} height={25} src="/img/icon/user.svg"/>
            </li>
            <li>
                <Link to="/favorites">
                    <img width={25} height={25} src="/img/icon/like.svg"/>
                </Link> 
            </li>
            </ul>
      </header>
    )
}

export default Header;