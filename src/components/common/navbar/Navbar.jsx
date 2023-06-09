import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as DownArrow } from '../../../assets/icons/downArrow.svg';
import Button from '../../basic/button/Button';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='h-full container flex-wrap flex items-center mx-auto'>
        <ul className='order-1'>
          <Logo className='w-36 mr-2' />
        </ul>
        <ul className='order-3 ml-0 md:ml-auto lg:ml-16 lg:order-2 flex items-center'>
          <ul className=' mr-10 flex items-center'>
            <li className='mr-1 text-secondary-600'>Product</li>
            <li>
              <DownArrow />
            </li>
          </ul>
          <li className='mr-10'>About Us</li>
          <li className='mr-10'> Contacts</li>
        </ul>

        <div className='hidden xs:flex order-2 lg:order-3 ml-auto items-center gap-2'>
          <Button className='mr-4 custom-border px-6 h-10 !border-0 bg-secondary-500 text-primary-100' title='Get Started' />
          <Button className='custom-border px-6 h-10  text-primary-500' title='Login' />
        </div>
      </div>
    </div>
  );
}
