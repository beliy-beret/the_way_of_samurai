import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './appLayoutStyle.css';

export default function AppLayout() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authUser.isAuth);
  return (
    <>
      <header>
        <span>The way of the Samurai</span>
        <button onClick={() => navigate('auth')}>
          {auth ? 'Sing Out' : 'Sing In'}
        </button>
      </header>
      <aside>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="id">Profile</NavLink>
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
