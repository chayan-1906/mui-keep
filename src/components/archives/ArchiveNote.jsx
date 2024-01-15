import {Card, CardActions, CardContent, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import {DeleteRounded, UnarchiveOutlined} from '@mui/icons-material'
import {useContext} from 'react'
import {DataProviderContext} from '../../context/DataProviderContext.jsx'

const StyledCard = styled(Card)`
	width: 240px;
	margin: 8px;
	box-shadow: none;
	border: 1px solid #E0E0E0;
	border-radius: 8px;
`

const ArchiveNote = ({archived}) => {
    const {archivedNotes, setNotes, setArchivedNotes, setDeletedNotes} = useContext(DataProviderContext)

    const unArchiveNote = (note) => {
        const updatedNotes = archivedNotes.filter(data => data.id !== note.id)
        setArchivedNotes(updatedNotes)
        setNotes(prevNotes => [note, ...prevNotes])
    }

    const deleteNote = (note) => {
        const updatedNotes = archivedNotes.filter(data => data.id !== note.id)
        setArchivedNotes(updatedNotes)
        setDeletedNotes(prevNotes => [note, ...prevNotes])
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography variant='h6' fontWeight='bold'>{archived.title}</Typography>
                <Typography variant='body2'>{archived.description}</Typography>
            </CardContent>

            <CardActions>
                <UnarchiveOutlined fontSize='small' sx={{marginLeft: 'auto', 'cursor': 'pointer'}}
                                   onClick={() => unArchiveNote(archived)}/>
                <DeleteRounded fontSize='small' sx={{'cursor': 'pointer'}} onClick={() => deleteNote(archived)}/>
            </CardActions>
        </StyledCard>
    )
}

export default ArchiveNote