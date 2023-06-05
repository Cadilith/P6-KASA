import Banner from '../../components/Banner/'
import AproposBanner from '../../assets/banner-a-propos.png'
import './apropos.css'

const banner = 'banner a-propos'

function Apropos() {
  return (
    <main>
      <Banner img={AproposBanner} className={banner} />
    </main>
  )
}

export default Apropos
