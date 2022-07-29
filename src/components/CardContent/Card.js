import React from 'react';

import '../CardContent/Card.scss'

function Card({ title, imgUrl, price, onClickLike, onAddCart, onAddFavorite }) {
  const [addedCart, setAddedCart] = React.useState(false);
  const [favoriteCart, setFavoriteCart] = React.useState(false);


  const clickAdded = () => {
    onAddCart({title, imgUrl, price});
    setAddedCart(!addedCart);
  }

  const clickFavorite = () => {
    onAddFavorite({title, imgUrl, price});
    setFavoriteCart(!favoriteCart)
  }

    return(
        <div className="content__card">
        <div className="content__card-favorite">
        <img className="content__card-img" src={favoriteCart ? "/img/icon/activeLike.svg" : "/img/icon/Like.svg"} alt="like btn" onClick={clickFavorite} />
        </div>
        <img src={imgUrl} alt="Corn image" />
        <p>{title}</p>
        <div className="content__card-bottom">
          <div className="content__card-price">
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          <button onClick={clickAdded} className="content__card-btn">{addedCart ? 'Добавлено' : 'В корзину'}</button>
        </div>
      </div>
    )
}

export default Card;