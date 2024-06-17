import './UploadForm.scss';
    
const UploadForm = () => {
    return (
        <form className="upload__form">
            <div className="upload__form-body">
                <div className="upload__form-left">
                    <label className="upload__label">
                        Video Thumbnail
                        <img className="upload__thumbnail" src="/src/assets/images/Upload-video-preview.jpg" />
                    </label>
                </div>
                <div className="upload__form-right">
                    <label className="upload__label">
                        Title Your Video
                        <input className="upload__input" type="text" placeholder="Add a title to your video" />
                    </label>
                    <label className="upload__label">
                        Add a Video Description
                        <textarea className="upload__input upload__input--textarea" placeholder="Add a description to your video"></textarea>
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