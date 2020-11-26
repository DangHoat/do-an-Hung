import React, { Component } from 'react'
import ReduxToastr from "react-redux-toastr";
import Routes from './route/Route'
import SignUp from "./pages/auth/SignUp"
const App = () => {
    return (
        <>
            <Routes />
            {/* <ReduxToastr
                timeOut={5000}
                newestOnTop={true}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
            /> */}
        </>
    )
}
export default App;


