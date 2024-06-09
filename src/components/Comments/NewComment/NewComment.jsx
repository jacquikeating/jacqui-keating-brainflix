import "./NewComment.scss";

function NewComment() {
    return (
        <div className="new-comment">
            <img className="new-comment__user-avatar" src="/src/assets/images/Mohan-muruge.jpg" />
            <div className="new-comment__right-subsection">
                <label className="new-comment__label">Join the Conversation
                    <textarea className="new-comment__text" name="new-comment__text" placeholder="Add a new comment"></textarea>
                </label>
                <button className="new-comment__btn">
                    <img src="/src/assets/images/add_comment.svg" className="new-comment__icon" alt="Speech bubble with plus sign" />
                    Comment
                </button>
            </div>
        </div>
    )
}

export default NewComment;