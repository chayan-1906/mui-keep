import {Box, Grid} from '@mui/material'
import {styled} from '@mui/material/styles'
import {useContext} from 'react'
import {DataProviderContext} from '../../context/DataProviderContext.jsx'
import {isListEmpty} from '../../globals/GlobalFunctions.jsx'
import ArchiveNote from './ArchiveNote.jsx'

const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}))

const ArchiveNotes = () => {
    const {archivedNotes} = useContext(DataProviderContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                <Grid container sx={{marginTop: '10px'}}>
                    {!isListEmpty(archivedNotes) && archivedNotes.map((note) => {
                        return <ArchiveNote key={note.id} archived={note}/>
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default ArchiveNotes