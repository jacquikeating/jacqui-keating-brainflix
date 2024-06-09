import LatestComments from "./LatestComments/LatestComments";
import NewComment from "./NewComment/NewComment";
import videoDetails from '/src/data/video-details.json';
import './Comments.scss';

function Comments() {
    let thisVideo = videoDetails[0];

    return (
        <section className="comments">
            <NewComment data={thisVideo} />
            <LatestComments data={thisVideo} />
        </section>
    )
}

export default Comments;