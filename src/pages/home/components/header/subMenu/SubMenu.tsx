import React from 'react'
import './subMenu.scss'

export default function SubMenu(props:{menuStatus:number}) {
    const menuStatus = props.menuStatus
    const subMenu = [{
        nav: 1,
        sub: [
            {
                title: "Coats",
                link: "....."
            }, {
                title: "Hoddies",
                link: "....."
            }, {
                title: "T-shirts",
                link: "....."
            }, {
                title: "Shirts",
                link: "....."
            }, {
                title: "Pants",
                link: "....."
            }, {
                title: "Shorts",
                link: "....."
            }, {
                title: "Accessories",
                link: "....."
            },
        ]
    }, {
        nav: 2,
        sub: [
            {
                title: "Coats",
                link: "....."
            }, {
                title: "Hoddies",
                link: "....."
            }, {
                title: "T-shirts",
                link: "....."
            }, {
                title: "Shirts",
                link: "....."
            }, {
                title: "Pants",
                link: "....."
            }, {
                title: "Skirts",
                link: "....."
            }, {
                title: "Dress",
                link: "....."
            }, {
                title: "Shorts",
                link: "....."
            }, {
                title: "Accessories",
                link: "....."
            },
        ]
    }, {
        nav: 3,
        sub: [
            {
                title: "Coats",
                link: "....."
            }, {
                title: "Hoddies",
                link: "....."
            }, {
                title: "T-shirts",
                link: "....."
            }, {
                title: "Shirts",
                link: "....."
            }, {
                title: "Pants",
                link: "....."
            }, {
                title: "Skirts",
                link: "....."
            }, {
                title: "Dress",
                link: "....."
            }, {
                title: "Set",
                link: "....."
            }, {
                title: "Shorts",
                link: "....."
            }, {
                title: "Accessories",
                link: "....."
            },
        ]
    }, {
        nav: 4,
        sub: [
            {
                title: "Belt",
                link: "....."
            }, {
                title: "Shoes",
                link: "....."
            }, {
                title: "Hat",
                link: "....."
            }, {
                title: "Cap",
                link: "....."
            }, {
                title: "Glasses",
                link: "....."
            }, {
                title: "Face Mask",
                link: "....."
            }
        ]
    }]

    const activeSub = subMenu.find(item => item.nav === menuStatus)
    
    return (
        <ul className='subMenu__list'>
            {
                activeSub?.sub.map((item) => (
                    <li className='item__title'>{item.title}</li>
                ))
            }
        </ul>
    )
}
