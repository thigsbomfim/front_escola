import { useState } from 'react';
import {
  FaHome,
  FaPowerOff,
  FaSignInAlt,
  FaUserAlt,
  FaUserEdit,
  FaUserSlash,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as colors from '../../config/colors';
import Delete from '../../services/requests/User/handleDelete';
import Logout from '../../services/requests/User/handleLogout';
import Loading from '../Loading';
import { Nav } from './styled';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const id = useSelector((state) => state.auth.user.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Nav>
        <Loading isLoading={isLoading} />
        <Link to="/">
          <FaHome size={26} />
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/register">
              <FaUserEdit size={28} />
            </Link>
            <Link onClick={(e) => Logout(e, dispatch, navigate)} to="/login">
              <FaPowerOff size={24} />
            </Link>
            <Link
              to="/login"
              onClick={(e) => Delete(e, id, setIsLoading, navigate, dispatch)}
            >
              <FaUserSlash size={24} color={colors.warningColor} />
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">
              <FaUserAlt size={24} />
            </Link>
            <Link to="/login">
              <FaSignInAlt size={24} />
            </Link>
          </>
        )}
      </Nav>
    </>
  );
}

export default Header;
