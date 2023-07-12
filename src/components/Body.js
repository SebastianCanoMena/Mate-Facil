import React, { useEffect } from 'react'
import { Tema } from './Body/Tema'
import Result from './Body/Result'
import { useState} from 'react'


export default function Body(){  

    const [topicChoice, setTopicChoice] = useState("linear");

    const[value, setValue] = useState(''); 

    const[display, setDisplay] = useState(true);

    const [result, setResult] = useState(null);

    const [procedure, setProcedure] = useState(null);

    const userValue = (event) => 
    {
        setValue(event.target.value);
        setDisplay(true);
    }

    const operation = (event) => {
        if(event.key === 'Enter')
        {
            Post(value, topicChoice, setResult, setProcedure);
        }
    }

    useEffect(() => {
        console.log(topicChoice);
    }, [topicChoice])

    return (
    <div className='Body'>
        
         <div className='Body-center'>
            <div className='Body-center2'>
                <h1 className='Body-title'>Mate Facil</h1>
                <Tema  setTopic={setTopicChoice} />
                <div className='Body-irregularForm'>
                <input type='text' value={value} onChange={userValue}onKeyPress={operation} className='Body-searchBar'/>
                </div>
            </div>
        </div>
        {display ? <Result Result={result} Procedure={procedure}/> : null} 
    </div>
    )
}
/*        <div className='Background'>
            <img alt='' src={Back1} className='Body-back1'/>
            <img alt='' src={Back2} className='Body-back2'/>
        </div>
*/


function Post(value, topicChoice, setResult, setProcedure){

    fetch(`http://localhost:5000/algebra/equations/${topicChoice}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: value})
    })
        .then(res => res.json())
        .then(data => {
            setResult(data.result)
            setProcedure(data.procedimiento)
        })
        .catch(err => {
            console.log(err);
        })
}

