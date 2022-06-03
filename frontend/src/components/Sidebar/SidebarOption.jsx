import { Link } from 'react-router-dom';

function SidebarOption({ href, icon, text }) {
  return (
    <Link to={href}>
      <div className="icon">{icon}</div>
      {text}
    </Link>
  );
}

export default SidebarOption;
