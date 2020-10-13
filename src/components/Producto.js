import React from 'react';
import { useHistory } from 'react-router-dom';
//Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';
import Swal from 'sweetalert2'

const Producto = ({ producto }) => {
    const { nombre, precio, id } = producto;


    const dispatch = useDispatch();
    const history = useHistory(); //Habilitar history para redireccion

    //Condrimar si desea eliminarlo
    const confirmaEliminarProducto = id => {
        //Preguntar al user
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            text: "No se podran revertir cambios",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                //pasarlo al action
                dispatch(borrarProductoAction(id))
                
            }
        });
    }

    //Funcion que redirige de forma programada 
    const redireccionarEdicion = producto => {
        dispatch (obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td> <span className="font-weight-bild"> ${precio}</span></td>
            <td className="acciones">
                <button type="button" className="btn btn-primary mr-2" onClick={() => redireccionarEdicion(producto)}>Editar</button> 
                <button type="button" className="btn btn-danger" onClick={() => confirmaEliminarProducto(id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default Producto
    ;