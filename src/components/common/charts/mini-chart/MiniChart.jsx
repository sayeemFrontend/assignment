import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Page 0',
    uv: 1000,
    pv: 100,
    amt: 0,
  },
  {
    name: 'Page A',
    uv: 4000,
    pv: 2600,
    amt: 2000,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 2000,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2890,
  },
];

export default function MiniChart() {
  return (
    <div className=''>
      <ResponsiveContainer width='100%' height={200}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid vertical={false} strokeDasharray='10 10' className='stroke-primary-100' />
          <XAxis hide dataKey='name' />
          <YAxis hide />
          <Tooltip />
          <Line type='linear' dataKey='amt' stroke='#FFC907' strokeWidth={4} dot={false} />
          <Line type='linear' dataKey='pv' stroke='#58BF73' strokeWidth={4} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
