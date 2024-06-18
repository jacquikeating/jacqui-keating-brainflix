import './NextVideos.scss';
import VideoPreview from '/src/components/VideoPreview/VideoPreview.jsx';

function NextVideos({ filteredVidsArr }) {    
    return (
        <section className="next-videos">
            <p className="next-videos__title">Next Videos</p>
            <ul className="next-videos__list">
                {filteredVidsArr.map((video) => {
                    return(
                        <VideoPreview key={video.id} title={video.title} image={video.image} channel={video.channel} id={video.id} />
                    )
                })}
            </ul>
        </section>
    );
};

export default NextVideos;