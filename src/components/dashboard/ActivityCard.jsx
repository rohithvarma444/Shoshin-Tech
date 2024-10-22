import React from 'react';
import PropTypes from 'prop-types';
import { FaBriefcase, FaChevronRight } from 'react-icons/fa';

const ActivityCard = ({ activityCount = 12 }) => {
  return (
    <div className="w-full bg-[#1B204A] text-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <div className="bg-[#161E54] text-xs font-bold px-3 py-1 rounded-full">
            {activityCount} Today
          </div>
        </div>

        <div className="bg-[#161E54] p-5 rounded-xl space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <FaBriefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">10:40 AM, Fri 10 Sept 2021</p>
              <h3 className="text-xl font-semibold">You Posted a New Job</h3>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Kindly check the requirements and terms of work to ensure everything is correct.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm font-light text-gray-300">
            Today's activities: <span className="font-semibold text-red-400">{activityCount}</span>
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center">
            See All Activity
            <FaChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  activityCount: PropTypes.number
};

export default ActivityCard;
