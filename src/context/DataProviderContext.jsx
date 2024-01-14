import {createContext, useState} from 'react'

export const DataProviderContext = createContext(null)

const DataProvider = ({children}) => {
    const [notes, setNotes] = useState([])
    const [archiveNotes, setArchiveNotes] = useState([])
    const [deletedNotes, setDeletedNotes] = useState([])

    return (
        <DataProviderContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deletedNotes,
            setDeletedNotes,
        }}>
            {children}
        </DataProviderContext.Provider>
    )
}

export default DataProvider