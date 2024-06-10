import './Video.css';

function Video({ currentVid }) {
    console.log(currentVid)
        return (
            <section className="video__player">
                        <div className="video__container">
                            <video className="video" poster={currentVid.image} controls></video>
                        </div>
            </section>

    ) 
}
export default Video;