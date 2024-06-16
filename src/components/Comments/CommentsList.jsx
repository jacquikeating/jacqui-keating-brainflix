import './CommentsList.scss'
import Comment from './Comment.jsx'

function CommentsList({data}) {
    return (
        <ul className="comments-list">
            {data.map((comment) => (
                <Comment key={comment.id} name={comment.name} timestamp={comment.timestamp} text={comment.comment} />
            ))}
        </ul>
    )
}

export default CommentsList;