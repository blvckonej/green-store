import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderContent/Header";
import CartSlider from "./components/CartSlider/CartSlider";
import Home from "./pages/Home";



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
      axios.post('https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart', obj);
      setCartProducts((prev) => [...prev, obj]);
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
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="wrapper">
      {openCart ? <CartSlider products={cartProducts} onCloseCart={() => setOpenCart(false)} onRemove={onRemoveItem}/> : null}
      <Header onClickCart={() => setOpenCart(!openCart)}/>

          <Routes>
            <Route exact path="/" element={
              <Home
              products={products} 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddCart={onAddCart}/>
            }>
          
          </Route>
        </Routes>


    </div>
  );
}

export default App;
