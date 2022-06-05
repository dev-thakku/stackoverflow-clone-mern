import { Link, useNavigate } from 'react-router-dom';
import Tag from '../Tag/Tag';

function QuestionTile({ question }) {
  const naviagte = useNavigate();

  return (
    <div className="question">
      <div className="question__stats">
        <div className="question__statsItem">{question.votes} votes</div>
        <div className="question__statsItem answered">
          {question.answers} answered
        </div>
        <div className="question__statsItem">{question.views} views</div>
      </div>
      <div className="question__content">
        <h3
          className="title"
          onClick={() =>
            naviagte(`/question/${question.id}`, { state: { question } })
          }
        >
          <Link to={`/question/${question.id}`}>{question.title}</Link>
        </h3>
        <div className="meta">
          <div className="meta__tags">
            {question.tags.map((tag, i) => (
              <Tag text={tag} key={i} />
            ))}
          </div>
          <div className="meta__userCard">
            <img
              src={question.user.profile_photo}
              className="profile-image"
              alt=""
            />
            <div className="user-info">{question.user.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionTile;
