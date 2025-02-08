"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Listing from "@/components/Listing";

const ListingPage: React.FC = () => {
    const handleOpen = (): void => {
        console.log("opened");
    };

    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-gray-100">
                <Header onOpen={handleOpen} />
                <Listing />
            </div>
        </div>
    );
};

export default ListingPage;
