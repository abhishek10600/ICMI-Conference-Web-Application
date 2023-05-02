import React from 'react'
import Navbar from '../components/Navbar'
import CommitteeBanner from "../components/CommitteeBanner";
import ChiefPatron from '../components/ChiefPatron';
import Patron from '../components/Patron';
import GeneralChairs from '../components/GeneralChairs';
import ProgramChairs from '../components/ProgramChairs';
import OrganizingChairs from '../components/OrganizingChairs';
import ProgramCoChairs from '../components/ProgramCoChairs';
import TechnicalChair from '../components/TechnicalChair';
import WomenInEngineeringChairs from '../components/WomenInEngineeringChairs';
import WebPublicityChairs from '../components/WebPublicityChairs';
import FinanceChairs from '../components/FinanceChairs';
import Footer from '../components/Footer';

const Committee = () => {
    return (
        <div>
            <Navbar />
            <CommitteeBanner />
            <ChiefPatron />
            <Patron />
            <GeneralChairs />
            <ProgramChairs />
            <OrganizingChairs />
            <ProgramCoChairs />
            <TechnicalChair />
            <WomenInEngineeringChairs />
            <WebPublicityChairs />
            <FinanceChairs />
            <Footer />
        </div>
    )
}

export default Committee