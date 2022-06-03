import { useNavigate } from 'react-router-dom';

import './Header.scss';
import Logo from '../utils/Logo';
import { SearchIcon, StackIcon } from '../../icons';
import Button from '../Button/Button';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate('/')}>
        <Logo id="logo-large" />
        <StackIcon id="logo-small" />
      </div>

      <div className="header__center">
        <div className="search__bar">
          <div className="icon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header__end">
        {/* <div className="header__profile">
          <img
            src="https://graph.facebook.com/977417892653210/picture?type=large"
            alt="profile"
          />
        </div> */}
        <Button secondary onClick={() => navigate('/login')}>
          Log in
        </Button>
        <Button primary onClick={() => navigate('/register')}>
          Sign up
        </Button>
      </div>
    </header>
  );
}

export default Header;
