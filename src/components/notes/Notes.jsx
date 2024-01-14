import {Box, Grid} from '@mui/material'
import {styled} from '@mui/material/styles'
import Form from './Form.jsx'
import Note from './Note.jsx'
import {useContext} from 'react'
import {DataProviderContext} from '../../context/DataProviderContext.jsx'
import {isListEmpty} from '../../globals/GlobalFunctions.jsx'
import EmptyNotes from './EmptyNotes.jsx'

const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}))

const Notes = () => {
    const {notes} = useContext(DataProviderContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                <Form/>
                {
                    isListEmpty(notes) && <EmptyNotes/>
                }
                <Grid container sx={{marginTop: '10px'}}>
                    {
                        !isListEmpty(notes) &&
                        notes.map((note) => {
                            return <Note key={note.id} note={note}/>
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Notes