import PropTypes from 'prop-types';
import './IconCardMini.css';

export default function IconCardMini({ children, shadow = 'default' }) {
  return <div className={`icon-card-mini ${shadow} `}>{children}</div>;
}

IconCardMini.propTypes = {
  children: PropTypes.element,
  shadow: PropTypes.string,
};
