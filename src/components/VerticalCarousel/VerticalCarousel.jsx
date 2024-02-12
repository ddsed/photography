import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import cn from "classnames";
import { ReactComponent as Next } from "../../images/arrow-down.svg";
import { ReactComponent as Prev } from "../../images/arrow-up.svg";

const VerticalCarousel = ({ data, onActiveSlideChange }) => {
  const storedActiveIndex = parseInt(localStorage.getItem('activeIndex'), 10) || 0;
  const [activeIndex, setActiveIndex] = useState(storedActiveIndex);
  
  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 4);
  // Usd to determine the height/spacing of each item
  const itemHeight = 52;
  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;
  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });

    document.querySelector('.carousel__photo-overlay').classList.add('fade-in');
    setTimeout(() => {
      document.querySelector('.carousel__photo-overlay').classList.remove('fade-in');
    }, 500);
  };

  useEffect(() => {
    localStorage.setItem('activeIndex', activeIndex);
    onActiveSlideChange(data[activeIndex].id.toLowerCase());
  }, [activeIndex])

  return (
    <section className="carousel">
      <div className="carousel__outer-container">
        <div className="carousel__wrapper">
          <button
            type="button"
            className="carousel__button prev"
            onClick={() => handleClick("prev")}
          >
            <Prev />
          </button>

          <div className="carousel__container">
            <div className="carousel__slides">
              <div className="carousel__inner-container">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(i)
                    }}
                    className={cn("carousel__item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold,
                    }
                    )}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`
                    }}
                  >
                  { Math.abs(determinePlacement(i)) === 52 || determinePlacement(i) === 0 ? (
                    <Link to={`/${item.id.toLowerCase()}`} className="carousel__link" style={{ pointerEvents: Math.abs(determinePlacement(i)) === 52 ? 'none' : 'auto' }}>
                      {item.id}
                    </Link>
                  ) : (
                    <span className="carousel__link-disabled">{item.id}</span>
                  )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel__button next"
            onClick={() => handleClick("next")}
          >
            <Next />
          </button>
        </div>
        <div className="carousel__photo-container">
          <div className="carousel__photo-overlay"></div>
          <img
            className="carousel__photo"
            src={require(`../../images/covers/${data[activeIndex].image}`)}
            alt={data[activeIndex].id}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  onActiveSlideChange: PropTypes.func.isRequired,
};

export default VerticalCarousel;