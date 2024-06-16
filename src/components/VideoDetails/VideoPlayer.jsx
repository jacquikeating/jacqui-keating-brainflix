import './VideoPlayer.scss';

function VideoPlayer({ selectedVid  }) {
    return (
        <section className="video"> 
            <div className="video__container">
                <video className="video__player" poster={selectedVid.image} controls></video>
            </div>
        </section>
    )
}

export default VideoPlayer;