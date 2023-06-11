import { ReactComponent as Green } from '../../../assets/icons/greenBar.svg';
import { ReactComponent as Yellow } from '../../../assets/icons/yellowBar.svg';
import fb from '../../../assets/icons/fb.svg';
import upArrow from '../../../assets/icons/upArrowColor.svg';
import shopee from '../../../assets/icons/shoppe.svg';

export default function BarChart() {
  return (
    <div className='mb-[100px] container mx-auto'>
      <div className='flex items-center flex-wrap flex-row justify-between gap-6'>
        <div className='w-[500px]'>
          <p className='text-large'>Consectetur adipiscing elit</p>
          <p className='mt-4 paragraph'>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim viverra</p>
        </div>
        <div className='flex items-center gap-4'>
          <ul className=''>
            <li className='custom-shadow w-[120px] h-[124px] 2xl:w-[180px] 2xl:h-[190px] flex justify-center items-center p-2'>
              <Green className='h-full' />
            </li>
            <p className='text-[#58BF73] px-2 py-1 mt-4  text-center font-medium text-sm default-shadow rounded'>First Touch</p>
          </ul>
          <ul className=''>
            <li className='custom-shadow w-[120px] h-[124px] 2xl:w-[180px] 2xl:h-[190px] flex justify-center items-center p-2'>
              <Yellow className='h-full' />
            </li>
            <p className='text-[#FFC646] px-2 py-1 mt-4 text-center font-medium  text-sm default-shadow rounded'>Last Touch</p>
          </ul>
        </div>
        <div className='custom-shadow text-primary-700 w-[120px] h-[124px] 2xl:w-[180px] 2xl:h-[190px] list-none rounded-full flex items-center justify-center flex-col p-2'>
          <li className='text-2xl font-medium'>3</li>
          <p className='text-sm 2xl:text-base text-center'>+Custom ones</p>
        </div>
      </div>
      <div className='mt-[100px] text-center max-w-[446px] 2xl:max-w-[1120px] mx-auto'>
        <p className='mb-3 text-large'>Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci sagittis eu volutpat odio</p>
        <p className='paragraph w-3/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        <div className='mt-8'>
          <ul className='icons-wrapper w-fit mx-auto flex gap-4'>
            <li className='w-fit my-auto'>
              <img src={fb} alt='icons' />
            </li>

            <div className='flex flex-col gap-4'>
              <li>
                <img src={upArrow} alt='icons' />
              </li>

              <li>
                <img src={shopee} alt='icons' />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
