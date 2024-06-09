import './VideoPreview.scss';

function VideoPreview({ title, image, channel }) {
    return (
        <li className="video-preview">
            <img className="video-preview__image" src={image} alt="Video thumbnail"/>
            <div className="video-preview__text">
                <p className="video-preview__title">{title}</p>
                <p className="video-preview__channel">{channel}</p>
            </div>
        </li>
    )
}

export default VideoPreview;