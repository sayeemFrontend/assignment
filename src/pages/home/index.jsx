import TableData from './components/TableData';
import SocialIcons from './components/SocialIcons';
import CardChart from './components/CardChart';
import FBChartWrapper from './components/FBChartWrapper';
import BarChart from './components/BarChart';
import ColorTable from './components/ColorTable';
import HeroSection from './components/HeroSection';
import IconSection from './components/IconSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TableData />
      <SocialIcons />
      <IconSection />
      <CardChart />
      <FBChartWrapper />
      <BarChart />
      <ColorTable />
    </>
  );
}
