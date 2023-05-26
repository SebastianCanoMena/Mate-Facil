import React from 'react'
import Logo from '../images/nav/Logo.png'
import User from '../images/nav/User.png'
import Github from '../images/nav/Github.png'

export default function Navbar(){
    return(
        <div className='Navbar'>
            <img alt='' className='Navbar-logo' src={Logo} />
            <div className='Navbar-center'>
            <img alt='' className='Navbar-github' src={Github}/>
            </div>
            <img alt='' className='Navbar-user' src={User}/>
        </div>
    )
}

/*<img alt='' src={Arrow} className='Navbar-arrow'/>
            <h2 className='Navbar-temario'>Temarios ENP</h2>
            <img alt='' src={Arrow} className='Navbar-arrow'/>
            <h2 className='Navbar-temario'>Temarios SEP</h2>*/