import { DownVoteIcon, UpVoteIcon } from '../../icons';
import './Votingbar.scss';

function Votingbar({ type = 'normal' }) {
  return (
    <div className={`votingbar${type === 'small' ? ' small' : ''}`}>
      <button className="upvote">
        <UpVoteIcon />
      </button>
      <div className="vote-count">0</div>
      <button className="downvote">
        <DownVoteIcon />
      </button>
    </div>
  );
}

export default Votingbar;
