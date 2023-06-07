import './collapse.css'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function Collapse(props) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className="collapse-container">
      <div className="collapse-title" onClick={toggle} activeclassname="active">
        <p>{props.collapseTitle}</p>
        <img className="arrow" src={arrow} alt="Ouvrir l'article" />
      </div>
      {open && <div className="collapse-content">{props.children}</div>}
    </div>
  )
}

export default Collapse
