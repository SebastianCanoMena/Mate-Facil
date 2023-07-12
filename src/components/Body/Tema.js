import React from "react";
export  function Tema({setTopic}) {
    
    return (
        <div>
<div className="dropdown">
  <button className="Tema-button">Elije el tema</button>
  <div className="dropdown-content">
    <a href="#">Algebra</a>
    <div className="Tema-dropdown-algebra">
    <a href="#">Ecuaciones</a>
    <div className="Tema-dropdown-ecuaciones">
    <a href="#" onClick={() =>  setTopic("linear")}>Lineales</a>
    <a href="#" onClick={() =>  setTopic("quadratic")}>Cuadraticas</a>
    <a href="#" onClick={() =>  setTopic("radical")}>Radicales</a>
    <a href="#" onClick={() =>  setTopic("rational")}>Rationales</a>
    <a href="#" onClick={() =>  setTopic("systems")}>Sistema</a>
    </div>
    </div>

    <a href="#">Calculo</a>
    <a href="#">Geometria</a>
  </div>
</div>
        </div>
    )
}