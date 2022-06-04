import { useLocation } from 'react-router-dom';

import './QuestionPage.scss';
import Button from '../components/Button/Button';
import Sidebar from '../components/Sidebar/Sidebar';
import QuestionsFeed from '../components/QuestionsFeed/QuestionsFeed';

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
        </header>
        <QuestionsFeed />
      </main>
    </div>
  );
}

export default QuestionPage;
