import React from 'react'
import Navbar from "../components/Navbar";
import ImportantDates from "../components/ImportantDates";
import ImportantDatesBanner from '../components/ImportantDatesBanner';
import Footer from "../components/Footer";

const ImportantDate = () => {
    return (
        <div>
            <Navbar />
            <ImportantDatesBanner />
            <ImportantDates />
            <Footer />
        </div>
    )
}

export default ImportantDate