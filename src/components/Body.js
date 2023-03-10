import React from 'react'
import Back1 from '../images/background/Back1.png'
import Back2 from '../images/background/Back2.png'
import Body1 from '../images/body/Body1.png'
import Body2 from '../images/body/Body2.png'
import Body3 from '../images/body/Body3.png'

export default function Body(){
    return (
    <div className='Body'>
        <div className='Background'>
            <img alt='' src={Back1} className='Body-back1'/>
            <img alt='' src={Back2} className='Body-back2'/>
        </div>
        
         <div className='Body-center'>
            <img alt='' className='Body-blueRectangle'src={Body1}/>
            <div className='Body-center2'>
            <h1 className='Body-title'>Mate Facil</h1>
            <img alt='' src={Body2} className='Body-irregularForm'/>
            <img alt='' src={Body3} className='Body-searchIcon'/>
            <input type='text' value='Calculadora Universal' className='Body-searchBar'/>
            </div>
        </div>
    </div>
    )
}
