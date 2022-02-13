import React from 'react';
import { useSelector } from 'react-redux';
import style from './userInfo.module.css';

export default function UserInfo({ isOwner, toggleEditMode }) {
  const userData = useSelector((state) => state.userProfile.userData);
  function sortContacts(contacts) {
    let list = [];
    for (let item in contacts) {
      if (contacts[item]) {
        list.push(
          <li key={item}>
            {item}: {contacts[item]}
          </li>
        );
      }
    }
    if (list.length > 0) {
      return list;
    } else {
      return <li>"Sori I`m incognito or don`t know how add contacts )))"</li>;
    }
  }
  return (
    <div className={style.userInfo}>
      {isOwner && (
        <button className={style.editButton} onClick={toggleEditMode}>
          ...
        </button>
      )}
      <h2 className={style.username}>{userData.fullName}</h2>
      <div className={userData.aboutMe ? style.aboutUser : style.disable}>
        <h3>About me:</h3>
        <p>{userData.aboutMe}</p>
      </div>
      <div
        className={userData.lookingForAJob ? style.aboutUser : style.disable}
      >
        <h3>My job:</h3>
        <p>{userData.lookingForAJobDescription}</p>
      </div>
      <div className={style.userContacts}>
        <h3>My contacts:</h3>
        <ul>{sortContacts(userData.contacts)}</ul>
      </div>
    </div>
  );
}
