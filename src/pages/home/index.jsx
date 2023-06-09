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

export default function Home() {
  return (
    <div>
      <div className='mb-16 container mx-auto'>
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
            <img src={backImage} alt='back-image' />
          </div>
        </div>
      </div>
      <div className='mb-16'>
        <TableData />
      </div>
      <div className='mb-[190px] 2xl:mb-[240px]'>
        <SocialIcons />
      </div>

      <div className='mb-[70px] container mx-auto'>
        <div className='flex items-center flex-col md:flex-row w-fit gap-4 mx-auto'>
          <IconCard>
            <Round1 className='w-16 2xl:w-[77px]' />
            <p className=' pb-4 pt-8 text-sm xl:text-lg leading-6 2xl:text-[32px] 2xl:leading-8 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className='paragraph'>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
          </IconCard>
          <IconCard shadow='light'>
            <Round2 className='w-16 2xl:w-[77px]' />
            <p className=' pb-4 pt-8 text-sm xl:text-lg leading-6 2xl:text-[32px] 2xl:leading-8 font-semibold'>Sed do eiusmod tempor incididunt ut labore </p>
            <p className='paragraph'>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim elit duis tristique solicitudin vel</p>
          </IconCard>
          <IconCard>
            <Round3 className='w-16 2xl:w-[77px]' />
            <p className='pb-4 pt-8 text-sm xl:text-lg leading-6 2xl:text-[32px] 2xl:leading-8 font-semibold'>Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
            <p className='paragraph'>Look no further for seamless multi-channel attribution. Our process is complete and customizatible, allowing you to view your</p>
          </IconCard>
        </div>
      </div>

      <div>
        <CardChart />
      </div>
    </div>
  );
}
