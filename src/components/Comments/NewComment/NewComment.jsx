import "./NewComment.scss";

function NewComment() {
    return (
        <div className="new-comment">
            <img className="new-comment__user-avatar" src="/src/assets/images/Mohan-muruge.jpg" />
            <div className="new-comment__right-subsection">
                <label className="new-comment__label" for="new-comment__text">Join the Conversation</label>
                <textarea className="new-comment__text" id="new-comment__text"></textarea>
                <button className="new-comment__btn">
                    <img src="/src/assets/images/upload.svg" className="new-comment__icon" alt="Speech bubble with plus sign" />
                    Comment
                </button>
            </div>
        </div>
    )
}

export default NewComment;