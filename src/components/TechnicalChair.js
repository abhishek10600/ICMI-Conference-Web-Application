import React from 'react'
import samarjeetborah from "../assets/Images/CommitteePage/samarjeetborah.jpg";
import digantabaruah from "../assets/Images/CommitteePage/digantabaruah.jpg";
import omprakashsingh from "../assets/Images/CommitteePage/omprakashsingh.jpg";

const TechnicalChair = () => {
    return (
        <div className="technical-chair-div py-4">
            <div className="container">
                <h1 className="text-center py-4 heading-color">Technical Chair</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src="" className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Debashis Nandi</h5>
                                    <p className="card-text">NIT, Durgapur, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src={samarjeetborah} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Samarjeet Borah</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src={digantabaruah} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mr. Diganta Baruah</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src={omprakashsingh} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Om Prakash Singh</h5>
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

export default TechnicalChair