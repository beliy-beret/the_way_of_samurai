import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUserProfile,
  updateUserProfile,
} from '../../../redux/profileReducer';

import style from './profileForm.module.css';

export default function ProfileForm({ toggleEditMode }) {
  const dispatch = useDispatch();
  const { userData, error } = useSelector((state) => state.userProfile);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  async function onSubmit(formValues) {
    const data = {
      formValues,
      userId: userData.userId,
    };
    const res = await dispatch(updateUserProfile(data));
    if (res.meta.requestStatus === 'fulfilled') {
      await dispatch(fetchUserProfile(userData.userId));
      toggleEditMode();
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
          {...register('fullName', {
            required: {
              value: true,
              message: 'This field is required !',
            },
          })}
        />
        {errors.fullName && (
          <p className={style.errorMessage}>{errors.fullName.message}</p>
        )}
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
          {...register('about', {
            required: {
              value: true,
              message: 'This field is required !',
            },
          })}
        />
        {errors.about && (
          <p className={style.errorMessage}>{errors.about.message}</p>
        )}
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
          {...register('aboutJob', {
            required: {
              value: true,
              message: 'This field is required !',
            },
          })}
        />
        {errors.aboutJob && (
          <p className={style.errorMessage}>{errors.aboutJob.message}</p>
        )}
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
      {error && <p className={style.errorMessage}>{error}</p>}
      <button onClick={onSubmit} type="submit" disabled={!isValid}>
        Save
      </button>
      <button onClick={toggleEditMode}>Cancel</button>
    </form>
  );
}
