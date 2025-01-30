import React, { useState } from "react";

import paymentOptionsLogo from "../assets/paymentOptionsLogo.png"


const DonationForm = () => {
  const [donationType, setDonationType] = useState("Indian");
  const [donationFrequency, setDonationFrequency] = useState("Once");
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const handleDonationFrequencyChange = (frequency) => {
    setDonationFrequency(frequency);
  };

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const calculateMeals = () => {
    return Math.floor(donationAmount / 25);
  };

  return (
    <div className="lg:col-span-4">
    <div className="sticky top-20 bg-customBlue2 rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-[#E35A1E]">
        Donate to RSJ Rural Development Foundation
      </h2>

      <div className="flex justify-between items-center text-gray-200">
        <div>
          <span className="font-semibold">2,044</span> Meals distributed
        </div>
        <div>
          <span className="font-semibold">32</span> Government Hospitals
        </div>
      </div>

      <div className="relative w-full bg-gray-300 rounded-full h-3">
        <div
          className="absolute bg-[#E35A1E] h-3 rounded-full"
          style={{ width: "30%" }}
        ></div>
      </div>

      <div className="flex justify-around">
        {["Indian", "Foreign"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 text-sm rounded-lg border ${
              donationType === type
                ? "bg-[#E35A1E] text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => handleDonationTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex justify-around">
        {["Once", "Monthly"].map((frequency) => (
          <button
            key={frequency}
            className={`px-4 py-2 text-sm rounded-lg border ${
              donationFrequency === frequency
                ? "bg-[#E35A1E] text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => handleDonationFrequencyChange(frequency)}
          >
            {frequency}
          </button>
        ))}
      </div>

      <h2 className="text-gray-200">
        Select your donation amount (*1 Meal = ₹25)
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {[50000, 25000, 10000, 5000, 2500, 1000].map((amount) => (
          <button
            key={amount}
            className={`px-3 py-2 rounded-md border text-sm ${
              donationAmount === amount
                ? "bg-[#E35A1E] text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => handleAmountChange(amount)}
          >
            ₹{amount.toLocaleString()}
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Enter amount"
        className="w-full px-3 py-2 rounded-lg border"
        onChange={(e) => handleAmountChange(Number(e.target.value))}
      />

      <p className="text-center text-gray-200">
        You pledge to serve{" "}
        <span className="font-bold">{calculateMeals()}</span> meals.
      </p>

      <img
        src={paymentOptionsLogo}
        alt="Payment options"
        className="mx-auto w-full"
      />

      <button className="w-full bg-[#E35A1E] text-white py-3 rounded-lg">
        Donate Now
      </button>

      <p className="text-center text-sm text-gray-400">
        *Donations are tax exempted under 80G
      </p>
    </div>
  </div>
  );
};

export default DonationForm;
