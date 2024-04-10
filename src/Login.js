import React,{ FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { useAuthContext } from "@asgardeo/auth-react";



function Login() {
    const { state,signIn,signOut } = useAuthContext();
    const [ hasAuthenticationErrors, setHasAuthenticationErrors ] = useState(false);
    const [ hasLogoutFailureError, setHasLogoutFailureError ] = useState(false);
    const handleLogout = () => {
        signOut();
    };
    const handleLogin = useCallback(() => {
        setHasLogoutFailureError(false);
        signIn()
            .catch(() => setHasAuthenticationErrors(true));
    }, [ signIn ]);
    return (
        state.isAuthenticated ? 
        <a onClick={handleLogout}>LOGOUT</a> :
        <a onClick={handleLogin}>LOGIN</a>
    );
}

export default Login;