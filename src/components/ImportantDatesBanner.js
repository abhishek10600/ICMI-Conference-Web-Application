import React from 'react'
import submissionbanner from "../assets/Images/SubmissionPage/submissionbanner.png";

const ImportantDatesBanner = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={submissionbanner} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImportantDatesBanner