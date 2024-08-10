import './header.scss'
import { Person, Search, FavoriteBorder, ShoppingCartOutlined, InfoOutlined } from '@mui/icons-material';


export default function Header() {
    return (
        <header>
            <section className='promo__container'>
                <div className='promo__text'>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit</span>
                </div>
            </section>
            <section className='navbar__container'>
                <div className='navbar__container_left'>
                    <div className='logo__container'>
                        <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/kusaki-4c32a.appspot.com/o/kusaki-logo-black.png?alt=media&token=ef3ce554-3506-47d7-aa0a-ff5bf3bb0b07" alt="" />
                    </div>
                </div>
                <li className='column__line'></li>
                <div className="navbar__container_right">
                    <div className='navlinks__container'>
                        <ul className='navlinks'>
                            <li className='navlink'>
                                <span className='navlink__frame'></span>
                                <button>New Arrived</button>
                            </li>
                            <li className='navlink'>
                                <span className='navlink__frame'></span>
                                <button>Man</button>
                            </li>
                            <li className='navlink'>
                                <span className='navlink__frame'></span>
                                <button>Woman</button>
                            </li>
                            <li className='navlink'>
                                <span className='navlink__frame'></span>
                                <button>Kids</button>
                            </li>
                            <li className='navlink'>
                                <span className='navlink__frame'></span>
                                <button>Accessories</button>
                            </li>
                        </ul>
                    </div>
                    <div className='info__container'>
                        <ul className='info__content'>
                            <li className='info__item'>
                                <button><Search /></button>
                            </li>
                            <li className='info__item'>
                                <button><Person /></button>
                            </li>
                            <li className='info__item'>
                                <button><FavoriteBorder /></button>
                            </li>
                            <li className='info__item'>
                                <button><ShoppingCartOutlined /></button>
                            </li>
                            <li className='info__item'>
                                <button><InfoOutlined /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </header>
    )
}
