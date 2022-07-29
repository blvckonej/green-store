import '../HeaderContent/Header.scss'

function Header(props) {
    return (
        <header className="header">
            <div className="header__left">
            <img src="/img/icon/logo.svg" alt="Logo" width={50} height={50}/>
            <div className="header__info">
                <h3>Food Store</h3>
                <p>Давай, похаваем</p>
            </div>
            </div>
            <ul className="header__right">
            <li>
                <img onClick={props.onClickCart} width={25} height={25} src="/img/icon/cart.svg"/>
                <span>1200 rub</span>
            </li>
            <li>
                <img width={25} height={25} src="/img/icon/user.svg"/>
            </li>
            <li>
                <img width={25} height={25} src="/img/icon/like.svg"/> 
            </li>
            </ul>
      </header>
    )
}

export default Header;