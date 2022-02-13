import React from 'react';
import { useSelector } from 'react-redux';
import style from './userAva.module.css';
import samurai from '../../../images/samurai.jpg';

export default function UserAva({ isOwner }) {
  async function handleFile(e) {
    console.log(e.target.files[0]);
  }
  const userAva = useSelector(
    (state) => state.userProfile.userData.photos.large
  );

  return (
    <div className={style.userAva}>
      <img src={userAva || samurai} alt="user ava" />
      {isOwner && <label htmlFor="photo">Change photo</label>}
      <input type="file" accept="image/*" id="photo" onChange={handleFile} />
    </div>
  );
}
