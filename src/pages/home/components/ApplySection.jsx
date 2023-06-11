import Button from '../../../components/basic/button/Button';

export default function ApplySection() {
  return (
    <div className='mb-[100px] container md:px-[100px] 2xl:px-[170px] mx-auto'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6'>
        <div className='max-w-[324px] xl:max-w-[540px] 2xl:max-w-[896px] '>
          <p className='mb-3 text-large'>Ullamcorper morbi tincidunt ornare massa eget</p>
          <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </div>
        <Button className='text-small w-[170px] h-10 2xl:w-[219px] 2xl:h-[75px] custom-border !border-0 bg-secondary-500 !text-primary-100' title='Apply' />
      </div>
    </div>
  );
}
