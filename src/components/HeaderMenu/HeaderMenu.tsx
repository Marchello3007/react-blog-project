import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderMenu.scss'

type Props = {}

const HeaderMenu = (props: Props) => {
    return (
        <>
            <div className="header-orange-container">
                <div className="header-orange">
                    <ul className="header-main-menu">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'activeMenuItem' : undefined
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="about"
                                className={({ isActive }) =>
                                    isActive ? 'activeMenuItem' : undefined
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="services"
                                className={({ isActive }) =>
                                    isActive ? 'activeMenuItem' : undefined
                                }
                            >
                                Services
                            </NavLink>
                            <ul className="sub-menu-li">
                                <li>Hoppers</li>
                                <li>Industrial Ductwork</li>
                                <li>Fan Housing</li>
                                <li>Structural Steel Buildings</li>
                                <li>Platforms, Stairways</li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="projects"
                                className={({ isActive }) =>
                                    isActive ? 'activeMenuItem' : undefined
                                }
                            >
                                Projects
                            </NavLink>
                            <ul className="sub-menu-li">
                                <li>Heather Ln, Glasgow</li>
                                <li>Central Str, New York</li>
                                <li>Main Avn, London</li>
                                <li>Hauptstrasse, Berlin</li>
                                <li>Green Str, Boston</li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="team"
                                className={({ isActive }) =>
                                    isActive ? 'activeMenuItem' : undefined
                                }
                            >
                                Team
                            </NavLink>
                            <ul className="sub-menu-li">
                                <li>Jim Harris</li>
                                <li>Tom Allen</li>
                                <li>Jeremy Scott</li>
                                <li>Bred Cooper</li>
                                <li>Jake Bill</li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="blog"
                                className={({ isActive }) =>
                                    isActive ? 'activeMenuItem' : undefined
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="contacts"
                                className={({ isActive }) =>
                                    isActive ? 'activeMenuItem' : undefined
                                }
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                    <div className="header-search"></div>
                </div>
            </div>
        </>
    )
}

export default HeaderMenu
