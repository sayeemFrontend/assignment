import Footer from '../components/common/footer/Footer';
import Navbar from '../components/common/navbar/Navbar';
import Home from '../pages/home';

export default function Layout() {
  return (
    <div className=''>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
