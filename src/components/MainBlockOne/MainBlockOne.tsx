import React from 'react'
import './MainBlockOne.scss'

type Props = {}

const MainBlockOne = (props: Props) => {
    return (
        <div>
            <h3 className="main-block-one-h3">Welding Solutionsvcb</h3>
            <p className="main-block-one-p">
                Our strengths in welding are focused around 3 core functions:
                Resistance Welding spot welding, seam welding.
            </p>
            <div className="main-block-one-images">
                <div>
                    <img src="./images/img-11.jpg" alt="" />
                </div>
                <div>
                    <img src="./images/img-11.jpg" alt="" />
                </div>
                <div>
                    <img src="./images/img-11.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainBlockOne
