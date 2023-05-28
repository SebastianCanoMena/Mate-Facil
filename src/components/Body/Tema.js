import React from "react";

export default function Tema() {
    return (
        <div>
<div className="dropdown">
  <button className="Tema-button">Elige el tema</button>
  <div className="dropdown-content">
    <a href="#">Algebra</a>
    <div className="Tema-dropdown-algebra">
    <a href="#">Ecuaciones</a>
    <div className="Tema-dropdown-ecuaciones">
    <a href="#">Lineales</a>
    <a href="#">Cuadraticas</a>
    <a href="#">Radicales</a>
    <a href="#">Rationales</a>
    <a href="#">Systema</a>
    </div>
    </div>

    <a href="#">Calculo</a>
    <a href="#">Geometria</a>
  </div>
</div>
        </div>
    )
}