import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUserList } from '../../redux/usersReducer';
import ReactPaginate from 'react-paginate';
import User from './User';
import style from './usersStyle.module.css';

export default function UsersPage() {
  const dispatch = useDispatch();
  const { userList, pageSize, totalUsers, currentPage } = useSelector(
    (state) => state.users
  );
  const totalPages = Math.ceil(totalUsers / pageSize);
  useEffect(() => {
    dispatch(fetchUserList(currentPage));
  }, [currentPage, dispatch]);
  console.log(userList);
  return (
    <section className={style.usersPage}>
      <div className={style.header}>
        <h2 className={style.title}>All users</h2>
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          initialPage={currentPage}
          containerClassName={style.pagination}
          activeClassName={style.selected}
          pageClassName={style.page}
        />
      </div>
      {userList?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
}
