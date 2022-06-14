import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Button from "../../components/button/Button";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-left">
        <div className="login-left__logo">
          <Logo />
        </div>

        <p className="login-left__title">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="login-right">
        <div className="login-right__box">
          <div className="login-right__box-input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email address or phone number"
            />
          </div>
          <div className="login-right__box-input">
            <input type="password" name="" id="" placeholder="Password" />
          </div>

          <div className="login-right__box-button">
            <Button primary="primary" title="log in" width="full" />
          </div>

          <div className="login-right__box-button login-right__box-button--border">
            <Button title="forgotten password" width="full" to="/" />
          </div>

          <div className="login-right__box-button">
            <Button
              title="create new account"
              secondary="secondary"
              width="fit-content"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
