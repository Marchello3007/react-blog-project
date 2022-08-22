import React from 'react'
import './HeaderMenu.scss'

type Props = {}

const HeaderMenu = (props: Props) => {
    return (
        <>
            <div className="header-orange-container">
                <div className="header-orange">
                    <ul className="header-main-menu">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Projects</a>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Team</a>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contacts</a>
                        </li>
                    </ul>
                    <div className="header-search"></div>
                </div>
            </div>
        </>
    )
}

export default HeaderMenu
