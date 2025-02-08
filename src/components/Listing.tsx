"use client";

import Image from "next/image";
import PianoPicture from "@/app/assets/images/pianofull.png";
import Link from "next/link";

// Define TypeScript Interface for Listing Props
interface ListingProps {
  title: string;
  description: string;
  isOnline: boolean;
  levels: string[];
  locations: string[];
  prices: { label: string; price: string }[];
}

// Sample Listing Data
const listings: ListingProps[] = [
  {
    title: "Piano",
    description: "Piano Lessons for the next millennium. Come and work with me to make this awesome opportunity.",
    isOnline: true,
    levels: ["Beginner", "Intermediate", "Advanced"],
    locations: ["Online", "My Studio", "Student's Location"],
    prices: [
      { label: "Trial", price: "Free" },
      { label: "30 Mins", price: "$20" },
      { label: "45 Mins", price: "$30" },
      { label: "60 Mins", price: "$40" },
      { label: "90 Mins", price: "$60" }
    ]
  },
  {
    title: "Piano",
    description: "Piano Lessons for the next millennium. Come and work with me to make this awesome opportunity.",
    isOnline: false,
    levels: ["Beginner", "Intermediate", "Advanced"],
    locations: ["Online", "My Studio", "Student's Location"],
    prices: [
      { label: "Trial", price: "Free" },
      { label: "30 Mins", price: "$20" },
      { label: "45 Mins", price: "$30" },
      { label: "60 Mins", price: "$40" },
      { label: "90 Mins", price: "$60" }
    ]
  }
];

// ListingCard Component
const ListingCard: React.FC<ListingProps> = ({ title, description, isOnline, levels, locations, prices }) => {
  return (
    <div className="bg-white rounded-2xl w-7/8 my-5">
      <div className="px-8 py-6">
        {/* Title and Online Toggle */}
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-extrabold text-xl">{title}</h1>
          <label className="inline-flex items-center cursor-pointer">
            <span className="ms-3 text-sm font-bold text-[#3198F5] pr-4">{isOnline ? "Online" : "Offline"}</span>
            <input type="checkbox" defaultChecked={isOnline} className="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#10CC001A] peer-checked:after:bg-green-500 rounded-full"></div>
          </label>
        </div>

        {/* Description and Options */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="text-[#414158] font-extrabold my-8">{description}</p>

            {/* Level Selection */}
            <div className="flex flex-row items-center gap-4">
              <p className="text-[#9193A5]">Level</p>
              {levels.map((level) => (
                <button
                  key={level}
                  className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full"
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Location Selection */}
            <div className="flex flex-row items-center gap-4 my-5">
              <p className="text-[#9193A5]">Location</p>
              {locations.map((location) => (
                <button
                  key={location}
                  className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full"
                >
                  {location}
                </button>
              ))}
            </div>

            {/* Pricing */}
            <div className="bg-[#D3E9FD] rounded-2xl w-full px-8 py-6">
              <h1 className="font-extrabold">Price</h1>
              <div className="flex flex-wrap mt-4 gap-4">
                {prices.map(({ label, price }) => (
                  <button
                    key={label}
                    className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full"
                  >
                    {label} <span className="text-[#3198F5] pl-2">{price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Modify Listing Button */}
            <div className="mt-8">
              <Link href="/listing/modifylisting" className="bg-[#3198F5] text-white font-extrabold py-4 px-8 rounded-full">
                Modify Listing
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-40">
            <Image src={PianoPicture} alt="Piano" className="w-[392px] h-[235px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Listing Page
const Listing: React.FC = () => {
  return (
    <div className="mx-12">
      {/* Header */}
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="font-extrabold text-xl">All Listings ({listings.length})</h1>
        <Link href="/listing/newlisting" className="bg-[#3198F5] text-white font-bold text-sm py-4 px-8 rounded-full">
          Create New Listing
        </Link>
      </div>

      {/* Render Listings */}
      {listings.map((listing, index) => (
        <ListingCard key={index} {...listing} />
      ))}
    </div>
  );
};

export default Listing;
