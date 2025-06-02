import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className="landing">
            <div className="card">
                <h1 className="title">Sistema de Gestion de Horarios - UPLA</h1>

                {isAuthenticated ? (
                    <>
                        <p className="welcome">Bienvenido, {user.name}</p>
                        <button
                            className="logout-button"
                            onClick={() => logout({ returnTo: window.location.origin })}
                        >
                            Cerrar sesion
                        </button>
                    </>
                ) : (
                    <button
                        className="login-button"
                        onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}
                    >
                        Iniciar sesion 
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;
