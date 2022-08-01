import React from 'react';

import '../CardContent/Card.scss'

function Card({ id, title, imgUrl, price, onClickLike, onAddCart, onAddFavorite, favorited = false, added = false }) {
  const [addedCart, setAddedCart] = React.useState(added);
  const [favoriteCart, setFavoriteCart] = React.useState(favorited);


  const clickAdded = () => {
    onAddCart({id, title, imgUrl, price});
    setAddedCart(!addedCart);
  }

  const clickFavorite = () => {
    onClickLike({id, title, imgUrl, price})
    setFavoriteCart(!favoriteCart)
  }

    return(
      <div className="content__card">
        <div className="content__card-favorite">
       
        <img onClick={clickFavorite} className="content__card-img" src={favoriteCart ? "/img/icon/activeLike.svg" : "/img/icon/Like.svg"} alt="like btn"  />
       
        </div>
        <img src={imgUrl} alt="Corn image" width={325} height={227}/>
        <p>{title}</p>
        <div className="content__card-bottom">
          <div className="content__card-price">
            <span>Цена:</span>
            <b>{price} Р</b>
          </div>
          <button onClick={clickAdded} className="content__card-btn">{addedCart ? 'Добавлено' : 'В корзину'}</button>
        </div>
      </div>
    )
}

export default Card;