import React from 'react'
import KRamnarayan from "../assets/Images/CommitteePage/KRamnarayan.jpg";
import RajanSGrewal from "../assets/Images/CommitteePage/RajanSGrewal.jpg";

const ChiefPatron = () => {
    return (
        <div className="chief-patron-div py-4">
            <div className="container text-center">
                <h1 className="py-4 heading-color">Chief Patron</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <div className="card mx-auto">
                                <img src={KRamnarayan} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. K Ramnarayan</h5>
                                    <p className="card-text">Pro Chancellor, SMU, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 my-2">
                            <div className="card mx-auto">
                                <img src={RajanSGrewal} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Lt. Gen. Dr. Rajan S Grewal</h5>
                                    <p className="card-text">Hon'ble VC,SMU, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChiefPatron