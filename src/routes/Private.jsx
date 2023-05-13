import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function Private({ children }) {
  const isLoggedIn = false;

  return isLoggedIn ? children : <Navigate to="/" replace />;
}

Private.propTypes = {
  children: PropTypes.element,
};

export default Private;
