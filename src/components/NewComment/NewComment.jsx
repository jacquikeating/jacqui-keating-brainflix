import axios from 'axios';
import { useState, useEffect } from 'react';
import { getSingleVideoDetailsEndpoint } from '/src/utils/api-utils.js';
import "./NewComment.scss";

function NewComment({ selectedVid, setSelectedVid }) {
    console.log(selectedVid)
    // const [videoDetails, setVideoDetails] = useState(selectedVid);

    const getCommentsData = async() => {
        try {
            let response = await axios.get(getSingleVideoDetailsEndpoint(selectedVid.id));
        } catch (error) {
            console.error(error);
        };
    };

    function handleSubmit(event) {
        event.preventDefault();
        postData(event);
        const updatedVideoDetails = getCommentsData();
        console.log(updatedVideoDetails)
        // setSelectedVid(updatedVideoDetails);
        // alert("Comment submitted");
        
    }

    async function postData(eventRec) {
        try {
            const res = await axios.post(getSingleVideoDetailsEndpoint(selectedVid.id) + "comments/", {
                comment: eventRec.target.newCommentText.value
            });
            // console.log(res);
            eventRec.target.reset();
            console.log(res)
        } catch (err) {
            console.log("Error", err);
        }
    }

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
}

export default NewComment;