import React, { useState } from "react";
import HeaderTitle from "./Common/HeaderTitle";

const Free = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    aadharNumber: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    address: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all form data fields
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // Add file inputs if they exist
    // const aadharUpload = e.target.aadharUpload.files[0];
    // const profilePicture = e.target.profilePicture.files[0];
    // const bankPassbookUpload = e.target.bankPassbookUpload.files[0];

    // if (aadharUpload) data.append("aadharUpload", aadharUpload);
    // if (profilePicture) data.append("profilePicture", profilePicture);
    // if (bankPassbookUpload) data.append("bankPassbookUpload", bankPassbookUpload);

    try {
      const response = await fetch("http://localhost:5000/api/users/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ type: "success", message: result.message });
        setFormData({
          name: "",
          email: "",
          contact: "",
          aadharNumber: "",
          bankName: "",
          accountNumber: "",
          ifscCode: "",
          address: "",
        });
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="pb-8 flex flex-col items-center px-4 bg-customBlue1">
      <HeaderTitle
        Heading="Donate Tailor Machine"
        SubHeading="Fill out the form below to donate a machine and empower women through skill development."
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center w-full gap-8 px-4 lg:px-6">
        <div className="w-full lg:w-1/2 bg-white shadow-lg p-6 rounded-lg text black">
          {status && status.message && (
            <div
              className={`p-4 mb-4 rounded-lg text-center ${
                status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 text-black  rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contact" className="text-sm font-semibold text-gray-700 mb-2">
                Contact Number
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="aadharNumber" className="text-sm font-semibold text-gray-700 mb-2">
                Aadhar Card Number
              </label>
              <input
                id="aadharNumber"
                name="aadharNumber"
                type="text"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="Enter your Aadhar card number"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="bankName" className="text-sm font-semibold text-gray-700 mb-2">
                Bank Name
              </label>
              <input
                id="bankName"
                name="bankName"
                type="text"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Enter your bank name"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="accountNumber" className="text-sm font-semibold text-gray-700 mb-2">
                Account Number
              </label>
              <input
                id="accountNumber"
                name="accountNumber"
                type="text"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Enter your account number"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ifscCode" className="text-sm font-semibold text-gray-700 mb-2">
                IFSC Code
              </label>
              <input
                id="ifscCode"
                name="ifscCode"
                type="text"
                value={formData.ifscCode}
                onChange={handleChange}
                placeholder="Enter your IFSC code"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label htmlFor="aadharUpload" className="text-sm font-semibold text-gray-700 mb-2">
                Upload Aadhar Card
              </label>
              <input
                id="aadharUpload"
                name="aadharUpload"
                type="file"
                accept="image/*,.pdf"
                className="w-full border border-gray-300 text-black rounded-lg p-3 focus:ring-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E35A1E] text-white rounded-lg py-3 hover:bg-[#0084C2] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Free;
