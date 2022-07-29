import React from 'react';
import '../CartSlider/CartSlider.scss'

function CartSlider({ onCloseCart, onRemove, products = []}) {
    return(
        <div className="cart__slider">
        <div className="cart__slider-block">
          <h2>Корзина <img onClick={onCloseCart} className="removeBtn" src="img/icon/close.svg" alt="Remove btn" /></h2>

            {
              products.length > 0 ? (
                <div>
                  <div className="cart__slider-wrapp">
                  {
                      products.map(obj => (
                        <div key={obj.id} className="cart__slider-item">
                          <img src={obj.imgUrl} alt="almonds" width={110} height={118}/>
                          <div className="descr">
                            <p>{obj.title}</p>
                            <b>{obj.price}</b>
                          </div>
                          <img onClick={() => onRemove(obj.id)} className="removeBtn" src="img/icon/close.svg" alt="Remove btn" />
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
                      </ul>
                    <button className="cart-item-btn">Оформить заказ</button>
                    </div>
                  </div>
              ) : (
                <div className="cart__slider-empty_block">
                  <h2 className="cart__slider-empty">Корзина пустая</h2>
                  <button onClick={onCloseCart} className="cart__slider-empty_btn">Вернуться назад</button>
                </div>
              )
            }
        </div>
      </div>
    )
}

export default CartSlider;