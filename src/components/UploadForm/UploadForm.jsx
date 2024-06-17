import { useNavigate } from 'react-router-dom';
import './UploadForm.scss';
    
const UploadForm = () => {
    const redirectHome = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        alert("Your video was successfully uploaded!");
        redirectHome("/");
    };

    return (
        <form className="upload__form" onSubmit={handleSubmit}>
            <div className="upload__form-body">
                <div className="upload__form-left">
                    <label className="upload__label" for="video-thumbnail">
                        Video Thumbnail
                        <img className="upload__thumbnail" src="/src/assets/images/Upload-video-preview.jpg" name="video-thumbnail" alt="Your video's thumbnail image" />
                    </label>
                </div>
                <div className="upload__form-right">
                    <label className="upload__label" for="video-title">
                        Title Your Video
                        <input className="upload__input" type="text" placeholder="Add a title to your video" name="video-title" />
                    </label>
                    <label className="upload__label" for="video-description">
                        Add a Video Description
                        <textarea className="upload__input upload__input--textarea" placeholder="Add a description to your video" name="video-description"></textarea>
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