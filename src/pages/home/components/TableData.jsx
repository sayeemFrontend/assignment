import './table.css';

export default function TableData() {
  return (
    <div className='mb-[100px]'>
      <p className='mb-6 text-large max-w-[972px] mx-auto text-center'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
      <div className='container mx-auto overflow-auto'>
        <div className='table mx-auto w-full'>
          <table className='w-full'>
            <thead>
              <tr>
                {headers?.map((hd, i) => (
                  <th key={i}>{hd}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((da, i) => (
                <tr key={i}>
                  <td>{da.source || '-'}</td>
                  <td>{da.ad || '-'}</td>
                  <td>{da.cost || '-'}</td>
                  <td>{da.sales || '-'}</td>
                  <td>{da.first_time_customers || '-'}</td>
                  <td className='font-extrabold'>{da.revenue || '-'}</td>
                  <td>{da.roas || '-'}</td>
                  <td className='text-primary-500'>{da.cac || '-'}</td>
                  <td className='text-primary-500'>{da.ft_roas || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const headers = ['Source', 'Ad', 'Cost', 'Sales', 'First time customers', 'Revenue', 'ROAS', 'CAC', 'F.T ROAS'];

const data = [
  {
    id: 1,
    source: 'Youtube',
    ad: 'Male_18+_UGC_Video',
    cost: '$2,567.00',
    sales: '120',
    first_time_customers: '90',
    revenue: '$10,800.00',
    roas: '4.21',
    cac: '$28.52',
    ft_roas: '3.16',
  },
  {
    id: 2,
    source: 'Adwords',
    ad: 'US_Generic_Search',
    cost: '$1,233.00 ',
    sales: '98',
    first_time_customers: '71',
    revenue: '$5,880.00',
    roas: '4.77',
    cac: '$17.48',
    ft_roas: '3.43',
  },
  {
    id: 3,
    source: 'Adwords',
    ad: 'SKU2343_shoppong',
    cost: '$3,120.00',
    sales: '150',
    first_time_customers: '127',
    revenue: '$14,700.00',
    roas: '4.71',
    cac: '$24.55',
    ft_roas: '3.99',
  },
  {
    id: 4,
    source: 'Facebook',
    ad: 'All_25+_Static_split_screen',
    cost: '$5,400.00',
    sales: '145',
    first_time_customers: '111',
    revenue: '$11,600.00',
    roas: '2.15',
    cac: '$48.54',
    ft_roas: '1.65',
  },
  {
    id: 5,
    source: 'Instagram',
    ad: 'W_25+_Static_split_screen',
    cost: '$3,210.00',
    sales: '280',
    first_time_customers: '177',
    revenue: '$23,800.00',
    roas: '7.41',
    cac: '$18.17',
    ft_roas: '4.68',
  },
  {
    id: 6,
    source: 'TikTok',
    ad: 'UGS_video_2',
    cost: '$3,100.00',
    sales: '120',
    first_time_customers: '110',
    revenue: '$7,080.00',
    roas: '2.28',
    cac: '$28.52',
    ft_roas: '2.10',
  },
];
