import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/view-data");
        const result = await response.json();

        if (response.ok) {
          setFormData(result.data);
          setLoading(false);
        } else {
          setError(result.message);
          setLoading(false);
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4 text-black">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard - Form Data</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-200 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
              <th className="border border-gray-300 px-4 py-2">Aadhar Number</th>
              <th className="border border-gray-300 px-4 py-2">Bank Name</th>
              <th className="border border-gray-300 px-4 py-2">Account Number</th>
              <th className="border border-gray-300 px-4 py-2">IFSC Code</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Aadhar Card</th>
              <th className="border border-gray-300 px-4 py-2">Profile Picture</th>
              <th className="border border-gray-300 px-4 py-2">Bank Passbook</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data) => (
              <tr key={data._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                <td className="border border-gray-300 px-4 py-2">{data.contact}</td>
                <td className="border border-gray-300 px-4 py-2">{data.aadharNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{data.bankName}</td>
                <td className="border border-gray-300 px-4 py-2">{data.accountNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{data.ifscCode}</td>
                <td className="border border-gray-300 px-4 py-2">{data.address}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={data.aadharUploadUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={data.profilePictureUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={data.bankPassbookUploadUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
