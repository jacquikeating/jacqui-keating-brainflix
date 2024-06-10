import LatestComments from "./LatestComments/LatestComments";
import NewComment from "./NewComment/NewComment";
import './Comments.scss';

function Comments({ currentVid }) {

    return (
        <section className="comments">
            <p className="comments__counter">{currentVid.comments.length} Comments</p>
            <NewComment />
            <LatestComments data={currentVid.comments} />
        </section>
    )
}

export default Comments;