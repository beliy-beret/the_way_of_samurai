import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../../redux/profileReducer';
import style from './profileStyle.module.css';

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
      <img
        className={style.userAva}
        src={
          userData.photos.large ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3Q9EuafHKqLgY91DmUD-Hc1sQCdSP_ms4g&usqp=CAU'
        }
        alt="user ava"
      />
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
