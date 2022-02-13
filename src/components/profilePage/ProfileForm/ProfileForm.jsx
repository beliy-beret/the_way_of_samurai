import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { putUserData } from '../../../API';
import { fetchUserProfile } from '../../../redux/profileReducer';

import style from './profileForm.module.css';

export default function ProfileForm({ toggleEditMode }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile.userData);
  const { register, handleSubmit } = useForm();
  async function onSubmit(formValues) {
    const result = await putUserData(formValues, userData.userId);
    if (result === 0) {
      dispatch(fetchUserProfile(userData.userId));
      toggleEditMode();
    } else {
      alert('Oops, some error !');
    }
  }
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.field}>
        <label className={style.fieldTitle} htmlFor="fullName">
          Full name:
        </label>
        <input
          className={style.fieldInputArea}
          id="fullName"
          type="text"
          defaultValue={userData.fullName}
          {...register('fullName')}
        />
      </div>
      <div className={style.field}>
        <label className={`${style.fieldTitle} ${style.about}`} htmlFor="about">
          About me:
        </label>
        <textarea
          className={style.fieldInputArea}
          id="about"
          type="text"
          defaultValue={userData.aboutMe}
          {...register('about')}
        />
      </div>
      <div className={`${style.field} ${style.job}`}>
        <label className={style.fieldTitle} htmlFor="lookingForAJob">
          Looking for a job
        </label>
        <input
          className={style.fieldInputArea}
          id="lookingForAJob"
          type="checkbox"
          {...register('lookingForAJob')}
        />
      </div>
      <div className={style.field}>
        <label
          className={`${style.fieldTitle} ${style.about}`}
          htmlFor="aboutJob"
        >
          About job:
        </label>
        <textarea
          className={style.fieldInputArea}
          id="about"
          type="text"
          defaultValue={userData.lookingForAJobDescription}
          {...register('aboutJob')}
        />
      </div>
      <div className={style.contacts}>
        <h2 className={style.contactsTitle}>Contacts:</h2>
        <div className={style.field}>
          <label className={style.fieldTitle} htmlFor="github">
            Github:
          </label>
          <input
            className={style.fieldInputArea}
            id="github"
            type="text"
            defaultValue={userData.contacts.github}
            {...register('github')}
          />
        </div>
        <div className={style.field}>
          <label className={style.fieldTitle} htmlFor="vk">
            VK:
          </label>
          <input
            className={style.fieldInputArea}
            id="vk"
            type="text"
            defaultValue={userData.contacts.vk}
            {...register('vk')}
          />
        </div>
        <div className={style.field}>
          <label className={style.fieldTitle} htmlFor="facebook">
            Facebook:
          </label>
          <input
            className={style.fieldInputArea}
            id="facebook"
            type="text"
            defaultValue={userData.contacts.facebook}
            {...register('facebook')}
          />
        </div>
        <div className={style.field}>
          <label className={style.fieldTitle} htmlFor="instagram">
            Instagram:
          </label>
          <input
            className={style.fieldInputArea}
            id="instagram"
            type="text"
            defaultValue={userData.contacts.instagram}
            {...register('instagram')}
          />
        </div>
        <div className={style.field}>
          <label className={style.fieldTitle} htmlFor="twitter">
            Twitter:
          </label>
          <input
            className={style.fieldInputArea}
            id="twitter"
            type="text"
            defaultValue={userData.contacts.twitter}
            {...register('twitter')}
          />
        </div>
        <div className={style.field}>
          <label className={style.fieldTitle} htmlFor="website">
            Website:
          </label>
          <input
            className={style.fieldInputArea}
            id="website"
            type="text"
            defaultValue={userData.contacts.website}
            {...register('website')}
          />
        </div>
      </div>

      <button onClick={onSubmit} type="submit">
        Save
      </button>
      <button onClick={toggleEditMode}>Close</button>
    </form>
  );
}
