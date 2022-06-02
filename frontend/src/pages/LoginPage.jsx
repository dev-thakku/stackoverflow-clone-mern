import './RegisterLogin.scss';

import Button from '../components/Button';
import { GoogleIcon, StackIcon } from '../icons';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <main className="register">
      <div className="container">
        <div className="logo">
          <StackIcon />
        </div>
        <div className="login-buttons">
          <Button normal fullWidth>
            <div className="icon">
              <GoogleIcon />
            </div>
            Sign up with Google
          </Button>
        </div>
        <div className="formContainer">
          <LoginForm />
        </div>
        <div className="bottom-text">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
