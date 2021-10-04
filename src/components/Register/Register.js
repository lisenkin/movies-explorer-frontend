import AuthPage from '../AuthPage/AuthPage';
import './Register.css';

function Register() {
  return (
    <AuthPage
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      path="/signin"
      linkText="Войти"
    >
      <label className="auth__field">
        Имя
        <input
          name="name"
          type="text"
          className="auth__input"
          defaultValue="Мария"
          minLength="2"
          maxLength="30"
          required
        />
      </label>
      <span className="auth__error"></span>
      <label htmlFor="email" className="auth__field">
        E-mail
        <input
          name="email"
          type="email"
          className="auth__input auth__input_type_email"
          defaultValue="pochta@yandex.ru"
          required
        />
      </label>
      <span className="auth__error"></span>
      <label className="auth__field">
        Пароль
        <input
          name="password"
          type="password"
          className="auth__input auth__input_type_error"
          defaultValue="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          required
        />
      </label>
      <span className="auth__error">Что-то пошло не так...</span>
    </AuthPage>
  );
}

export default Register;
