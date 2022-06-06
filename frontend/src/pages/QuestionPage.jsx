import { useLocation } from 'react-router-dom';

import './QuestionPage.scss';
import Button from '../components/Button/Button';
import Sidebar from '../components/Sidebar/Sidebar';
import Post from '../components/Post/Post';
import AddAnswerForm from '../components/AddAnswer/AddAnswer';

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
          <div className="answers">
            <div className="answers__header">
              <div className="title">7 Answers</div>
              <div className="sort-container">
                Sorted by:
                <select name="sort" id="sort">
                  <option value="scoredesc" selected>
                    Highest Score
                  </option>
                  <option value="modifieddesc">
                    Date modified (newest first)
                  </option>
                  <option value="createddesc">
                    Date created (oldest first)
                  </option>
                </select>
              </div>
            </div>
            <Post />
            <AddAnswerForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default QuestionPage;
