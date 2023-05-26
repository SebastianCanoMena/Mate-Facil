import React from 'react'
import Arrow from '../images/nav/Arrow.png'
import Logo from '../images/nav/Logo.png'
import User from '../images/nav/User.png'

export default function Navbar(){
    return(
        <div className='Navbar'>
            <img alt='' src={Logo} />
            <div className='Navbar-center'>
            
            </div>
            <img alt='' src={User}/>
        </div>
    )
}

/*<img alt='' src={Arrow} className='Navbar-arrow'/>
            <h2 className='Navbar-temario'>Temarios ENP</h2>
            <img alt='' src={Arrow} className='Navbar-arrow'/>
            <h2 className='Navbar-temario'>Temarios SEP</h2>*/