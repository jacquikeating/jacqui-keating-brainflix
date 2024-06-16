import './NextVideos.scss'
import VideoPreview from './VideoPreview.jsx';
// import  videoDetails from '/src/data/video-details.json';

function NextVideos({ filteredVidsArr }) {
    // let vidList = videoDetails.filter((video) => video.id !== currentVid.id)
    
    return (
        <section className="next-videos">
            <p className="next-videos__title">Next Videos</p>
            <ul className="next-videos__list">
                {filteredVidsArr.map((video) => {
                    <VideoPreview key={video.id} title={video.title} image={video.image} channel={video.channel} id={video.id} setCurrentVid={setCurrentVid}/>
            })}
            </ul>
        </section>
    )
}

export default NextVideos;