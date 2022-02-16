import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './userAva.module.css';
import samurai from '../../../images/samurai.jpg';
import {
  changeUserPhoto,
  fetchUserProfile,
} from '../../../redux/profileReducer';

export default function UserAva({ isOwner, userId }) {
  const dispatch = useDispatch();
  async function handleFile(e) {
    const res = await dispatch(changeUserPhoto(e.target.files[0]));
    if (res.meta.requestStatus === 'fulfilled') {
      await dispatch(fetchUserProfile(userId));
    }
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
