import React from "react";
import CardComponente from "./CardComponente";
import FormComponente from "./FormComponente";

/*
const usuario1={
    nombre: 'Ambar',
    apellido: 'Carrasco',
    edad:'18',
}

const usuario2={
    nombre: 'Lionel',
    apellido: 'Messi',
    edad:'35',
}
*/
//constantes de usuarios, similara un array
const usuarios=[
{
    //datos de usuario
    key: 0,
    nombre: 'Barcelona',
    partidos:'778',
    goles:'672',
    titulos:'35',
    asistencias:'268',
    promedio:'0,86',
},
{
    key: 1,
    nombre: 'Argentina',
    partidos:'161',
    goles:'86',
    titulos:'4',
    asistencias:'49,',
    promedio: '0,53',
},
{   
    key: 2,
    nombre: 'PSG',
    partidos:'33',
    goles:'11',
    titulos:'1',
    asistencias:'14',
    promedio:'0,33' ,
}   
]

const UsuComponente= ()=>{
    return(
        <div className="container mt-4">
<div className="row">
    <div className="col-8">
        <h1 class="bg-danger text-white text-center">Números de Messi</h1>
        {
            //usuarios: es nombre de lo que trae
            //=> : voy  hacer algo------------------->propiedad de compon->iterar usuario anterior
            usuarios.map(usuario=> <CardComponente key={usuario.key} usuario={usuario}/>)
        }

        {/*trae lo de tarjeta componente, traer propiedad*/}
       {/*
       } <TarjetaComponent usuario={usuario1}/>
        <TarjetaComponent usuario={usuario2}/>
        */}
    </div>
    <div className="col">
    <h1>Formulario</h1>
    <FormComponente/>
    </div>
</div>
        </div>
    )
}

export default UsuComponente;