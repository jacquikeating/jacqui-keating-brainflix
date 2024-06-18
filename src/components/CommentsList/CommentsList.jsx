import Comment from '/src/components/Comment/Comment.jsx';
import './CommentsList.scss';

function CommentsList({ commentsArr }) {
    return (
        <ul className="comments-list">
            {commentsArr.map((comment) => (
                <Comment key={comment.id} name={comment.name} timestamp={comment.timestamp} text={comment.comment} />
            ))}
        </ul>
    );
};

export default CommentsList;