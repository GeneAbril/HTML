import React from 'react';

const FormComponente= () => {
    return(
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
            </div>

            <div className="form-group mb-2">
              <label className="form-label">Edad:</label>
              <input type="text" className="form-control" id="edad" placeholder="Ingrese su edad" />
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" placeholder="Ingrese su password" />
            </div>

            <div className="form-group mt-4">
              <input type="submit" className="btn btn-outline-primary" value="Registrar" />
            </div>  
          </form>
    )
}

export default FormComponente;