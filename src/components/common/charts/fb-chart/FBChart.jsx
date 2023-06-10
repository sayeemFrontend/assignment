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
  {
    name: 'Page D',
    uv: 2000,
    pv: 8000,
    amt: 3890,
  },
  {
    name: 'Page E',
    uv: 2000,
    pv: 9100,
    amt: 1890,
  },
  {
    name: 'Page F',
    uv: 2000,
    pv: 8900,
    amt: 2490,
  },
];

export default function FBChart() {
  return (
    <div className='relative'>
      <ul className='absolute right-[5%]'>
        <li className='text-2xl 2xl:text-[36px] font-bold text-[#58BF73]'>$3.455</li>
        <li className='text-xs 2xl:text-base font-normal text-primary-700'>Tracked by Logoipsum Data</li>
      </ul>
      <ul className='absolute bottom-[36px] right-[5%]'>
        <li className='text-2xl 2xl:text-[36px] font-bold text-[#FFC907]'>$3.455</li>
        <li className='text-xs 2xl:text-base font-normal text-primary-700'>Tracked by Logoipsum Data</li>
      </ul>
      <ResponsiveContainer width='80%' height={260}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid vertical={false} strokeDasharray='10 10' className='stroke-primary-500 opacity-20' />
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
