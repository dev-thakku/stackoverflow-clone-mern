import { Link } from 'react-router-dom';
import './QuestionsFeed.scss';

function QuestionsFeed() {
  return (
    <div className="questionsFeed">
      <div className="question">
        <div className="question__stats">
          <div className="question__statsItem">2 votes</div>
          <div className="question__statsItem">2 answered</div>
          <div className="question__statsItem">25 views</div>
        </div>
        <div className="question__content">
          <h3 className="title">
            <Link to="#">Any tools to optimize a structure size in C?</Link>
          </h3>
          <div className="meta">
            <div className="meta__tags">
              <div className="tag-item">javascript</div>
              <div className="tag-item">react</div>
            </div>
            <div className="meta__userCard">
              <img
                src="https://www.gravatar.com/avatar/361a73875a663c579a85ff1cc5d59ab4?s=32&d=identicon&r=PG&f=1"
                className="profile-image"
              />
              <div className="user-info">John Doe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsFeed;
