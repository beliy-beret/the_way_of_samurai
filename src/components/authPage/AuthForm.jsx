import React from 'react';
import { useSelector } from 'react-redux';
import style from './authForm.module.css';

export default function AuthForm({
  handleSubmit,
  onSubmit,
  errors,
  register,
  isValid,
}) {
  const { captcha, error } = useSelector((state) => state.authUser);
  return (
    <form className={style.authForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        id="email"
        placeholder="Email"
        type="text"
        {...register('email', {
          required: {
            value: true,
            message: 'This field is required',
          },
        })}
      />
      {errors.email && (
        <p className={style.errorMessage}>{errors.email.message}</p>
      )}
      <input
        id="password"
        placeholder="Password"
        type="password"
        {...register('password', {
          required: {
            value: true,
            message: 'This field is required',
          },
          minLength: { value: 3, message: 'Minimal length 8 symbol' },
        })}
      />
      {errors.password && (
        <p className={style.errorMessage}>{errors.password.message}</p>
      )}
      <div className={style.rememberBlock}>
        <input id="remember" type="checkbox" {...register('rememberMe')} />
        <label htmlFor="remember">Remember me</label>
      </div>
      {error && <p className={style.errorMessage}>{error}</p>}
      <button className={style.submit} disabled={!isValid}>
        Sing in
      </button>

      {captcha && (
        <div className={style.captchaBlock}>
          <input
            type="text"
            placeholder="Captcha text"
            {...register('captcha')}
          />
          <img className={style.captcha} src={captcha} alt="captcha" />
        </div>
      )}
    </form>
  );
}
