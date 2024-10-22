import React from 'react';

function ReportCard({ color, title, count, message }) {
  const backgroundColorClass = {
    red: 'bg-red-100',
    blue: 'bg-blue-100',
    pink: 'bg-pink-100',
  }[color] || 'bg-gray-100';

  const textColorClass = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    pink: 'text-pink-500',
  }[color] || 'text-gray-500';

  return (
    <div className={`
      border rounded-lg p-4 w-full
      min-h-[160px] flex flex-col justify-between
      transition-all duration-300 ease-in-out
      ${backgroundColorClass}
      hover:shadow-md
    `}>
      <div className="space-y-2">
        <h2 className="text-gray-700 text-xl sm:text-2xl font-semibold">{title}</h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900">
          {count}
        </h1>
      </div>
      <p className={`text-sm sm:text-base mt-4 ${textColorClass}`}>
        {message}
      </p>
    </div>
  );
}


export default ReportCard;