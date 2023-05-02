import React from 'react'
import chandralikachakroborty from "../assets/Images/CommitteePage/chandralikachakraborty.jpg";

const WomenInEngineeringChairs = () => {
    return (
        <div className="women-in-engineering-chairs py-4">
            <div className="container">
                <h1 className="text-center py-4 heading-color">Women In Engineering Chairs</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Sarbani Palit</h5>
                                    <p className="card-text">CVPR Unit, ISI Kolkata, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src={chandralikachakroborty} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mrs. Chandralika Chakraborty</h5>
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

export default WomenInEngineeringChairs