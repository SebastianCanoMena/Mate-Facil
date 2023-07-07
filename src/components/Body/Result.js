import React from "react";

export default function Result({Result, Procedure}){
    return(
        <div className="Result">
            <div className="Result-background">
                <div className="Result-container">
                    <h4>Resultado</h4>
                    <p>{Result}</p>
                    </div>
                <div className="Result-container">
                    <h4>Procedimiento</h4>
                    <div dangerouslySetInnerHTML={{ __html: Procedure}} />
                    </div>
            </div>   
        </div> 
    )
}