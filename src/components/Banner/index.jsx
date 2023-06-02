import './banner.css'
import homeBanner from '../../assets/banner.png'

function Banner() {
  return (
    <div className="banner">
      <img src={homeBanner} alt="Bannière" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
