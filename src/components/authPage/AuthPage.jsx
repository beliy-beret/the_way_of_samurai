import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  deleteCaptcha,
  fetchAuthUserData,
  fetchCaptcha,
} from '../../redux/authReducer';
import AuthForm from './AuthForm';
import style from './authForm.module.css';

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  async function onSubmit(formValues) {
    const res = await dispatch(fetchAuthUserData(formValues));
    if (res.meta.requestStatus === 'rejected') {
      dispatch(fetchCaptcha());
    } else {
      navigate(`/id=${res.payload.id}`);
      dispatch(deleteCaptcha());
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
