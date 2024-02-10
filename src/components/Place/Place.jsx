import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import place from '../../place.json';

function Place() {
    return (
        <main className="place">
            <Header/>
            <section className="place__section">
                <Link to="/search" className="place__back" rel="noreferrer">back</Link> 
                <div className={`place__grid-container place__grid-container_${place.name}`}>
                    {place.photos.map(photo => (
                        <img 
                            key={photo.id} 
                            src={require(`../../images/khibiny/${photo.image}`)} 
                            alt={place.name} 
                            className={`${place.name}${photo.id}`} 
                            style={{
                                gridArea: `${place.name}${photo.id}`,
                                objectFit: 'cover', 
                                width: '100%', 
                                height: '100%'
                            }}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Place;