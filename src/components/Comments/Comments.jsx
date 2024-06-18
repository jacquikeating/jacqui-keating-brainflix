import CommentsList from "/src/components/CommentsList/CommentsList";
import NewComment from "/src/components/NewComment/NewComment";
import './Comments.scss';

function Comments({ selectedVid }) {

    return (
        <section className="comments">
            <p className="comments__counter">{selectedVid.comments.length} Comments</p>
            <NewComment />
            <CommentsList commentsArr={selectedVid.comments} />
        </section>
    );
};

export default Comments;