import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUserList } from '../../redux/usersReducer';
import User from './User';
import style from './usersStyle.module.css';

export default function UsersPage() {
  const dispatch = useDispatch();
  const { currentPage, userList } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUserList(currentPage));
  }, [currentPage, dispatch]);
  console.log(userList);
  return (
    <section className={style.usersPage}>
      <h2 className={style.title}>All users</h2>
      {userList?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
}
