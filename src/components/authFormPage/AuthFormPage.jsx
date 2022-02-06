import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postAuthData } from '../../API';
import { fetchAuthUserData, fetchCaptcha } from '../../redux/authReducer';
import style from './authFormStyle.module.css';

export default function App() {
  const captcha = useSelector((state) => state.authUser.captcha);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  function submitError() {
    setError('form', { message: 'Incorrect email or password !' });
  }

  async function onSubmit(formValues) {
    const result = await postAuthData(
      formValues.email,
      formValues.password,
      formValues.remember,
      formValues.captcha
    );
    switch (result.resultCode) {
      case 1:
        submitError();
        reset('password');
        break;
      case 10:
        submitError();
        reset('password');
        dispatch(fetchCaptcha());
        break;
      default:
        dispatch(fetchAuthUserData());
        clearErrors();
        break;
    }
  }
  console.log(errors);
  return (
    <section className={style.authPage}>
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
            minLength: { value: 8, message: 'Minimal length 8 symbol' },
          })}
        />
        {errors.password && (
          <p className={style.errorMessage}>{errors.password.message}</p>
        )}
        <div className={style.rememberBlock}>
          <input id="remember" type="checkbox" {...register('remember')} />
          <label htmlFor="remember">Remember me</label>
        </div>
        {errors.form && (
          <p className={style.errorMessage}>{errors.form.message}</p>
        )}
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
    </section>
  );
}
