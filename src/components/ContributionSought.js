import React from 'react'

const ContributionSought = () => {
    return (
        <div className="contribution-div py-4">
            <div className="container">
                <h2 className="text-center heading-color py-4">Contributions are sought in the
                    following areas (not limited to):</h2>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container heading-color">
                        <ul className="px-4">
                            <li className="py-2">Computer Vision and Image Processing.</li>
                            <li className="py-2">Networking and Data Communications.</li>
                            <li className="py-2">Cyber Security and Data Forensics.</li>
                            <li className="py-2">Artificial Intelligence, Machine Learning, and Deep Learning.</li>
                            <li className="py-2">Sequential, Parallel, Distributed and Cloud Computing.</li>
                            <li className="py-2">Human Computer Interaction, Mechatronics and Robotics.</li>
                        </ul>
                        <p className="text-white text-center py-4">The proceeding of the conference will be published by Springer LNCS (Approval Awaiting).</p>
                    </div>
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <p className="text-center heading-color">ICMI technical program will include contributed papers and
                            contributions from invited speakers. ICMI 2023 will have preconference-
                            tutorials, keynotes, plenary talks, technical
                            sessions, special sessions, expert panels, research demo
                            session (RDS), and student research forum (SRF).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContributionSought