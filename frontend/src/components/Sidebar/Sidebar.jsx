import { HomeIcon, QuestionIcon, TagIcon } from '../../icons';
import './Sidebar.scss';
import SidebarOption from './SidebarOption';

function index() {
  return (
    <aside className="sidebar">
      <ul className="sidebar__options">
        <li className="sidebar__option selected">
          <SidebarOption href="/" icon={<HomeIcon />} text="Home" />
        </li>
        <li className="sidebar__option">
          <SidebarOption
            href="/questions"
            icon={<QuestionIcon />}
            text="Questions"
          />
        </li>
        <li className="sidebar__option">
          <SidebarOption href="/tags" icon={<TagIcon />} text="Tags" />
        </li>
      </ul>
    </aside>
  );
}

export default index;
