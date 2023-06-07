import Banner from '../../components/Banner/'
import Collapse from '../../components/Collapse'
import AproposBanner from '../../assets/banner-a-propos.png'
import './apropos.css'

const banner = 'banner a-propos'

function Apropos() {
  return (
    <main>
      <Banner img={AproposBanner} className={banner} />
      <div className="about-container">
        <Collapse collapseTitle={'Fiabilité'}>
          <div className="collapse-content">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </Collapse>
      </div>
    </main>
  )
}

export default Apropos
