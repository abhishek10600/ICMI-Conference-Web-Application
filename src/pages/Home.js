import React from 'react'
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import About from '../components/About';
import ContributionSought from '../components/ContributionSought';
import PaperSubmissionGuidlines from '../components/PaperSubmissionGuidlines';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <ContributionSought />
            <PaperSubmissionGuidlines />
            <ImportantDates />
            <Contact />
            <Footer />
        </>
    )
}

export default Home