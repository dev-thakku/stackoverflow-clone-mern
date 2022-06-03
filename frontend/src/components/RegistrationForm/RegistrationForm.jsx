import { useState } from 'react';
import Button from '../Button/Button';
import FormControl from '../FormControl/FormControl';
import './RegistrationForm.scss';

const initialForm = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

const initialError = {
  name: '',
  email: '',
  password: '',
};

function RegistrationForm() {
  const [formData, setFormData] = useState(initialForm);

  const [errors, setErrors] = useState(initialError);

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name can't empty",
      }));
      return;
    } else setErrors(initialError);

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email can't empty",
      }));
      return;
    } else setErrors(initialError);

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Enter a valid email',
      }));
      return;
    } else setErrors(initialError);

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password can't empty",
      }));
      return;
    } else setErrors(initialError);

    if (password !== password2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Passwords not match',
      }));
      return;
    } else setErrors(initialError);

    //Do register Stuff
    alert('Registration Done');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormControl
        name="name"
        value={name}
        onChange={handleChange}
        label="Full name"
        type="text"
        placeholder="John Doe"
        error={errors.name}
      />
      <FormControl
        name="email"
        value={email}
        onChange={handleChange}
        label="Email"
        type="email"
        placeholder="john@email.com"
        error={errors.email}
      />
      <FormControl
        name="password"
        value={password}
        onChange={handleChange}
        label="Password"
        type="password"
        placeholder="password"
        error={errors.password}
      />
      <FormControl
        name="password2"
        value={password2}
        onChange={handleChange}
        label="Confirm Password"
        type="password"
        placeholder="Re enter password"
        hintText="Passwords must contain at least eight characters, including at least 1
          letter and 1 number."
        error={errors.password}
      />
      <div className="form-group">
        <Button type="submit" fullWidth primary>
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
