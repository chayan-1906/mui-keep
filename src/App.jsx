import Home from './components/Home.jsx'
import DataProvider from './context/DataProviderContext.jsx'
import {useEffect} from 'react'

function App() {
    useEffect(() => {
        let deferredPrompt

        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault()
            deferredPrompt = event
        })

        // Add logic to show install button and handle user clicks
    }, [])
    
    return (
        <DataProvider>
            <Home/>
        </DataProvider>
    )
}

export default App