
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const DailyExpenseChart = () => {
    const data = [
        {
          name: '19 Jan',
          total: 4000,
          amt: 2400,
        },
        {
            name: '20 Jan',
            total: 1000,
            amt: 2400,
          },
          {
            name: '21 Jan',
            total: 8000,
            amt: 2400,
          },
          {
            name: '22 Jan',
            total: 2000,
            amt: 2400,
          },

        
      ];
  return (
    <section className="flex flex-col gap-[20px]">
    <p className="text-xl font-[600] leading-6">Daily Expenses</p>
    <ResponsiveContainer className='ml-[-35px]' width="100%" height={300}>

    <LineChart
      width={500}
      height={300}
      data={data}
      style={
        {
            fontSize:'12px'
        }
      }
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
      <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
    </section>
  );
};
