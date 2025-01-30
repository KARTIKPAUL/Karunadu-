// src/components/AppointmentCard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

// Appointment Card Component
const AppointmentCard = ({
  item,
  handleInputChange,
  handleUpdate,
  handleDelete,
  loadingUpdates,
}) => {
  const [localNotes, setLocalNotes] = useState(item.notes || '');
  const [localStatus, setLocalStatus] = useState(item.status);
  const [localDate, setLocalDate] = useState(
    new Date(item.date).toISOString().split('T')[0]
  );
  const [localTimeBlock, setLocalTimeBlock] = useState(item.timeBlock);
  const [localReason, setLocalReason] = useState(item.reason);
  const [localName, setLocalName] = useState(item.name || ''); // Assuming 'name' field exists

  // Handle local input changes and propagate to parent
  const onChange = (field, value) => {
    handleInputChange(item._id, field, value);
    // Update local state for immediate UI feedback
    switch (field) {
      case 'notes':
        setLocalNotes(value);
        break;
      case 'status':
        setLocalStatus(value);
        break;
      case 'date':
        setLocalDate(value);
        break;
      case 'timeBlock':
        setLocalTimeBlock(value);
        break;
      case 'reason':
        setLocalReason(value);
        break;
      case 'name':
        setLocalName(value);
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      className="border rounded-lg p-6 bg-white shadow-md flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4">{localName}</h2>

      {/* Date Field */}
      <div className="mb-3">
        <label htmlFor={`date-${item._id}`} className="block text-sm font-medium text-gray-700">
          Date:
        </label>
        <input
          type="date"
          id={`date-${item._id}`}
          value={localDate}
          onChange={(e) => onChange('date', e.target.value)}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Time Block Field */}
      <div className="mb-3">
        <label htmlFor={`timeBlock-${item._id}`} className="block text-sm font-medium text-gray-700">
          Time Block:
        </label>
        <select
          id={`timeBlock-${item._id}`}
          value={localTimeBlock}
          onChange={(e) => onChange('timeBlock', e.target.value)}
          className="mt-1 block w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[
            '10:00 AM - 12:00 PM',
            '12:00 PM - 2:00 PM',
            '2:00 PM - 4:00 PM',
            '4:00 PM - 6:00 PM',
            '6:00 PM - 8:00 PM',
          ].map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Reason Field */}
      <div className="mb-3">
        <label htmlFor={`reason-${item._id}`} className="block text-sm font-medium text-gray-700">
          Reason:
        </label>
        <select
          id={`reason-${item._id}`}
          value={localReason}
          onChange={(e) => onChange('reason', e.target.value)}
          className="mt-1 block w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[
            'Routine Check-Up',
            'Cleaning',
            'Fillings',
            'Extraction',
            'Orthodontics',
            'Other',
          ].map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      {/* Status Field */}
      <div className="mb-3">
        <label htmlFor={`status-${item._id}`} className="block text-sm font-medium text-gray-700">
          Status:
        </label>
        <select
          id={`status-${item._id}`}
          value={localStatus}
          onChange={(e) => onChange('status', e.target.value)}
          className="mt-1 block w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {['Pending', 'Scheduled', 'Completed', 'Cancelled', 'No Show'].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Notes Field */}
      <div className="mb-4">
        <label htmlFor={`notes-${item._id}`} className="block text-sm font-medium text-gray-700">
          Notes:
        </label>
        <input
          type="text"
          id={`notes-${item._id}`}
          value={localNotes}
          onChange={(e) => onChange('notes', e.target.value)}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter notes"
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-auto flex space-x-2">
        <button
          onClick={() => handleUpdate(item._id)}
          className={`flex-1 px-4 py-2 rounded-md text-white ${
            loadingUpdates[item._id] ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          } transition-colors duration-200`}
          disabled={loadingUpdates[item._id]}
        >
          {loadingUpdates[item._id] ? 'Updating...' : 'Update'}
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="flex-1 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
        >
          Delete
        </button>
        <button
          onClick={() => {
            if (item.mobile) {
              window.location.href = `tel:${item.mobile}`;
            } else {
              alert('Mobile number is not available.');
            }
          }}
          className={`flex-1 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 ${
            !item.mobile ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!item.mobile}
        >
          <FaPhone className="inline-block mr-2" />
          Call
        </button>
      </div>
    </motion.div>
  );
};

export default AppointmentCard;
