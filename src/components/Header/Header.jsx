function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="/src/assets/images/BrainFlix-logo.svg" />
            <div className="header__search-bar">
                <input className="header__search-field" type="text" placeholder="Search" />
                <img className="header__search-icon" src="/src/assets/images/search.svg" alt="Magnifying glass icon" />
            </div>
            <button className="header__upload-btn">
                <img className="header__upload-icon" src="/src/assets/images/upload.svg" />Upload
            </button>
            <img className="header__avatar" src="/src/assets/images/Mohan-muruge.jpg" alt="Your avatar" />
        </header>
    )
}

export default Header;