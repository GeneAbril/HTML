import React from "react";

const CardComponente = ({usuario}) => {
    return (
        <div className="card">
            <div className="card-body bg-dark">    
            <ol>       
                <h2 class="bg-danger text-white text-center">{usuario.nombre}</h2>
                <li class="text-white">Partidos: {usuario.partidos}</li>
                <li class="text-white">Goles: {usuario.goles}</li>
                <li class="text-white">Asistencias: {usuario.asistencias}</li>
                <li class="text-white">Promedio gol: {usuario.promedio}</li>
                </ol>                
                <hr/>
                
                </div>
            </div>
        
    )
}

export default CardComponente;