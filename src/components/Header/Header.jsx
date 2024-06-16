import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img className="header__logo" src="/src/assets/images/BrainFlix-logo.svg" alt="BrainFlix logo" />
            </Link>
            <div className="header__search-bar">
                <input className="header__search-field" type="text" placeholder="Search" />
                <img className="header__search-icon" src="/src/assets/images/search.svg" alt="Magnifying glass" />
            </div>
            <img className="header__avatar" src="/src/assets/images/Mohan-muruge.jpg" alt="Your avatar" />
            <Link to="/upload" className="header__upload-link">
                <button className="header__upload-btn">
                    <img className="header__upload-icon" src="/src/assets/images/upload.svg" alt="Up arrow" />Upload
                </button>
            </Link>
            
        </header>
    );
};

export default Header;