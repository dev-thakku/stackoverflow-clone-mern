import './RegisterPage.scss';

import Button from '../components/Button';
import GoogleIcon from '../icons/GoogleIcon';
import RegistrationForm from '../components/RegistrationForm';

function RegisterPage() {
  return (
    <main className="register">
      <div className="register__container">
        <div className="register__caption">
          Create your Stack Overflow account. It’s free and only takes a minute.
        </div>
        <div className="register__buttons">
          <Button normal fullWidth>
            <div className="icon">
              <GoogleIcon />
            </div>
            Sign up with Google
          </Button>
        </div>
        <div className="register__formContainer">
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
