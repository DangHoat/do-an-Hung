import React, { Component } from 'react'
import ReduxToastr from "react-redux-toastr";
import Routes from './route/Route'
import SignUp from "./pages/auth/SignUp"
import {Provider} from "react-redux"
 
const App = ({store}) => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}
export default App;


