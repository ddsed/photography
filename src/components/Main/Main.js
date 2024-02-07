import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/search');
    };


    return (
        <main className="main">
            <div className="main__header">
                <Link to='/' className="main__link">
                    <h1 className="main__title">Daria Sedova</h1>
                </Link>
                <div className="main__contacts">
                    <p className="main__email">dashassed@gmail.com</p>
                    <a href="https://www.instagram.com/_sedova___/" className="main__insta" rel="noreferrer" target="_blank"></a>
                </div>
            </div>  
            <button type="button" className="main__button" onClick={handleButtonClick}>OUTDOOR EXPERIENCES</button>
        </main>
    );
}

export default Main;