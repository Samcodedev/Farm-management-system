import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const LineCharts = ({listed, create, amount, unlisted}) => {

  const data = [
      {
        name: 'Listed stock',
        Amount: listed,
      },
      {
        name: 'Stock Created',
        Amount: create,
      },
      {
        name: 'Total Earned',
        Amount: amount,
      },
      {
        name: 'Listed Stock',
        Amount: unlisted,
      }
    ];

  return (
    <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" strokeDasharray='2 2' />
          <XAxis scale="band" dataKey="name" fontSize={10} stroke='#fff' />
          <YAxis fontSize={10} stroke='#fff' />
          <Tooltip />
          <Legend />
          <Bar dataKey="Amount" barSize={30} fill="var(--brandcolor-light)" />
          <Line type="monotone" dataKey="Amount" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
  )
}

export default LineCharts
