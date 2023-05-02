import React from 'react'
import CommitteeBanner from "../assets/Images/CommitteePage/BannerImage/CommitteeBannerImage.png";

const Banner = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={CommitteeBanner} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner