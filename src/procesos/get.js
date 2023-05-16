import {useState, useEffect} from 'react';

function Get() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('/prueba');
            const json = await response.json();
            setData(json);
        }
        fetchData();
    },);
    console.log(data);
    return (
        <div>
            <h1>Get</h1>
        </div>
        
    )

}


export default Get;