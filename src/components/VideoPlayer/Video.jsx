import './Video.scss';

function Video({ currentVid, }) {
        return (
            <section className="video">
                        <div className="video__container">
                            <video className="video__player" poster={currentVid.image} controls></video>
                        </div>
            </section>
    ) 
}
export default Video;