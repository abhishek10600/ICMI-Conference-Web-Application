import React from 'react'
import xiang from "../assets/Images/CommitteePage/xiang.jpg";
import xiao from "../assets/Images/CommitteePage/xiao.jpg";
import bhaskarbhuyan from "../assets/Images/CommitteePage/bhaskarbhuyan.jpg";
import soumikbhattacharya from "../assets/Images/CommitteePage/soumikbhattacharya.jpg";

const ProgrammingChairs = () => {
    return (
        <div className="program-chairs-div py-4">
            <div className="container">
                <h1 className="py-4 text-center heading-color">Programming Chairs</h1>
                <div className="container">
                    <div className="row my-4">
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src={xiang} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Xiang Bai</h5>
                                    <p className="card-text">HUST, China</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src={xiao} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. Xiao-Jun Wu</h5>
                                    <p className="card-text">JU, China</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Prof. Dr. H.K.D Sarma</h5>
                                    <p className="card-text">GU, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src={bhaskarbhuyan} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Bhaskar Bhuyan</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src={soumikbhattacharya} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Soumik Bhattacharya</h5>
                                    <p className="card-text">IIT KGP, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgrammingChairs