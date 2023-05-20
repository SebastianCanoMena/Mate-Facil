import {useState, useEffect} from 'react';

function Get() 
{
    const [message, setMessage] = useState('');

    useEffect(() => {
        
        fetch('http://localhost:5000/prueba')
        .then(res => res.json())
        .then(data => 
            {
                setMessage(data.message);
                setMessage(JSON.stringify(data));
                console.log(data);
            })
        .catch(err => 
            {
                console.log(err);
            });
    });
return (
                <div>
                    <h1></h1>
                </div>
            )
}

    


export default Get;