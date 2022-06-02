import { useState } from 'react';
import Button from './Button';
import FormControl from './FormControl';
import './RegistrationForm.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

function RegistrationForm() {
  const [formDatam, setFormData] = useState(initialState);

  const handleChange = (e) => {

  };
  return (
    <form className="form">
      <FormControl label="Full name" type="text" placeholder="John Doe" />
      <FormControl label="Email" type="email" placeholder="john@email.com" />
      <FormControl label="Password" type="password" placeholder="password" />
      <FormControl
        label="Confirm Password"
        type="password"
        placeholder="Re enter password"
        hintText="Passwords must contain at least eight characters, including at least 1
          letter and 1 number."
      />
      <div className="form-group">
        <Button fullWidth primary>
          Sign up
        </Button>
      </div>
      <div className="form__caption">
        By clicking “Sign up”, you agree to our terms of service, privacy policy
        and cookie policy
      </div>
    </form>
  );
}

export default RegistrationForm;
