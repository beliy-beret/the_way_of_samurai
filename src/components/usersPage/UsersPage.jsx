import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUserList, setCurrentPage } from '../../redux/usersReducer';
import ReactPaginate from 'react-paginate';
import User from './User/User';
import Preloader from '../Preloader/Preloader';
import style from './usersPage.module.css';

export default function UsersPage() {
  const dispatch = useDispatch();
  const { userList, pageSize, totalUsers, currentPage, isLoading } =
    useSelector((state) => state.users);
  const totalPages = Math.ceil(totalUsers / pageSize);

  async function setActivePage(e) {
    await dispatch(setCurrentPage(e.selected + 1));
  }

  useEffect(() => {
    dispatch(fetchUserList(currentPage));
  }, [currentPage, dispatch]);

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
          initialPage={currentPage - 1}
          containerClassName={style.pagination}
          activeClassName={style.selected}
          pageClassName={style.page}
          onPageChange={setActivePage}
        />
      </div>
      {userList?.map((user) => (
        <User key={user.id} user={user} />
      ))}
      {isLoading && <Preloader />}
    </section>
  );
}
