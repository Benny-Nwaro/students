"use client"
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const FinancesPage: React.FC = () => {
    // Function to handle the onOpen event
    const handleOpen = () => {
        console.log("Header menu opened");
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header onOpen={handleOpen} />           
            </div>
        </div>
    );
};

export default FinancesPage;
