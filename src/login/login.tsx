import {useAuth0} from "@auth0/auth0-react"
import React from "react";


export default function Login(){

    const {loginWithRedirect, logout, isAuthenticated} = useAuth0()

    return(
        <div>
           {!isAuthenticated && <button className="btn btn-primary" onClick={()=> loginWithRedirect()}>Login</button>}
           {isAuthenticated && <button className="btn btn-primary" onClick={()=> logout({logoutParams: {returnTo: window.location.origin}})}>Logout</button>}
        </div>
    );
}
