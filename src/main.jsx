import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { CvProvider } from './CvContext/CvContext';
import { CvSettingsProvider } from './CvSettings/CvSettings';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <CvProvider>
        <CvSettingsProvider>
          <App />
        </CvSettingsProvider>
      </CvProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
