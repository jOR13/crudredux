import React, { useState } from "react";
//Actions redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import { useDispatch, useSelector } from "react-redux";




const NuevoProducto = ({history}) => {
  //state del componenete
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  //utilizar usedispatch y te crea una function
  const dispatch = useDispatch();


  //Acceder al state del store
  const cargando = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);

  console.log(cargando);
  //Mandar llamar el action de productoAction
  const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));

  //cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    //validar formularios
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    //revisar errores

    // crear  nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    //redireccionar
    history.push('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>

          {cargando ? <p>Cargando</p> : null }
          {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }

          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
