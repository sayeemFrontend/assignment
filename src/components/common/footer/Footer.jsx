import './Footer.css';
import { ReactComponent as Logo } from '../../../assets/icons/logoBlack.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container mx-auto'>
        <div className='max-w-[960px] mx-auto flex flex-wrap flex-col xs:flex-row gap-8 md:gap-4 justify-between'>
          <div className='items-group'>
            <p>Products</p>
            <ul>
              {dataPro?.map((it, i) => (
                <li key={i}>{it.title}</li>
              ))}
            </ul>
          </div>
          <div className='items-group'>
            <p>Company</p>
            <ul>
              {dataCom?.map((it, i) => (
                <li key={i}>{it.title}</li>
              ))}
            </ul>
          </div>
          <div className='items-group'>
            <p>Support</p>
            <ul>
              {dataSup?.map((it, i) => (
                <li key={i}>{it.title}</li>
              ))}
            </ul>
          </div>
          <div className='items-group hidden lg:inline'>
            <span></span>
          </div>
          <div className='items-group'>
            <Logo />

            <ul>
              <p>Tristique senectus et netus et malesuada fames</p>
            </ul>
            <p className='!font-light !text-[15px]'>©2023 Logoipsum. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const dataPro = [{ title: 'Features' }, { title: 'Enterprice' }, { title: 'Innovation' }, { title: 'Offline' }];
const dataCom = [{ title: 'About' }, { title: 'Our Story' }, { title: 'Careers' }];
const dataSup = [{ title: 'Documentation' }, { title: 'Community' }, { title: 'Contact' }, { title: 'FAQ' }];
