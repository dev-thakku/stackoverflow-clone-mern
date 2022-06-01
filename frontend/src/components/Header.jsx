import Button from './Button';
import './Header.scss';
import Logo from './Logo';

function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__center">
        <div className="search__bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header__end">
        <div className="header__profile">
          <img
            src="https://graph.facebook.com/977417892653210/picture?type=large"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
