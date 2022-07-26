




function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img src="/img/icon/logoNotext.svg" alt="Logo" width={50} height={50}/>
          <div className="header__info">
            <h3>Organic Store</h3>
            <p>Магазин твоей мечты</p>
          </div>
        </div>
        <ul className="header__right">
          <li>
            <img width={25} height={25} src="/img/icon/cart.svg"/>
            <span>1200 rub</span>
          </li>
          <li>
            <img width={25} height={25} src="/img/icon/user.svg"/>
          </li>
        </ul>
      </header>

      <div className="content">
        <h1 className="content__title">Весь товар</h1>

        <div className="content__store">
        <div className="content__card">
          <img src="/img/store-img/almonds.png" alt="Corn image" width={287} height={278}/>
          <p>Fresh Corn</p>
          <div className="content__card-bottom">
            <div className="content__card-price">
              <span>Цена:</span>
              <b>11 200 rub</b>
            </div>
              <button className="content__card-button">
                <img src="/img/icon/addCart.svg" alt="add Cart" width={11} height={11}/>
              </button>
          </div>
        </div>

        <div className="content__card">
          <img src="/img/store-img/capusta.png" alt="Corn image" width={287} height={278}/>
          <p>Fresh Corn</p>
          <div className="content__card-bottom">
            <div className="content__card-price">
              <span>Цена:</span>
              <b>11 200 rub</b>
            </div>
              <button className="content__card-button">
                <img src="/img/icon/addCart.svg" alt="add Cart" width={11} height={11}/>
              </button>
          </div>
        </div>

        <div className="content__card">
          <img src="/img/store-img/cofee.png" alt="Corn image" width={287} height={278}/>
          <p>Fresh Corn</p>
          <div className="content__card-bottom">
            <div className="content__card-price">
              <span>Цена:</span>
              <b>11 200 rub</b>
            </div>
              <button className="content__card-button">
                <img src="/img/icon/addCart.svg" alt="add Cart" width={11} height={11}/>
              </button>
          </div>
        </div>

        <div className="content__card">
          <img src="/img/store-img/pistachio.png" alt="Corn image" width={287} height={278}/>
          <p>Fresh Corn</p>
          <div className="content__card-bottom">
            <div className="content__card-price">
              <span>Цена:</span>
              <b>11 200 rub</b>
            </div>
              <button className="content__card-button">
                <img src="/img/icon/addCart.svg" alt="add Cart" width={11} height={11}/>
              </button>
          </div>
        </div>

        <div className="content__card">
          <img src="/img/store-img/tomat.png" alt="Corn image" width={287} height={278}/>
          <p>Fresh Corn</p>
          <div className="content__card-bottom">
            <div className="content__card-price">
              <span>Цена:</span>
              <b>11 200 rub</b>
            </div>
              <button className="content__card-button">
                <img src="/img/icon/addCart.svg" alt="add Cart" width={11} height={11}/>
              </button>
          </div>
        </div>

        <div className="content__card">
          <img src="/img/store-img/corn.png" alt="Corn image" width={287} height={278}/>
          <p>Fresh Corn</p>
          <div className="content__card-bottom">
            <div className="content__card-price">
              <span>Цена:</span>
              <b>11 200 rub</b>
            </div>
              <button className="content__card-button">
                <img src="/img/icon/addCart.svg" alt="add Cart" width={11} height={11}/>
              </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
