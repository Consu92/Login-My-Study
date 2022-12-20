//Mismo caso, importar react y sus funciones predeterminadas de "node_modules"
import React, { useState, useEffect } from "react";
import "../assets/Login.css";

const initialUsuario = {
    name: "",
    username: "",
    email: "",
    password: ""
}


//Creamos el componente asociado al formulario de usuario junto con sus propiedades.
const UserFormComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { name, username, email, password } = usuario;
    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado);
        } else {
            setUsuario(
                {
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                }
            )

        }
    }, [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }

    return (
        //LOGIN
        <div class="container">
            <div class="row">

                
        
                <div class="row col">
                    <img src={require('../login2.png')} class=" bgimg " />
                </div>
                <form class="row col-md-4 d-flex align-self-center justify-content-center">

                    <h1 class="py-5">Iniciar sesión</h1>

                    <div class="mb-3" >
                        <label class="form-label" for="id">Correo electrónico</label>
                        <input class="form-control" placeholder="correo@gmail.com" type="text" id="name" name="name" value={name} onChange={handleInputChange} />
                    </div>
                    <div class="mb-3" >
                        <label class="form-label" for="id">Contraseña</label>
                        <input class="form-control" placeholder="*********" type="text" id="username" name="username" value={username} onChange={handleInputChange} />
                    </div>
                    
                    <div class="mb-3">                                                                  
                        <input type="checkbox" name="connected" class="form-check-input" id=""/>
                        <label for="connected" class="form-check-label">Mantenerme conectad@</label>
                    </div>
                    
                    <div class="opcbtn mb-3"> 
                        <button class="btn btn-success ">Iniciar sesión</button>    
                    </div>
                    
                    <div class="linea">
                        <div class="mb-3">                            
                            <span> <a href="#">Olvidaste tu contraseña</a></span> <br/>
                        </div>
                        <div class="mb-3">
                            <span>¿No estás registrado aún? <a class="linea" href="#">Regístrate aquí</a></span> <br/>
                        </div>
                    </div> 
                    

                </form>

            </div>

        </div>


    )

};

export default UserFormComponent;