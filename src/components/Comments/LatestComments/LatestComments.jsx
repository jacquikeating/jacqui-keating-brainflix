import './LatestComments.scss'
import Comment from './Comment/Comment.jsx'

function LatestComments({data}) {
    return (
        <ul className="comments-list">
            {data.map((comment) => (
                <Comment key={comment.id} name={comment.name} timestamp={comment.timestamp} text={comment.comment} />
            ))}
        </ul>
    )
}

export default LatestComments;