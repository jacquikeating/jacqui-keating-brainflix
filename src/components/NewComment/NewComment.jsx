import axios from 'axios';
import { getSingleVideoDetailsEndpoint } from '/src/utils/api-utils.js';
import "./NewComment.scss";

function NewComment({ selectedVid }) {

    function handleSubmit(event) {
        event.preventDefault();
        postData(event); 
        // Comments can be posted, but the component does not yet automatically re-render
        // For now, must refresh to see new comments
    };

    async function postData(eventRec) {
        try {
            const res = await axios.post(getSingleVideoDetailsEndpoint(selectedVid.id) + "comments/", {
                comment: eventRec.target.newCommentText.value
            });
            eventRec.target.reset();
        } catch (err) {
            console.log("Error", err);
        }
    };

    return (
        <form className="new-comment" onSubmit={handleSubmit}>
            <img className="new-comment__user-avatar" src="/src/assets/images/Mohan-muruge.jpg" alt="Your avatar" />
            <div className="new-comment__right-subsection">
                <label className="new-comment__label">Join the Conversation
                    <textarea className="new-comment__text" name="newCommentText" placeholder="Add a new comment" required></textarea>
                </label>
                <button className="new-comment__btn">
                    <img src="/src/assets/images/add_comment.svg" className="new-comment__icon" alt="Speech bubble with plus sign" />
                    Comment
                </button>
            </div>
        </form>
    )
};

export default NewComment;