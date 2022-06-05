import { Link } from 'react-router-dom';

import './Tag.scss';

function Tag({ text, link = '#', ...props }) {
  return (
    <Link to={link} className="tag-item" {...props}>
      {text}
    </Link>
  );
}

export default Tag;
