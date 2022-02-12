import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../../redux/profileReducer';
import style from './profilePage.module.css';
import UserAva from './UserAva';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const userId = useParams('id').id;
  const { userData, userStatus } = useSelector((state) => state.userProfile);
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
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  return (
    <section className={style.user}>
      <UserAva userAva={userData.photos.large} />
      <h2 className={style.username}>{userData.fullName}</h2>
      <span className={userStatus ? style.userStatus : style.disable}>
        {userStatus}
      </span>
      <div className={userData.aboutMe ? style.aboutUser : style.disable}>
        <h3>About me:</h3>
        <p>{userData.aboutMe}</p>
      </div>
      <div className={style.userContacts}>
        <h3>My contacts:</h3>
        <ul>{sortContacts(userData.contacts)}</ul>
      </div>
    </section>
  );
}
