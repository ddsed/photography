import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Place() {
    return (
        <main className="place">
            <Header/>
            <section className="place__container">
                <Link to="/search" className="place__back" rel="noreferrer">back</Link> 
            </section>
        </main>
    );
}

export default Place;