import { useState } from 'react';
import Button from '../Button/Button';

function CommentAction() {
  const [isShown, setIsShown] = useState(false);

  const showForm = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <div className="comment__actions">
      {!isShown ? (
        <div className="action" onClick={showForm}>
          Add Comment
        </div>
      ) : (
        <>
          <form className="addCommentForm">
            <textarea className="addCommentForm__textarea" />
            <Button primary type="submit">
              Add Comment
            </Button>
          </form>
          <div className="action" onClick={showForm}>
            Close
          </div>
        </>
      )}
    </div>
  );
}

export default CommentAction;
