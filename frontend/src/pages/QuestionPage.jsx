import { useLocation } from 'react-router-dom';

import './QuestionPage.scss';
import Button from '../components/Button/Button';
import Sidebar from '../components/Sidebar/Sidebar';
import Post from '../components/Post/Post';

function QuestionPage() {
  const location = useLocation();

  const question = location.state.question;

  return (
    <div className="questionpage">
      <Sidebar />
      <main className="questionpage__content">
        <header className="questionpage__header">
          <div className="top">
            <h1>{question.title}</h1>
            <Button primary>Ask Question</Button>
          </div>
          <div className="bottom">
            <div className="bottom__item">
              Asked <span>today</span>
            </div>
            <div className="bottom__item">
              Modified <span>today</span>
            </div>
            <div className="bottom__item">
              Viewed <span>11 times</span>
            </div>
          </div>
        </header>
        <div className="questionpage__main-container">
          <div className="question-container">
            <Post />
          </div>
          <div className="answers"></div>
        </div>
      </main>
    </div>
  );
}

export default QuestionPage;
