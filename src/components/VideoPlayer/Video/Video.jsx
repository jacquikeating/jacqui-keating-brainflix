import './Video.css';

function Video({ data }) {
    return (
        <div className="video">
            <img 
                src={data.image}
                className="video__image"
                alt="Video preview"
             />
        </div>

    )
}

export default Video;