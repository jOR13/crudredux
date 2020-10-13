import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        //COnsultar la API
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();

    }, [dispatch]);

    //Obtener el state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);


    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            { error ? <p className="alert alert-danger p2 mt-4 text-center"></p> : null}
            {cargando ? <p>Cargando...</p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Actiones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.lenght === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}

                            />
                        ))
                    )}
                </tbody>
            </table>

        </Fragment>
    );
}

export default Productos;