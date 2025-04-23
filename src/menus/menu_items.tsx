import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const MenuItems = () =>{

    const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0()

    function Logout(){
        logout({logoutParams: {returnTo: window.location.origin}})
    }

    function Login(){
        loginWithRedirect();
    }

    return (
    <>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            {isAuthenticated && <a className="navbar-brand" href="/">Welcome, {user?.name}</a>}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {
                    isAuthenticated && 
                    <li  className="nav-item">
                        <a className="nav-link" href="/Products"> Products</a>
                    </li>
                }
                {!isAuthenticated && <button className="btn btn-primary" onClick={Login}>Login</button>}
                <li  className="nav-item">{isAuthenticated && <a className="nav-link" href="/" onClick={Logout} >Logout</a>}</li>
            </ul>
            </div>
        </nav>
  </>
    );

}

export default MenuItems;