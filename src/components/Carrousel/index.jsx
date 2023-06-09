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
              current === index ? 'carrousel-img current ' : 'carrousel-img '
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
