import React from 'react'
import UmapadaPal from "../assets/Images/CommitteePage/UmapadaPal.jpg";
import MichaelBlue from "../assets/Images/CommitteePage/MichaelBlue.jpg";
import xiaoyi from "../assets/Images/CommitteePage/xiaoyi.jpg";
import kalpanasharma from "../assets/Images/CommitteePage/kalpanasharma.jpg";

const GeneralChairs = () => {
    return (
        <div className="general-chairs-div py-4">
            <div className="container">
                <h1 className="py-4 text-center heading-color">General Chairs</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src={UmapadaPal} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Umapada Pal</h5>
                                    <p className="card-text">CVPR Unit, ISI Kolkata, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src={MichaelBlue} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Michael Blumenstein</h5>
                                    <p className="card-text">UTS, Australia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src={xiaoyi} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Xiaoyi Jiang</h5>
                                    <p className="card-text">University of Munster, Germany</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 my-2">
                            <div className="card text-center mx-auto">
                                <img src={kalpanasharma} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Kalpana Sharma</h5>
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

export default GeneralChairs