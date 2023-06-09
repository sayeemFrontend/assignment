import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ children, title = '', className = '', onClick = () => {} }) {
  return (
    <div tabIndex='0' role='button' aria-pressed='false' onClick={onClick} className={`button ${className}`}>
      <button>{children ? children : title}</button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
