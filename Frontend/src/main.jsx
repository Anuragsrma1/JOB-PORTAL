import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import store from './redux/store.js'


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
    <Toaster />
  </React.StrictMode>,
)
