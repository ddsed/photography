import React from 'react';
import { Link } from 'react-router-dom';
import data from "../../data.json";

import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";


function Search() {

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
            <VerticalCarousel data={data.slides}/>

            {/*
            <section className="search__list">
                {/*<div className="search__arrow-up"></div>
                <Carousel/>
                <Link to='/lofotens/' className='search__link'>
                    <h2 className="search__place">LOFOTENS</h2>
                </Link>
                <Link to='/africa/' className='search__link'>
                    <h2 className="search__place">AFRICA</h2>
                </Link>
                <Link to='/kamchatka/' className='search__link'>
                    <h2 className="search__place">KAMCHATKA</h2>
                </Link>
                <div className="search__arrow-down"></div>
            </section>
            */}
        </main>
    );
}

export default Search;