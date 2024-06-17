import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '/src/components/Header/Header.jsx';
import VideoPage from '/src/pages/VideoPage/VideoPage.jsx';
import UploadPage from '/src/pages/UploadPage/UploadPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path="/videos/:vidId" element={<VideoPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
