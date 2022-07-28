import React from 'react';

import '../CardContent/Card.scss'

function Card({ title, imgUrl, price, onClickLike, onAddCart }) {
  const [addedCart, setAddedCart] = React.useState(false);

  const clickAdded = () => {
    onAddCart({title, imgUrl, price});
    setAddedCart(!addedCart);
  }

    return(
        <div className="content__card">
        <div className="content__card-favorite">
        <img src="/img/icon/activeLike.svg" alt="Active like" onClick={onClickLike} />
        </div>
        <img src={imgUrl} alt="Corn image" width={287} height={278}/>
        <p>{title}</p>
        <div className="content__card-bottom">
          <div className="content__card-price">
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          <img onClick={clickAdded} src={addedCart ? "/img/icon/addedCart.svg" : "/img/icon/addCart.svg"} alt="add Cart"/>
        </div>
      </div>
    )
}

export default Card;