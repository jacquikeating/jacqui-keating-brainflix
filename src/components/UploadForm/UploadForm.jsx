import './UploadForm.scss';
    
const UploadForm = () => {
    return (
        <form class="upload__form">
        <label className="upload__label">
            Video Thumbnail
            <img className="upload__thumbnail" src="/src/assets/images/Upload-video-preview.jpg" />
        </label>
        <label className="upload__label">
            Title Your Video
            <input className="upload__input" type="text" placeholder="Add a title to your video" />
        </label>
        <label className="upload__label">
            Add a Video Description
            <textarea className="upload__input upload__input--textarea" placeholder="Add a description to your video"></textarea>
        </label>
        <button className="upload__btn" type="submit">
            <img className="header__upload-icon" src="/src/assets/images/upload.svg" alt="Up arrow" />
            Publish
        </button>
    </form>
    );
};

export default UploadForm;