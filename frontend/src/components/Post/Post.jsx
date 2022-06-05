import Tag from '../Tag/Tag';
import Votingbar from '../Votingbar/Votingbar';
import './Post.scss';

function Post({ type, content, tags, votes, createdAt, updatedAt, user }) {
  return (
    <div className="post__container">
      <div className="vote-cell">
        <Votingbar />
      </div>
      <div className="post">
        <div className="post__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          doloremque veritatis, earum aperiam quae voluptatibus quibusdam error
          ratione perspiciatis eligendi reiciendis beatae iusto culpa officiis
          magnam accusantium? Quae, reprehenderit quibusdam.
        </div>
        <div className="post__tags">
          <Tag text="javascript" />
          <Tag text="reactjs" />
          <Tag text="mongodb" />
        </div>
        <div className="post__footer">
          <div className="actions">
            <a href="#" className="action">
              Edit
            </a>
            <a href="#" className="action">
              Delete
            </a>
          </div>
          <div className="meta">
            <div className="meta__date">edited May 5, 2020 at 0:39</div>
            <div className="ques meta__userCard">
              <div className="top">asked May 5, 2020 at 0:29</div>
              <div className="profile">
                <img
                  src="https://i.stack.imgur.com/hS2wp.jpg"
                  alt=""
                  className="profile__photo"
                />
                <div className="profile__name">John Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comment-cell"></div>
    </div>
  );
}

export default Post;
