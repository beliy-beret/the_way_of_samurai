import { Link } from 'react-router-dom';
import style from './user.module.css';

export default function User({ user }) {
  return (
    <div className={style.user}>
      <img
        className={style.userAva}
        src={
          user.photos.small ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3Q9EuafHKqLgY91DmUD-Hc1sQCdSP_ms4g&usqp=CAU'
        }
        alt="user ava"
      />
      <h3 className={style.username}>{user.name}</h3>
      <p className={style.userStatus}>{user.status}</p>
      <Link className={style.link} to={`/id=${user.id}`}>
        go to profile
      </Link>
    </div>
  );
}
