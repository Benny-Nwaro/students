'use client';
import React from 'react';
import Earnings from '@/components/Earnings';
import MainWrapper from '@/components/MainWarpper';


const FinancesPage: React.FC = () => {
    const paymentMethods = [
        {
          id: 1,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 7h14M5 11h14M5 15h14M5 19h14"
              />
            </svg>
          ),
          name: "Credit/Debit Card",
          isSelected: true,
        },
        {
          id: 2,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.3 16.1h6.8v.8H9.3zM11.9 3.6a9.3 9.3 0 11-9.3 9.3 9.3 9.3 0 019.3-9.3zm3.2 7.5h-2v1.6h2v1.6h-2v.8h2v1.6h-2v.8h-1.6v-.8h-2v.8H10v-1.6h2v-.8H9.3V12H10V7.5h1.6zm-1.6-.8h1.6V9H10v.8h2z" />
            </svg>
          ),
          name: "PayPal",
          isSelected: false,
        },
        {
          id: 3,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 16h14M5 20h14M5 8h14M5 4h14"
              />
            </svg>
          ),
          name: "Bank Transfer",
          isSelected: false,
        },
        {
          id: 4,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 16h14M5 20h14M5 8h14M5 4h14"
              />
            </svg>
          ),
          name: "Gift Card",
          isSelected: false,
        },
      ];
    return (
        <MainWrapper>
        <div className="flex">
            <div className="flex-1">
                <div className="p-6">
                    <Earnings methods={paymentMethods} />
                </div>

            </div>
        </div>
        </MainWrapper>
   
    );
};

export default FinancesPage;