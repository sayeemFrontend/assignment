import PropTypes from 'prop-types';
import './IconCard.css';

export default function IconCard({ children, shadow = 'default' }) {
  return <div className={`icon-card w-fit h-fit lg:w-[400px] lg:h-[390px] 2xl:w-[448px] 2xl:h-[423px] p-4 2xl:p-11 ${shadow} `}>{children}</div>;
}

IconCard.propTypes = {
  children: PropTypes.element,
  shadow: PropTypes.string,
};
