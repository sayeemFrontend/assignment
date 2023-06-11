import IconCard from '../../../components/common/cards/icon-card/IconCard';
import { ReactComponent as Round1 } from '../../../assets/icons/round1.svg';
import { ReactComponent as Round2 } from '../../../assets/icons/round2.svg';
import { ReactComponent as Round3 } from '../../../assets/icons/round3.svg';

export default function IconSection() {
  return (
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
  );
}
