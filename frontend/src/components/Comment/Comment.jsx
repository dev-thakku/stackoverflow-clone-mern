import './Comment.scss';
import { DownVoteIcon, UpVoteIcon } from '../../icons';
import Votingbar from '../Votingbar/Votingbar';

function Comment({ comment, user, time, votes }) {
  return (
    <div className="comment">
      <div className="comment__voting">
        <Votingbar type="small" />
      </div>
      <div className="comment__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        quidem illum quam ipsum aliquid animi ex, sit optio laudantium
        temporibus sunt vitae. Magnam, voluptate eum. At exercitationem officiis
        ipsum suscipit provident perspiciatis inventore, iure mollitia
        repellendus, quia quos obcaecati nobis. –{' '}
        <span className="author">Peter Cordes</span>{' '}
        <span className="time">May 19 at 15:13</span>
      </div>
    </div>
  );
}

export default Comment;
