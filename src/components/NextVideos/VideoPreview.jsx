import { Link } from "react-router-dom";
import './VideoPreview.scss';

function VideoPreview({ title, image, channel, id }) {
    return (
        <li id={id}>
            <Link to={`/videos/${id}`} className="video-preview">
                <img className="video-preview__image" src={image} alt="Video thumbnail" />
                <div className="video-preview__text">
                    <p className="video-preview__title">{title}</p>
                    <p className="video-preview__channel">{channel}</p>
                </div>
            </Link>
        </li>
    );
};

export default VideoPreview;