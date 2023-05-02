import React from 'react'

const FinanceChairs = () => {
    return (
        <div className="finance-chairs py-4">
            <div className="container">
                <h1 className="text-center py-4 heading-color">Finance Chairs</h1>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mr. Ashis Datta</h5>
                                    <p className="card-text">SMIT, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 my-2">
                            <div className="card text-center mx-auto">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mrs. Sonam Lhamu Bhutia</h5>
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

export default FinanceChairs