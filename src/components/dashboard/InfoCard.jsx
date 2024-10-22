import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import InfoCardSlide from './InfoCardSlide';

const InfoCard = ({ title, items, announcements }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const visibleItems = expanded ? items : items.slice(0, 3);

  return (
    <div className="bg-white shadow-md rounded-lg w-full">
      <div className='p-4'>

      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="relative text-gray-800">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span>{format(selectedDate, 'yyyy-MM-dd')}</span>
            <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          {showCalendar && (
            <div className="absolute right-0 mt-2 z-10 text-gray-800">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className="border border-gray-200 rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>
      {!announcements ? (
        <>
          <div className='flex flex-col gap-y-2'>
            <p className='text-sm font-semibold'>Priority</p>
            {visibleItems[0].map((item, index) => (
              <InfoCardSlide key={`priority-${index}`} item={item} />
            ))}
          </div>
          <div className='flex flex-col gap-y-2'>
            <p className='text-sm font-semibold'>Other</p>
            {visibleItems[1].map((item, index) => (
              <InfoCardSlide key={`other-${index}`} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div>
          {visibleItems.map((item, index) => (
            <InfoCardSlide key={`announcement-${index}`} item={item} />
          ))}
        </div>
        )}
      </div>
      <div className='flex w-full border items-center justify-center mt-2 h-[40px] p-2'>
        <button 
          className='text-red-600 hover:text-red-800 text-sm font-medium'
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : `See All ${title}`}
        </button>
      </div>
    </div>
  );
};

export default InfoCard;


