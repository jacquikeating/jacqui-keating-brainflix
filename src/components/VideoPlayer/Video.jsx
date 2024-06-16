import './Video.scss';

function Video({ selectedVid }) {
        return (
            <section className="video">
                        <div className="video__container">
                            <video className="video__player" poster={selectedVid.image} controls></video>
                        </div>
            </section>
    ) 
}
export default Video;