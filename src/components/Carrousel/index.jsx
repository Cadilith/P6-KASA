import { useState } from 'react'
import leftArrow from '../../assets/arrow-left.svg'
import rightArrow from '../../assets/arrow-right.svg'
import './carrousel.scss'

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  function goToNextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  function goToPrevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  function setSlideDirection(index) {
    if (current === length - 1 && index === 0) {
      return 'next'
    } else if (current === 0 && index === length - 1) {
      return 'prev'
    } else if (current > index && current !== 0) {
      return 'prev'
    } else if (current < index && current !== length - 1) {
      return 'next'
    }
  }

  return (
    <div className="carrousel-container">
      <div className="carrousel-button-container">
        <button className="left-arrow" onClick={goToPrevSlide}>
          <img src={leftArrow} alt="précédente" />
        </button>
        <button className="right-arrow" onClick={goToNextSlide}>
          <img src={rightArrow} alt="suivante" />
        </button>
      </div>
      {slides.map((slide, index) => {
        return (
          <div
            className={
              current === index
                ? 'carrousel-img current '
                : 'carrousel-img ' + setSlideDirection(index)
            }
            key={index}
          >
            {index === current && (
              <>
                <img src={slide} alt="" />
                <p>
                  {current + 1}/{length}
                </p>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Carrousel
