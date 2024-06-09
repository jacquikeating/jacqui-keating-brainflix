import LatestComments from "./LatestComments/LatestComments";
import NewComment from "./NewComment/NewComment";
import videoDetails from '/src/data/video-details.json';
import './Comments.scss';

function Comments() {
    let thisVideo = videoDetails[0];

    return (
        <section className="comments">
            <p className="comments__counter">{thisVideo.comments.length} Comments</p>
            <NewComment data={thisVideo} />
            <LatestComments data={thisVideo.comments} />
        </section>
    )
}

export default Comments;