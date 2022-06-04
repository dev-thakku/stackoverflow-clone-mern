import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ScrollToTop from './components/utils/ScrollToTop';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import QuestionPage from './pages/QuestionPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/question/:id" element={<QuestionPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
