import react from 'react';

export default function Login(){

    return(
        <div className='Login-center'>
            <div className='Login-center2'>

                <form>

                    <h3 className='Login-h3'>Usuario</h3>
                    <br/>
                    <input type='text' placeholder='Username' className='login-input' />
                    <br/><br/>
                    <h3 className='Login-h3'>Contraseña</h3>
                    <br/>
                    <input type='password' placeholder='Password' className='login-input' />
                    <button className='Login-button'>Iniciar sesión</button>
                    <button className='Login-button'>Registrarse</button>
                </form>
            </div>
        </div>
    )
}