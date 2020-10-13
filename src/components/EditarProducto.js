import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";
import { useHistory } from "react-router-dom";
const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //nuevo state de producto

  const [producto, guardaProducto] = useState({
    nombre: "",
    precio: "",
  });

  //producto a editar
  const productoeditar = useSelector((state) => state.productos.productoeditar);
  //if (!producto) return null;

  useEffect(() => {
    guardaProducto(productoeditar);
  }, [productoeditar]);

  //Leer los datos del formulario
  const onChangeFormulario = (e) => {
    guardaProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = producto;

  const submitEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
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
                  onChange={onChangeFormulario}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
