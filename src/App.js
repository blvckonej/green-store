import React from "react";
import axios from "axios";

import Card from "./components/CardContent/Card";
import Header from "./components/HeaderContent/Header";
import CartSlider from "./components/CartSlider/CartSlider";



function App() {
  const [openCart, setOpenCart] = React.useState(false)
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cardFavorite, setCardFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
      axios.get('https://62e194f4e8ad6b66d84c8b13.mockapi.io/products')
        .then((res) => {
          setProducts(res.data)
        });
        axios.get('https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart')
        .then((res)=> {
          setCartProducts(res.data)
        });
  }, []);

  const onAddCart = (obj) => {
    axios.post('https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart', obj)
    setCartProducts((prev) => [...prev, obj])
    // if (cartProducts.find((item) => item.id === obj.id)) {
    //   axios.delete(`https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart/${obj.id}`)
    //   setCartProducts((prev) => prev.filter(item => item.id !== obj.id))
    // } else {

    // }
  }

  const onAddFavorite = (obj) => {
    axios.post('https://62e194f4e8ad6b66d84c8b13.mockapi.io/favorites', obj)
    cardFavorite((prev) => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart/${id}`)
    setCartProducts((prev) => prev.filter(item => item.id !== id));
  }

  return (
    <div className="wrapper">
      {openCart ? <CartSlider products={cartProducts} onCloseCart={() => setOpenCart(false)} onRemove={onRemoveItem}/> : null}
      <Header
        onClickCart={() => setOpenCart(!openCart)}/>
      <div className="content">
        <div className="content__search-block">
        <h1 className="content__title">{searchValue ? `Поиск: "${searchValue}"` : "Продукты"}</h1>
          <div className="content__search-panel">
          <img src="/img/icon/search.svg" alt="search" />
          {searchValue && (
          <img onClick={() => setSearchValue('')} className="content__clear-search" src="img/icon/close.svg" alt="clear btn" />)}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск" />
          </div>
        </div>
        <div className="content__store">
          {products.filter(item => item.name.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.name}
                price={item.price}
                imgUrl={item.imgUrl}
                onClickLike={(obj) => onAddFavorite(obj)}
                onAddCart={(obj) => onAddCart(obj)}
                />
            ))}
            
        </div>
      </div>
    </div>
  );
}

export default App;
