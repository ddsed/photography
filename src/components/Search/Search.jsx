import React from 'react';
import { Link } from 'react-router-dom';

import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";


function Search({data, onActiveSlideChange}) {

    return (
        <main className="search">
            <section className="search__header">
                <Link to='/' className="search__link">
                    <h1 className="search__title">Daria Sedova</h1>
                </Link>
                <div className="search__contacts">
                    <p className="search__email">dashassed@gmail.com</p>
                    <Link to="https://www.instagram.com/_sedova___/" className="search__insta" rel="noreferrer" target="_blank"></Link>
                </div>
            </section> 
            <VerticalCarousel data={data} onActiveSlideChange={onActiveSlideChange}/>
        </main>
    );
}

export default Search;