import React from "react";
import {useState, useEffect} from "react";
  export let topic = "linear";
export  function Tema() {
    
    const [topicChoice, setTopicChoice] = useState("linear");

    useEffect(() => {
        topic = topicChoice;
    } , [topic]);
    
    return (
        <div>
<div className="dropdown">
  <button className="Tema-button">Elije el tema</button>
  <div className="dropdown-content">
    <a href="#">Algebra</a>
    <div className="Tema-dropdown-algebra">
    <a href="#">Ecuaciones</a>
    <div className="Tema-dropdown-ecuaciones">
    <a href="#" onClick={() =>  setTopicChoice("linear")}>Lineales</a>
    <a href="#" onClick={() =>  setTopicChoice("quadratic")}>Cuadraticas</a>
    <a href="#" onClick={() =>  setTopicChoice("radical")}>Radicales</a>
    <a href="#" onClick={() =>  setTopicChoice("rational")}>Rationales</a>
    <a href="#" onClick={() =>  setTopicChoice("systems")}>Sistema</a>
    </div>
    </div>

    <a href="#">Calculo</a>
    <a href="#">Geometria</a>
  </div>
</div>
        </div>
    )
}