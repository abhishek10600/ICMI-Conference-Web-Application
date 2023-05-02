import React from 'react'

const ImportantDates = () => {
    return (
        <div className="important-date-div py-4">
            <div className="container">
                <h1 className="text-center py-4 heading-color">Important Dates:</h1>
                <table className="table my-4">
                    <thead className="text-center main-color heading-color">
                        <tr className="">
                            <th scope="col">Event</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-center date-table-color heading-color">
                        <tr>
                            <td>Submission of Full Papers</td>
                            <td>July 30, 2023</td>
                        </tr>
                        <tr>
                            <td>Notification of Acceptance</td>
                            <td>September 30, 2023</td>
                        </tr>
                        <tr>
                            <td>Registration</td>
                            <td>October 15, 2023</td>
                        </tr>
                        <tr>
                            <td>Camera Ready Submission</td>
                            <td>October 10, 2023</td>
                        </tr>
                        <tr>
                            <td>Conference Dates</td>
                            <td>December 12 - 14, 2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ImportantDates