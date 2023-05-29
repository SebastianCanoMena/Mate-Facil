import React from "react";

export default function Result({Result}){
    return(
        <div className="Result">
            <div className="Result-background">
                <div className="Result-container">
                    <h4>Resultado</h4>
                    <p>{Result}</p>
                    </div>
                <div className="Result-container">
                    <h4>Procedimiento</h4>
                    </div>
            </div>   
        </div> 
    )
}