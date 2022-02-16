import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { deleteAuthUserData } from '../../redux/authReducer';
import { deleteUserProfile } from '../../redux/profileReducer';
import './appLayout.css';

export default function AppLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, userData } = useSelector((state) => state.authUser);
  function Logout() {
    try {
      dispatch(deleteAuthUserData());
      dispatch(deleteUserProfile());
      navigate('/');
    } catch {
      console.log('Logout is broken');
    }
  }

  return (
    <>
      <header>
        <span>The way of the Samurai</span>
        {isAuth ? (
          <button onClick={Logout}>Sing Out</button>
        ) : (
          <button onClick={() => navigate('auth')}>Sing In</button>
        )}
      </header>
      <aside>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={isAuth ? `/id=${userData.id}` : 'auth'}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="users">All users</NavLink>
          </li>
        </ul>
      </aside>
      <div className="pages">
        <Outlet />
      </div>
      <footer>
        <h2>Made in Russian )</h2>
      </footer>
    </>
  );
}
