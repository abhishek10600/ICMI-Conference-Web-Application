import React from 'react'
import GLSharma from "../assets/Images/CommitteePage/GLSharma.jpg";
import KarmaSonam from "../assets/Images/CommitteePage/KarmaSonam.jpg";

const Patron = () => {
    return (
        <div className="patron-div py-4">
            <div className="container">
                <h1 className="py-4 text-center heading-color">Patron</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src={GLSharma} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. G.L Sharma</h5>
                                    <p className="card-text">Director, SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src={KarmaSonam} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Karma Sonam Sherpa</h5>
                                    <p className="card-text">Registrar, SMU, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patron