import { ReactComponent as OkIcon } from '../../../assets/icons/ok.svg';
import IconCardMini from '../../../components/common/cards/icon-card-mini/IconCardMini';
import './style.css';

export default function CardChart() {
  return (
    <div className='card-chart container mx-auto'>
      <div className='grid grid-flow-row grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-6'>
          <div className=''>
            <p className='mb-4 text-large'>Nemo enim ipsam quia </p>
            <p className='mb-10 paragraph'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu nemo enim</p>
            <div className='max-w-lg flex flex-col h-fit gap-4'>
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
          </div>
        </div>
        <div className='col-span-12 md:col-span-6'></div>
      </div>
    </div>
  );
}
