import React from 'react'
import udayanbaruah from "../assets/Images/CommitteePage/udayanbaruah.jpg";
import palashghoshal from "../assets/Images/CommitteePage/palashghoshal.jpg";

const OrganizingChairs = () => {
    return (
        <div className="organizing-chairs-div py-4">
            <div className="container">
                <h1 className="py-4 text-center heading-color">Organizing Chair</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src={udayanbaruah} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Udayan Baruah</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src={palashghoshal} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Palash Ghosal</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizingChairs