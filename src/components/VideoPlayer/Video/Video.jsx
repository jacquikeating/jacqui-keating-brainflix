import './Video.css';

function Video({ data }) {
    {
        const videoContainer = document.querySelector(".video-container");
        const video = document.querySelector(".video");
        const videoControls = document.querySelector(".video__controls")
        // video.controls = false;

    
    }
        return (
        <div className="video">
            <img 
                src={data.image}
                className="video__image"
                alt="Video preview"
             />
        </div>
        // <figure className="video-container">
        //     <video className="video" width="100%" src="/src/assets/mov_bbb.mp4" controls preload="metadata"> 
        //         <source src="/src/assets/mov_bbb.mp4" type="video/mp4" />
        //         <progress value="0" min="0"></progress>
        //     </video>

        //     <ul className="video__controls">
        //         <li>
        //             <button className="video__controls video__controls--playpause">
        //                 <img src="/src/assets/images/play.svg" className="video__icon" alt="Play" />
        //             </button>
        //         </li>
        //         <li className="video__controls video__controls--progress">
        //             <progress value="0" min="0"></progress>
        //         </li>
        //         <li>
        //             <button className="video__controls video__controls--volume">
        //                 <img src="/src/assets/images/volume_up.svg" className="video__icon" alt="Full Screen" />
        //             </button>
        //         </li>
        //         <li>
        //             <button className="video__controls video__controls--fullscreen">
        //             <img src="/src/assets/images/fullscreen.svg" className="video__icon" alt="Volume" />
        //             </button>
        //         </li>
        //     </ul>
        // </figure>
    ) 
}

export default Video;