import Button from '../../../components/basic/button/Button';
import ArrowUp from '../../../assets/icons/upArrowColor.svg';
import FB from '../../../assets/icons/fb.svg';
import Shoppe from '../../../assets/icons/shoppe.svg';
import TikTok from '../../../assets/icons/tiktok.svg';
import Pinter from '../../../assets/icons/pinter.svg';
import Tweet from '../../../assets/icons/tweet.svg';
import Notify from '../../../assets/icons/notify.svg';
import BigEye from '../../../assets/icons/bigEye.svg';
import Eye from '../../../assets/icons/eyeGlass.svg';
import './style.css';

export default function SocialIcons() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='grid grid-flow-row grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-6'>
            <div className='mt-6 pb-2 md:mt-[16%]'>
              <p className='mb-4 text-large'>
                Sed ut perspiciatis unde omnis iste natus error. <span className='font-semibold'>Try out!</span>
              </p>
              <p className='mb-6 paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ullamco esse cillium</p>
              <Button className='custom-border !border-0 h-10 w-36 2xl:h-[52] 2xl:w-[172] bg-secondary-500 text-primary-100' title='Try Out Now!' />
            </div>
          </div>
          <div className='col-span-12 md:col-span-6'>
            <div className='social-icons w-fit mx-auto'>
              <ul>
                <li>
                  <img src={ArrowUp} alt='icons' />
                </li>
                <li>
                  <img src={FB} alt='icons' />
                </li>
                <li>
                  <img src={Shoppe} alt='icons' />
                </li>
              </ul>
              <ul className='mt-[16%]'>
                <li>
                  <img src={TikTok} alt='icons' />
                </li>
                <li>
                  <img src={Pinter} alt='' />
                  <p>Coming soon</p>
                </li>
                <li>
                  <img src={Tweet} alt='icons' />
                  <p>Coming soon</p>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Notify} alt='icons' />
                  <p>Coming soon</p>
                </li>
                <li>
                  <img src={BigEye} alt='icons' />
                  <p>Coming soon</p>
                </li>
                <li>
                  <img src={Eye} alt='icons' />
                  <p>Coming soon</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
