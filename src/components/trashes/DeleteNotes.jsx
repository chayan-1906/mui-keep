import {Box, Grid} from '@mui/material'
import {styled} from '@mui/material/styles'
import {useContext} from 'react'
import {DataProviderContext} from '../../context/DataProviderContext.jsx'
import {isListEmpty} from '../../globals/GlobalFunctions.jsx'
import DeleteNote from "./DeleteNote.jsx";

const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}))

const DeleteNotes = () => {
    const {deletedNotes} = useContext(DataProviderContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                <Grid container sx={{marginTop: '10px'}}>
                    {
                        !isListEmpty(deletedNotes) && deletedNotes.map((note) => {
                            return <DeleteNote key={note.id} deleted={note}/>
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default DeleteNotes