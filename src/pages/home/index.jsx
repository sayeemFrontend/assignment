import Button from '../../components/basic/button/Button';
import { ReactComponent as VideoIcon } from '../../assets/icons/video.svg';
import backImage from '../../assets/images/backImage.webp';
import TableData from './components/TableData';
import SocialIcons from './components/SocialIcons';
import IconCard from '../../components/common/cards/icon-card/IconCard';
import { ReactComponent as Round1 } from '../../assets/icons/round1.svg';
import { ReactComponent as Round2 } from '../../assets/icons/round2.svg';
import { ReactComponent as Round3 } from '../../assets/icons/round3.svg';

import CardChart from './components/CardChart';
import FBChartWrapper from './components/FBChartWrapper';
import BarChart from './components/BarChart';
import ColorTable from './components/ColorTable';

export default function Home() {
  return (
    <div className=''>
      <div className='home-container overflow-hidden'>
        <div className='mb-[100px] container mx-auto'>
          <div className='grid grid-cols-12 grid-flow-row gap-4'>
            <div className='col-span-12 md:col-span-6 pt-20 pr-6'>
              <h2 className='text-4xl leading-[42px] xl:text-[72px] xl:leading-[72px] 2xl:leading-[144px] 2xl:text-[126px] font-normal'>
                Lore <span className='font-medium'>ipsum.</span> Dolor <span className='font-semibold'>site.</span>
              </h2>
              <p className='my-6 paragraph'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
              <div className='text-small flex items-center gap-4 flex-col sm:flex-row'>
                <Button className='h-10 w-52 2xl:w-[238px] 2xl:h-[52px] custom-border' title='Viverra orci sagittis' />
                <Button className='h-10 w-52 2xl:w-[238px] 2xl:h-[52px] custom-border !border-0 text-primary-100 bg-secondary-500'>
                  <ul className='mx-auto flex items-center'>
                    <li>
                      <VideoIcon />
                    </li>
                    <li className='text-primary-100 ml-2'>Get a demo</li>
                  </ul>
                </Button>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6'>
              <img src={backImage} alt='back-image' className='relative xl:-right-[10%]' />
            </div>
          </div>
        </div>
      </div>
      <div className='mb-[100px]'>
        <TableData />
      </div>
      <div className='mb-[190px] 2xl:mb-[260px]'>
        <SocialIcons />
      </div>

      <div className='mb-[100px] container mx-auto'>
        <div className='flex items-center flex-col md:flex-row w-fit gap-4 mx-auto flex-wrap'>
          <IconCard>
            <Round1 className='w-16 2xl:w-[77px]' />
            <p className=' pt-12 pb-2 text-xl text-primary-700 font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className='text-base text-primary-700 opacity-70'>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
          </IconCard>
          <IconCard shadow='light'>
            <Round2 className='w-16 2xl:w-[77px]' />
            <p className=' pt-12 pb-2 text-xl text-primary-700 font-bold'>Sed do eiusmod tempor incididunt ut labore </p>
            <p className='text-base text-primary-700 opacity-70'>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim elit duis tristique solicitudin vel</p>
          </IconCard>
          <IconCard>
            <Round3 className='w-16 2xl:w-[77px]' />
            <p className='pt-12 pb-2 text-xl text-primary-700 font-bold'>Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
            <p className='text-base text-primary-700 opacity-70'>Look no further for seamless multi-channel attribution. Our process is complete and customizatible, allowing you to view your</p>
          </IconCard>
        </div>
      </div>

      <div className='mb-[100px]'>
        <CardChart />
      </div>
      <div className='mb-[100px]'>
        <FBChartWrapper />
      </div>
      <div className='mb-[100px] container mx-auto'>
        <BarChart />
      </div>

      <div className='mb-[100px]'>
        <ColorTable />
      </div>

      <div className='mb-[100px] container md:px-[100px] 2xl:px-[170px] mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6'>
          <div className='max-w-[324px] xl:max-w-[540px] 2xl:max-w-[896px] '>
            <p className='mb-3 text-large'>Ullamcorper morbi tincidunt ornare massa eget</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </div>
          <Button className='text-small w-[170px] h-10 2xl:w-[219px] 2xl:h-[75px] custom-border !border-0 bg-secondary-500 !text-primary-100' title='Apply' />
        </div>
        <div></div>
      </div>
    </div>
  );
}
