import React, { useState } from 'react'
import '../styles/SideNavBar.css'
import {faBook, faHouseUser, faMapLocationDot, faMapPin, faStreetView, faTicket, faRecycle, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MenuLateral = () => {
    const [isExpanded, setExpendState] = useState(true);
	const menuItems = [
		{
			text: "Home",
			icon: <FontAwesomeIcon className='icon' icon={faHouseUser} />,
		},
		{
			text: "Solicite uma coleta",
			icon: <FontAwesomeIcon className='icon' icon={faStreetView} />,
		},
		{
			text: "Cadastre um ponto de entrega",
			icon: <FontAwesomeIcon className='icon' icon={faMapLocationDot} />,
		},
		{
			text: "Mapa de catadores proximos",
			icon: <FontAwesomeIcon className='icon' icon={faMapPin} />,
		},
		{
			text: "Pontuação",
			icon: <FontAwesomeIcon className='icon' icon={faTicket} />,
		},
		{
			text: "Dicas",
			icon: <FontAwesomeIcon className='icon' icon={faBook} />,
		}
        

	];
  return (
    <div
    className={
        isExpanded
            ? "side-nav-container"
            : "side-nav-container side-nav-container-NX"
    }
>
    <div className="nav-upper">
        <div className="nav-heading">
            {isExpanded && (
                <div className="nav-brand">
                    <FontAwesomeIcon className='icon-logo' icon={faRecycle}/>
                    <h2>Zero Waste</h2>
                </div>
            )}
            <button
                className={
                    isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
                }
                onClick={() => setExpendState(!isExpanded)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div className="nav-menu">
            {menuItems.map(({ text, icon }) => (
                <a
                    className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                    href="#"
                    key={text}
                >
                    {icon}
                    {isExpanded && <p>{text}</p>}
                    <span className='tooltip'>{text}</span>
                </a>
            ))}
        </div>
    </div>
    <div className="nav-footer">
        {isExpanded && (
            <div className="nav-details">
                <img
                    className="nav-footer-avatar"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt=""
                    
                />
                <div className="nav-footer-info">
                    <p className="nav-footer-user-name">{localStorage.getItem('nome')}</p>
                    <p className="nav-footer-user-position">{localStorage.getItem('tipo')}</p>
                </div>
            </div>
        )}
        <FontAwesomeIcon className='logout-icon' icon={faRightFromBracket} />
    </div>
</div>
  )
}

export default MenuLateral