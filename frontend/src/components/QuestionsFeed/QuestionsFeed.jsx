import './QuestionsFeed.scss';
import QuestionTile from './QuestionTile';

function QuestionsFeed() {
  return (
    <div className="questionsFeed">
      {new Array(40).fill('a').map((_, i) => (
        <QuestionTile key={i} question={question[0]} />
      ))}
    </div>
  );
}

export default QuestionsFeed;

const question = [
  {
    id: 12345,
    title:
      'is there a library or a way to feed an object to and get a typescript type or interface implementation for that object?',
    votes: 2,
    answers: 2,
    views: 25,
    tags: ['javascript', 'react', 'html'],
    user: {
      name: 'John Doe',
      profile_photo: 'https://i.stack.imgur.com/hS2wp.jpg',
    },
  },
];
