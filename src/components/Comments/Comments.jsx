import CommentsList from "./CommentsList";
import NewComment from "./NewComment";
import './Comments.scss';

function Comments({ currentVid }) {

    return (
        <section className="comments">
            <p className="comments__counter">{currentVid.comments.length} Comments</p>
            <NewComment />
            <CommentsList data={currentVid.comments} />
        </section>
    )
}

export default Comments;