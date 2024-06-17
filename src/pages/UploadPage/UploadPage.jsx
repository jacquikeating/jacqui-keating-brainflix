import UploadForm from '../../components/UploadForm/UploadForm.jsx';
import './UploadPage.scss';

const UploadPage = () => { 
    return (
        <main className="upload">
            <h1 className="upload__heading">Upload Video</h1>
            <UploadForm />
        </main>
    );
};

export default UploadPage;