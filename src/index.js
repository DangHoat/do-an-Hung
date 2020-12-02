import React from 'react'
import {render} from 'react-dom'
import App from './src/App'
import "./style.css"
import { CookiesProvider } from 'react-cookie'
import configureStore  from "./redux/store"
const store =  configureStore ()
render(
    <CookiesProvider>
        <App store ={store}/>
    </CookiesProvider> 
,document.getElementById('root'))