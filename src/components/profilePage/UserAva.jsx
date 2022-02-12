import React from 'react';
import { useSelector } from 'react-redux';
import style from './profilePage.module.css';
import samurai from '../../images/samurai.jpg';

export default function UserAva() {
  const userAva = useSelector(
    (state) => state.userProfile.userData.photos.large
  );
  return (
    <div className={style.userAva}>
      <img src={userAva || samurai} alt="user ava" />
      <button>Change photo</button>
    </div>
  );
}
