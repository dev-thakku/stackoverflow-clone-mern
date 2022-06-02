import { useState } from 'react';
import Button from './Button';
import FormControl from './FormControl';
import './LoginForm.scss';

const initialForm = {
  email: '',
  password: '',
};

const initialError = {
  email: '',
  password: '',
};

function LoginForm() {
  const [formData, setFormData] = useState(initialForm);

  const [errors, setErrors] = useState(initialError);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    alert('Logged In');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormControl
        type="text"
        name="email"
        label="Email"
        placeholder="john@mail.com"
        value={email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormControl
        type="password"
        name="password"
        label="Password"
        placeholder="password"
        value={password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className="form-group">
        <Button type="submit" fullWidth primary>
          Log in
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
