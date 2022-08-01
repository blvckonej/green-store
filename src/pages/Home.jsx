import Card from "../components/CardContent/Card";

function Home({products,
    cartProducts, 
    searchValue,
    setSearchValue, 
    onChangeSearchInput, 
    onAddFavorite, 
    onAddCart}) {
      
    return(
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
          {products.filter((item) => item.name.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                id={item.id}
                title={item.name}
                price={item.price}
                imgUrl={item.imgUrl}
                added={cartProducts.some(obj => obj.id == item.id)}
                onClickLike={(obj) => onAddFavorite(obj)}
                onAddCart={(obj) => onAddCart(obj)}
                />
            ))}
        </div>
      </div>
    );
}

export default Home;