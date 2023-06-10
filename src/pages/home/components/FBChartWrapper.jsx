import FBChart from '../../../components/common/charts/fb-chart/FBChart';

export default function FBChartWrapper() {
  return (
    <div className='fb-chart-wrapper container mx-auto'>
      <div className='max-w-[390px]  2xl:max-w-[950px] text-center mx-auto'>
        <p className='mb-2 2xl:mb-4 text-large'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>
      <p className='mt-12 mb-6 paragraph'>Revenue from Facebook Ads</p>
      <div className='w-full'>
        <FBChart />
      </div>
      <div className='px-2 sm:px-16 2xl:px-36 mt-20 grid grid-cols-12 gap-4 2xl:gap-6'>
        <div className='col-span-12 lg:col-span-6'>
          <p className='m-3 text-small text-center'>Facebook data</p>
          <div className='overflow-auto'>
            <div className='chart-table-left mx-auto w-full'>
              <table className='w-full'>
                <thead>
                  <tr className='!border-0'>
                    {headers?.map((hd, i) => (
                      <th key={i}>{hd}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fbData?.map((da, i) => (
                    <tr key={i}>
                      <td>{da.ad_name || '-'}</td>
                      <td>{da.orders || '-'}</td>
                      <td>{da.roas || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='col-span-12 lg:col-span-6'>
          <p className='m-3 text-small text-primary-800 text-center'>Logoipsum data</p>

          <div className='overflow-auto'>
            <div className='chart-table-right mx-auto w-full'>
              <table className='w-full'>
                <thead>
                  <tr className='!border-0'>
                    {headers?.map((hd, i) => (
                      <th key={i}>{hd}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.map((da, i) => (
                    <tr key={i}>
                      <td>{da.ad_name || '-'}</td>
                      <td>{da.orders || '-'}</td>
                      <td>{da.roas || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const headers = ['Ad name', 'Orders', 'ROAS'];

//
const fbData = [
  { ad_name: 'All_25+_Static_split_screen', orders: 12, roas: 3.2 },
  { ad_name: 'M_25+_Static_split_screen_2', orders: 2, roas: 1.5 },
];

const data = [
  { ad_name: 'All_25+_Static_split_screen', orders: 10, roas: 2.8 },
  { ad_name: 'M_25+_Static_split_screen_2', orders: 8, roas: 3 },
];
