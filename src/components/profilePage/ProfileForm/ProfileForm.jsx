import React from 'react';
import { useForm } from 'react-hook-form';
import style from './profileForm.module.css';

export default function ProfileForm({ toggleEditMode }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(formValues) {
    console.log(formValues);
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
          {...register('about')}
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
            {...register('website')}
          />
        </div>
      </div>
      <button onClick={onSubmit}>Save</button>
      <button onClick={toggleEditMode}>Close</button>
    </form>
  );
}
