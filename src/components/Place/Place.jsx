import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import places from '../../places.json';

function Place({activeSlideId}) {
    const place = places[activeSlideId];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openPopup = (photo) => {
        setSelectedPhoto(photo);
        setIsOpen(true);
    };

    const closePopup = () => {
        setSelectedPhoto(null);
        setIsOpen(false);
    };

    if (!place) {
        return <div>Place not found</div>;
    }

    return (
        <main className="place">
            <Header />
            <section className="place__section">
                <Link to="/search" className="place__back" rel="noreferrer">back</Link> 
                <div className={`place__grid-container place__grid-container_${place.name}`}>
                    {place.photos.map(photo => (
                        <>
                        <img 
                            key={photo.id} 
                            src={require(`../../images/${place.name}/${photo.image}`)} 
                            alt={place.name} 
                            className={`${place.name}${photo.id}`} 
                            style={{
                                gridArea: `${place.name}${photo.id}`,
                                objectFit: 'cover', 
                                width: '100%', 
                                height: '100%'
                            }}
                            onClick={() => openPopup(photo)}
                        />
                        </>
                    ))}
                    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
                        <div className="popup__content">
                        <button className="popup__close-button" type="button" onClick={closePopup}></button>
                        {selectedPhoto && (
                            <img className="popup__photo" src={require(`../../images/${place.name}/${selectedPhoto.image}`)} alt="place" />
                        )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Place;