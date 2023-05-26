import React from 'react'
import Back1 from '../images/background/Back1.png'
import Back2 from '../images/background/Back2.png'
import Body2 from '../images/body/Body2.png'
import Body3 from '../images/body/Body3.png'
import { useState } from 'react'


export default function Body(){
    const[value, setValue] = useState(''); 


    const userValue = (event) => 
    {
        setValue(event.target.value);
    }

    const operation = (event) => {
        if(event.key === 'Enter')
        {
            Post(value);
        }
    }

    return (
    <div className='Body'>
        <div className='Background'>
            <img alt='' src={Back1} className='Body-back1'/>
            <img alt='' src={Back2} className='Body-back2'/>
        </div>
        
         <div className='Body-center'>
            <div className='Body-center2'>
                <h1 className='Body-title'>Mate Facil</h1>
                <img alt='' src={Body2} className='Body-irregularForm'/>
                <img alt='' src={Body3} className='Body-searchIcon'/>
                <input type='text' value={value} onChange={userValue}onKeyPress={operation} className='Body-searchBar'/>
            </div>
        </div>
    </div>
    )
}


function Post(value)
{

    fetch('http://localhost:5000/suma', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: value})
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}

