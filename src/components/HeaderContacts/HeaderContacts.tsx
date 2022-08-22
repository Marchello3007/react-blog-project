import React from 'react'
import './HeaderContacts.scss'

type Props = {}

const HeaderContacts = (props: Props) => {
    return (
        <>
            <div className="header-white-container">
                <div className="header-white">
                    <div className="header-logo">
                        <a href="">
                            <img src="./images/logo-1.png" alt="" />
                        </a>
                        <p>Welding Services</p>
                    </div>
                    <div className="header-time">
                        <img src="./images/time.jpg" alt="" />
                        <div className="header-time-text">
                            <div>Mon – Fri: 10AM – 7PM;</div>
                            <div>Sat – Sun: 10AM – 3PM</div>
                        </div>
                    </div>
                    <div className="header-address">
                        <img src="./images/map.jpg" alt="" />
                        <div className="header-address-text">
                            <div>4578 Marmora Road,</div>
                            <div>Glasgow</div>
                        </div>
                    </div>
                    <div className="header-tel">
                        <img src="./images/tel.jpg" alt="" />
                        <div className="header-tel-text">
                            <p>Call Us:</p>
                            <p>(719) 445-2808</p>
                        </div>
                    </div>
                    <div className="header-btn-area">
                        <div className="header-btn">
                            <a href="">make an appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderContacts
