import './HomePage.scss';
import Button from '../components/Button/Button';
import Sidebar from '../components/Sidebar/Sidebar';
import QuestionsFeed from '../components/QuestionsFeed/QuestionsFeed';

function HomePage() {
  return (
    <div className="homepage">
      <Sidebar />
      <main className="homepage__content">
        <header className="homepage__header">
          <div className="top">
            <h1>Top Questions</h1>
            <Button primary>Ask Question</Button>
          </div>
        </header>
        <QuestionsFeed />
      </main>
    </div>
  );
}

export default HomePage;
