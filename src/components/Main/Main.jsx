import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/search');
    };


    return (
        <main className="main">
            <Header />
            <button type="button" className="main__button" onClick={handleButtonClick}>OUTDOOR EXPERIENCES</button>
            <Footer />
        </main>
    );
}

export default Main;