import Button from '../../../components/basic/button/Button';
import { ReactComponent as VideoIcon } from '../../../assets/icons/video.svg';
import backImage from '../../../assets/images/backImage.webp';

export default function HeroSection() {
  return (
    <div className='overflow-hidden'>
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
  );
}
