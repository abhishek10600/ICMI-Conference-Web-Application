import React from 'react'
import biswajitdeb from "../assets/Images/CommitteePage/biswajitdeb.jpg";
import soumyadas from "../assets/Images/CommitteePage/saumyadas.jpg";

const ProgramCoChairs = () => {
    return (
        <div className="program-co-chairs-div py-4">
            <div className="container">
                <h1 className="text-center py-4 heading-color">Program Co Chairs</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src={biswajitdeb} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Biswajit Deb</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Barnali Dey</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-2">
                            <div className="card text-center mx-auto">
                                <img src={soumyadas} className="card-img-top cardImage" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Saumya Das</h5>
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

export default ProgramCoChairs