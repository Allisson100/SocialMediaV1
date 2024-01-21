import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './styles/GlobalStyles.js'
import RoutesApp from './routes.jsx'
import AllContextProviders from './contexts/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllContextProviders>
      <GlobalStyles />
      <RoutesApp />
    </AllContextProviders>
  </React.StrictMode>
)
