import { DownVoteIcon, UpVoteIcon } from '../../icons';
import './Votingbar.scss';

function Votingbar() {
  return (
    <div className="votingbar">
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
