import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './userAva.module.css';
import samurai from '../../../images/samurai.jpg';
import { putUserPhoto } from '../../../API';
import { fetchUserProfile } from '../../../redux/profileReducer';

export default function UserAva({ isOwner, userId }) {
  const dispatch = useDispatch();
  async function handleFile(e) {
    const result = await putUserPhoto(e.target.files[0]);
    if (result === 0) {
      dispatch(fetchUserProfile(userId));
    } else {
      alert(JSON.stringify(result.messages));
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
