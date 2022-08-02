import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderContent/Header";
import CartSlider from "./components/CartSlider/CartSlider";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
  const [openCart, setOpenCart] = React.useState(false)
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cardFavorite, setCardFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://62e194f4e8ad6b66d84c8b13.mockapi.io/products');
      const cartResponse = await axios.get('https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://62e194f4e8ad6b66d84c8b13.mockapi.io/favorites');

      setCartProducts(cartResponse.data)
      setCardFavorite(favoritesResponse.data)
      setProducts(itemsResponse.data)

    }

    fetchData();
  }, []);

  const onAddCart = (obj) => {
    try {
      if (cartProducts.find((item) => Number(item.id) == Number(obj.id))) {
        axios.delete(`https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart/${obj.id}`);
        setCartProducts((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://62e194f4e8ad6b66d84c8b13.mockapi.io/cart', obj);
        setCartProducts((prev) => [...prev, obj]);
      }

    } catch(error) {
      alert('Ошибка')      
    }
  }

  const onAddFavorite = async (obj) => {
    try {
      if (cardFavorite.find((favObj) => favObj.id == obj.id)) {
        axios.delete(`https://62e194f4e8ad6b66d84c8b13.mockapi.io/favorites/${obj.id}`);
        setCardFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://62e194f4e8ad6b66d84c8b13.mockapi.io/favorites', obj)
        setCardFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
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
              cartProducts={cartProducts}
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddCart={onAddCart}/>
            }>
          </Route>

          <Route exact path="/favorites" element={
            <Favorites products={cardFavorite} onAddFavorite={onAddFavorite}/>
          }>
          </Route>
        </Routes>


    </div>
  );
}

export default App;
