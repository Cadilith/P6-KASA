import { useState } from 'react'
import leftArrow from '../../assets/arrow-left.svg'
import rightArrow from '../../assets/arrow-right.svg'
import './carrousel.scss'

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="carrousel-container">
      {slides.map((slide, index) => {
        return (
          <div className="carrousel-img" key={index}>
            {index === current && <img src={slide} alt="" />}
          </div>
        )
      })}
      <div className="carrousel-button-container">
        <button className="left-arrow" onClick={previousSlide}>
          <img src={leftArrow} alt="précédente" />
        </button>
        <button className="right-arrow" onClick={nextSlide}>
          <img src={rightArrow} alt="suivante" />
        </button>
      </div>
    </div>
  )
}

export default Carrousel
