import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer,XAxis, YAxis ,Tooltip, Legend } from 'recharts';


import data from "../../data"


const MonthlyRevenue = () => {
    const revenueData = data.monthlySales
  return (
    <div className='bg-gray-800 flex-1  h-96  rounded-2xl'>
        <h1 className='text-center my-4 text-white font-bold text-2xl'>Monthly Revenue</h1>
        <ResponsiveContainer className="  w-full ">
        <BarChart
        width={500}
        height={300}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 80,
        }}
        data={revenueData}>
        <XAxis dataKey="month" />
          <YAxis dataKey="revenue" />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MonthlyRevenue