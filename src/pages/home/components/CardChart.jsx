import { ReactComponent as OkIcon } from '../../../assets/icons/ok.svg';
import Button from '../../../components/basic/button/Button';
import IconCardMini from '../../../components/common/cards/icon-card-mini/IconCardMini';
import MiniChart from '../../../components/common/charts/mini-chart/MiniChart';
import './style.css';

export default function CardChart() {
  return (
    <div className='card-chart mb-[100px] container mx-auto '>
      <div className='grid grid-flow-row grid-cols-12 gap-4 items-center'>
        <div className='col-span-12 md:col-span-6'>
          <div className=''>
            <p className='mb-4 text-large'>Nemo enim ipsam quia </p>
            <p className='mb-16 paragraph max-w-[90%]'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu nemo enim</p>
            <div className='icons max-w-md flex flex-col h-fit gap-4'>
              <IconCardMini>
                <ul>
                  <OkIcon className='w-[20px] 2xl:w-[30px] mr-3' />
                  <p>Sed ut perspiciatis unde</p>
                </ul>
              </IconCardMini>
              <IconCardMini>
                <ul>
                  <OkIcon className='w-[20px] 2xl:-[30px] mr-3' />
                  <p> Omnis iste natus</p>
                </ul>
              </IconCardMini>
              <IconCardMini>
                <ul>
                  <OkIcon className='w-[20px] 2xl:-[30px] mr-3' />
                  <p>Error sit voluptatem</p>
                </ul>
              </IconCardMini>
              <IconCardMini>
                <ul>
                  <OkIcon className='w-[20px] 2xl:w-[30px] mr-3' />
                  <p>Accusantium doloremque</p>
                </ul>
              </IconCardMini>
            </div>

            <Button className='mt-10 custom-border text-primary-100 !border-0 w-[175px] bg-secondary-500 h-[50px]' title='Try Out Now!' />
          </div>
        </div>
        <div className='col-span-12 md:col-span-6'>
          <div className='chart-wrapper'>
            <div className='flex'>
              <ul className='sidebar-list w-[99px] bg-secondary-200 flex flex-col'>
                <li className=''></li>
                <li className=''></li>
                <li className=''></li>
                <li className=''></li>
                <li className=''></li>
                <li className='!mt-auto'></li>
              </ul>
              <div className='flex-1 p-4 2xl:p-8'>
                <MiniChart />
                <div className='mini-chart-table mx-auto w-full'>
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
                          <td>{da.source || '-'}</td>
                          <td>{da.campaign || '-'}</td>
                          <td>${da.cost || '-'}</td>
                          <td>{da.sales || '-'}</td>
                          <td className='font-bold'>${da.revenue || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const headers = ['Source', 'Campaign', 'Cost', 'Sales', 'Revenue'];

const data = [
  {
    id: 1,
    source: 'Google',
    campaign: 'Logoipsum data',
    cost: 150,
    sales: 14,
    revenue: 2716,
  },
  {
    id: 1,
    source: 'Facebook',
    campaign: 'Logoipsum data',
    cost: 150,
    sales: 14,
    revenue: 2716,
  },
  {
    id: 3,
    source: 'Instagram',
    campaign: 'Logoipsum data',
    cost: 150,
    sales: 14,
    revenue: 2716,
  },
];
