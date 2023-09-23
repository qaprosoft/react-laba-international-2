import './index.css'
import React from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { MainPage } from './views/pages/MainPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>,
)
