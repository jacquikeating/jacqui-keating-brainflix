import './VideoInfo.scss';

function VideoInfo({ selectedVid }) {
    selectedVid.timestamp = new Date(selectedVid.timestamp).toLocaleDateString('en-US');

    return (
        <section className="video-info">
            <h1 className="video-info__title">{selectedVid.title}</h1>
            <div className="video-stats">
            <div className="video-stats__section">
                <p className="video-stats__stat video-stats__stat--channel">By {selectedVid.channel}</p>
                <p className="video-stats__stat">{selectedVid.timestamp}</p>
            </div>
            <div className="video-stats__section">
                <p className="video-stats__stat">
                    <img src="/src/assets/images/views.svg" className="video-stats__icon" alt="Views" />
                    {selectedVid.views}</p>
                <p className="video-stats__stat">
                <img src="/src/assets/images/likes.svg" className="video-stats__icon" alt="Likes" />
                    {selectedVid.likes}</p>
            </div>
        </div>
            <p className="video-info__description">{selectedVid.description}</p>
        </section>
    )
}

export default VideoInfo;