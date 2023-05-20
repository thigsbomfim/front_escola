import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children, isClosed }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate to={`/login`} state={{ prevPath: location.pathname }} replace />
    );
  } else {
    return children;
  }
};

Private.defaultProps = {
  isClosed: false,
};

Private.propTypes = {
  children: PropTypes.element,
  isClosed: PropTypes.bool,
};

export default Private;
