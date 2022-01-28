import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postAuthData } from '../../API';
import { fetchAuthUserData } from '../../redux/authReducer';
import style from './authFormStyle.module.css';

export default function App() {
  const captcha = useSelector((state) => state.authUser.captcha);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(formValues) {
    const result = await postAuthData(
      formValues.email,
      formValues.password,
      formValues.remember,
      formValues.captcha
    );
    if (result.resultCode === 0) {
      await dispatch(fetchAuthUserData());
    }
  }

  return (
    <section className={style.authPage}>
      <form className={style.authForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          id="email"
          placeholder="Email"
          type="text"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className={style.errorMessage}>This field is required</span>
        )}
        <input
          id="password"
          placeholder="Password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && (
          <span className={style.errorMessage}>This field is required</span>
        )}
        <div className={style.rememberBlock}>
          <input id="remember" type="checkbox" {...register('remember')} />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className={style.submit}>Sing in</button>
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
    </section>
  );
}
