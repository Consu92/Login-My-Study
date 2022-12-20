//importamos react solo si lo ocuparemos dentro de este archivo ".js"
import React from "react";

//componente asociado a la tabla de usuario y sus propiedades.
const TableUser = ({ usuarios, setUsuarioEditado, deleteUser }) => {
    return (
        <div class="card container mb-2">
            <h2>Tabla Usuarios</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            nombre
                        </th>
                        <th>
                            nombre de usuario
                        </th>
                        <th>
                            correo electrónico
                        </th>
                        <th>
                            contraseña
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (


                        <tr>
                            <td>
                                {usuario.name}
                            </td>
                            <td>
                                {usuario.username}
                            </td>
                            <td>
                                {usuario.email}
                            </td>
                            <td>
                                {usuario.password}
                            </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-warning"
                                    onClick={() => {
                                        setUsuarioEditado(usuario);
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => {
                                        deleteUser(usuario.email);
                                    }}
                                >
                                    Eliminar
                                </button>


                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableUser;