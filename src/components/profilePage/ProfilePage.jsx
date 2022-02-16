import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../../redux/profileReducer';
import UserInfo from './UserInfo/UserInfo';
import Preloader from '../Preloader/Preloader';
import UserAva from './UserAva/UserAva';
import ProfileForm from './ProfileForm/ProfileForm';
import style from './profilePage.module.css';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const userId = useParams('id').id;
  const authUserId = useSelector((state) => state.authUser.userData?.id);
  const isLoading = useSelector((state) => state.userProfile.isLoading);
  const isOwner = Number(userId) === Number(authUserId);
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  return (
    <section className={style.user}>
      <div className={style.userAva}>
        <UserAva isOwner={isOwner} userId={authUserId} />
      </div>
      <div className={style.userInfo}>
        {!editMode ? (
          <UserInfo isOwner={isOwner} toggleEditMode={toggleEditMode} />
        ) : (
          <ProfileForm toggleEditMode={toggleEditMode} />
        )}
      </div>
      {isLoading && <Preloader />}
    </section>
  );
}
