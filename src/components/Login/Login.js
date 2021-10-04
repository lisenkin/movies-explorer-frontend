import AuthPage from '../AuthPage/AuthPage';
import './Login.css';

function Login() {
  return (
    <AuthPage
      title="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      path="/signup"
      linkText="Регистрация"
    >
      <label className="auth__field">
        E-mail
        <input
          name="email"
          type="email"
          className="auth__input"
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
          className="auth__input"
          required
        />
      </label>
      <span className="auth__error"></span>
    </AuthPage>
  );
}

export default Login;