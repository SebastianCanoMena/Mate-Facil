import React from 'react'
import Logo from '../images/nav/Logo.png'
import User from '../images/nav/User.png'
import Github from '../images/nav/Github.png'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='Navbar'>
            <Link to='/' ><img alt='' className='Navbar-logo' src={Logo} /></Link>
            <div className='Navbar-center'>
            <Link to='https://github.com/SebastianCanoMena/Mate-Facil' ><img alt='' className='Navbar-github' src={Github}/></Link>
            </div>
            <Link to='/login' ><img alt='' className='Navbar-user' src={User}/></Link>
        </div>
    )
}
