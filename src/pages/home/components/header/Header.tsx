import { useEffect, useState } from 'react';
import './header.scss'
import { Person, Search, FavoriteBorder, ShoppingCartOutlined, InfoOutlined } from '@mui/icons-material';
import SubMenu from './subMenu/SubMenu';


export default function Header() {

    const [menuStatus, setMenuStatus] = useState(0)

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
                            <li className={menuStatus == 1 ? 'navlink active' : 'navlink'} onClick={() => { menuStatus == 1 ? setMenuStatus(0) : setMenuStatus(1) }}>
                                <span className='navlink__frame'></span>
                                <button>Man</button>
                            </li>
                            <li className={menuStatus == 2 ? 'navlink active' : 'navlink'} onClick={() => { menuStatus == 2 ? setMenuStatus(0) : setMenuStatus(2) }}>
                                <span className='navlink__frame'></span>
                                <button>Woman</button>
                            </li>
                            <li className={menuStatus == 3 ? 'navlink active' : 'navlink'} onClick={() => { menuStatus == 3 ? setMenuStatus(0) : setMenuStatus(3) }}>
                                <span className='navlink__frame'></span>
                                <button>Kids</button>
                            </li>
                            <li className={menuStatus == 4 ? 'navlink active' : 'navlink'} onClick={() => { menuStatus == 4 ? setMenuStatus(0) : setMenuStatus(4) }}>
                                <span className='navlink__frame'></span>
                                <button>Accessories</button>
                            </li>
                        </ul>
                        <section className={menuStatus != 0 ? 'subMenu__container active' : 'subMenu__container'}>
                            <SubMenu menuStatus={menuStatus}/>
                        </section>
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
