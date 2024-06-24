import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAllVideosEndpoint } from '../../utils/api-utils.js';
import './UploadForm.scss';
    
const UploadForm = () => {
    const redirectHome = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        postVideo(e);
        alert("Your video was successfully uploaded!");
        redirectHome("/");
    };

    async function postVideo(e) {
        try {
            const res = await axios.post(getAllVideosEndpoint(), {
                title: e.target.title.value,
                description: e.target.description.value,
                image: "http://localhost:8080/Upload-video-preview.jpg"
            });
            console.log(res);
            e.target.reset();
        } catch (err) {
            console.log("Error", err);
        }
    };

    return (
        <form className="upload__form" onSubmit={handleSubmit}>
            <div className="upload__form-body">
                <div className="upload__form-left">
                    <p className="upload__label">
                        Video Thumbnail
                        <img className="upload__thumbnail" src="http://localhost:8080/Upload-video-preview.jpg" alt="Your video's thumbnail image" />
                    </p>
                </div>
                <div className="upload__form-right">
                    <label className="upload__label" htmlFor="title">
                        Title Your Video
                        <input className="upload__input" type="text" placeholder="Add a title to your video" id="title" />
                    </label>
                    <label className="upload__label" htmlFor="description">
                        Add a Video Description
                        <textarea className="upload__input upload__input--textarea" placeholder="Add a description to your video" id="description"></textarea>
                    </label>
                </div>
            </div>
            <div className="upload__btns">
                <button className="upload__submit-btn" type="submit">
                    <img className="upload__btn-icon" src="/src/assets/images/publish.svg" alt="Up arrow" />
                    Publish
                </button>
                <button className="upload__cancel-btn">
                    Cancel
                </button>
            </div>
    </form>
    );
};

export default UploadForm;