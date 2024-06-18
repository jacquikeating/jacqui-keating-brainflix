import './Comment.scss'

function Comment({ name, timestamp, text }) {
    let date = new Date(timestamp).toLocaleDateString('en-US');

    return (
        <li className="comment">
            <img className="comment__avatar" src="/src/assets/images/avatar-placeholder.png" alt="User's avatar" />
            <div className="comment__text">
                <p className="comment__username">{name}</p>
                <p className="comment__date">{date}</p>
                <p className="comment__body">{text}</p>
            </div>
        </li>
    );
};

export default Comment;