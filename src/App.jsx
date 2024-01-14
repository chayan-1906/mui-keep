import Home from './components/Home.jsx'
import DataProvider from './context/DataProviderContext.jsx'

function App() {
    return (
        <DataProvider>
            <Home/>
        </DataProvider>
    )
}

export default App