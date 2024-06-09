import './NextVideos.scss'
import VideoPreview from './VideoPreview/VideoPreview.jsx';
import  videoDetails from '/src/data/video-details.json';

function NextVideos() {
    console.log(videoDetails)
    return (
        <section className="next-videos">
            <p className="next-videos__title">Next Videos</p>
            <ul className="next-videos__list">
                {videoDetails.map((video) => (
                    <VideoPreview key={video.id} title={video.title} image={video.image} channel={video.channel} />
                ))}
            </ul>
        </section>
    )
}

export default NextVideos;