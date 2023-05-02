import React from 'react'
import HomeBanner from "../assets/Images/Home Images/HomeBanner.png";

const Banner = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={HomeBanner} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner