import './VideoPreview.scss';
import  videoDetails from '/src/data/video-details.json';

function VideoPreview({ title, image, channel, id, setCurrentVid }) {

    // function switchVideo(e) {
    //     let vidId;
    //     /* Explanation: Video ID is stored as the ID of the <li>. 
    //         This conditional ensures we get the <li>'s ID, 
    //         even when clicking a descendant. */
    //     switch (e.target.nodeName) {
    //         case "LI":
    //             vidId = e.target.id;
    //             break;
    //         case "IMG":
    //             vidId = e.target.parentElement.id;
    //             break;
    //         case "DIV":
    //             vidId = e.target.parentElement.id;
    //             break;
    //         case "P":
    //             vidId = e.target.parentElement.parentElement.id;
    //             break;
    //     }
    //     let targetVid = videoDetails.find((video) => video.id === vidId);
    //     setCurrentVid(targetVid);
    // }

    return (
        <li className="video-preview" id={id}>
            <img className="video-preview__image" src={image} alt="Video thumbnail" />
            <div className="video-preview__text">
                <p className="video-preview__title">{title}</p>
                <p className="video-preview__channel">{channel}</p>
            </div>
        </li>
    )
}

export default VideoPreview;