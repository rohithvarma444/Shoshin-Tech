import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { FaArrowUpLong } from "react-icons/fa6";

const GraphCard = ({ title, total, men, women, percentage, data }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg w-full">
      <div className="flex justify-between items-start mb-4">
        <div className='flex flex-col gap-y-3'>
          <h2 className="text-2xl font-bold text-navy-blue mb-1">{title}</h2>
          <p className="text-6xl font-bold text-navy-blue">{total}</p>
        </div>
        <div className="text-right relative mx-auto left-10 top-4 w-[150px] h-[60px]">
          <div className='flex flex-col items-center justify-center gap-y-2 mr-10'>
            <span className="text-red-500 font-semibold">{percentage}</span>
            <FaArrowUpLong className='text-red-500' />
          </div>
          <ResponsiveContainer width="80%" height={90} className='relative right-1'>
            <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#A0AEC0', fontSize: 12 }} 
              />
              <YAxis 
                hide={true} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: 'none', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                  padding: '10px' 
                }} 
                cursor={false} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="url(#colorValue)" 
                strokeWidth={4} 
                dot={{ 
                  stroke: '#ff6b6b', 
                  strokeWidth: 2, 
                  fill: '#fff', 
                  r: 4 
                }} 
                activeDot={{ 
                  r: 6, 
                  stroke: '#ff6b6b', 
                  strokeWidth: 2 
                }} 
                isAnimationActive={true} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="text-gray-600">
        <p>{men} Men</p>
        <p>{women} Women</p>
      </div>
      <div className='flex justify-center mt-2'>
        <div className='inline-block bg-[#FFEFE7] relative left-[110px]  bottom-3 text-gray-800 text-md rounded-lg px-3 py-1 text-sm'>
          Past month {percentage}
        </div>
      </div>
    </div>
  );
};

GraphCard.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  men: PropTypes.number.isRequired,
  women: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number
  })).isRequired
};

export default GraphCard;
