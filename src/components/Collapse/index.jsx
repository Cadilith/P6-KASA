import './collapse.scss'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function Collapse(props) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <p>{props.collapseTitle}</p>
        <img
          className={open ? 'arrow down' : 'arrow up'}
          src={arrow}
          alt="Ouvrir l'article"
          onClick={toggle}
        />
      </div>
      {open && <div className="collapse-content">{props.children}</div>}
    </div>
  )
}

export default Collapse
