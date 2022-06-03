import './RegisterLogin.scss';

import Button from '../components/Button/Button';
import { GoogleIcon } from '../icons';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <main className="auth-main">
      <div className="container">
        <div className="caption">
          Create your Stack Overflow account. It’s free and only takes a minute.
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
          <RegistrationForm />
        </div>
        <div className="bottom-text">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
