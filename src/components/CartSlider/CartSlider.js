import React from 'react';
import '../CartSlider/CartSlider.scss'

function CartSlider({ onCloseCart, products = []}) {
    return(
        <div className="cart__slider">
        <div className="cart__slider-block">
          <h2>Корзина <img onClick={onCloseCart} className="removeBtn" src="img/icon/close.svg" alt="Remove btn" /></h2>
          <div className="cart__slider-wrapp">
          {
              products.map(obj => (
                <div className="cart__slider-item">
                  <img src={obj.imgUrl} alt="almonds" width={70} height={78}/>
                  <div className="descr">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img className="removeBtn" src="img/icon/close.svg" alt="Remove btn" />
                </div>
              ))
            }
          </div>
          <div className="cart__item-price">
            <ul>
                <li className="cart__item-block">
                  <span>Итого</span>
                  <div></div>
                  <b>22 009 руб.</b>
                </li>
                <li className="cart__item-block">
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1087 руб</b>
                </li>
              </ul>
            <button className="cart-item-btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    )
}

export default CartSlider;