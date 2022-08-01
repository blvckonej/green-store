import Card from "../components/CardContent/Card";

function Favorites({products, onAddFavorite}) {

    return(
        <div className="content">
        <div className="content__search-block">
        <h1 className="content__title">Моя любимая хавка</h1>
        </div>
        <div className="content__store">
          {products
              .map((item, index) => (
                <Card
                  key={index}
                  favorited={true}
                  onClickLike={onAddFavorite}
                  {...item}
                  />
              ))}
        </div>
      </div>
    );
}

export default Favorites;