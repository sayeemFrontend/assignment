import PropTypes from 'prop-types';
import './IconCard.css';

export default function IconCard({ children, shadow = 'default' }) {
  return <div className={`icon-card w-[270px] h-[266px] xl:w-[320px] lg:h-[310px] 2xl:w-[448px] 2xl:h-[423px] p-4 2xl:p-11 ${shadow} `}>{children}</div>;
}

IconCard.propTypes = {
  children: PropTypes.element,
  shadow: PropTypes.string,
};
