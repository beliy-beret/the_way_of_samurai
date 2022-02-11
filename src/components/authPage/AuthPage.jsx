import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postAuthData } from '../../API';
import { fetchAuthUserData, fetchCaptcha } from '../../redux/authReducer';
import AuthForm from './AuthForm';
import style from './authForm.module.css';

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  function submitError(error) {
    setError('form', { message: error });
  }

  async function onSubmit(formValues) {
    const result = await postAuthData(
      formValues.email,
      formValues.password,
      formValues.remember,
      formValues.captcha
    );
    if (result.resultCode === 1) {
      submitError(result.messages[0]);
    } else if (result.resultCode === 10) {
      submitError({ form: result.messages[0] });
      dispatch(fetchCaptcha());
    } else {
      dispatch(fetchAuthUserData());
      navigate(`/id=${result.data.userId}`);
    }
  }

  return (
    <section className={style.authPage}>
      <AuthForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isValid={isValid}
      />
    </section>
  );
}
