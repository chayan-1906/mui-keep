import {Card, CardActions, CardContent, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import {ArchiveOutlined, DeleteRounded} from '@mui/icons-material'
import {useContext} from "react";
import {DataProviderContext} from "../../context/DataProviderContext.jsx";

const StyledCard = styled(Card)`
	width: 240px;
	margin: 8px;
	box-shadow: none;
	border: 1px solid #E0E0E0;
	border-radius: 8px;
`

const Note = ({note}) => {
    const {notes, setNotes, setArchivedNotes, setDeletedNotes} = useContext(DataProviderContext)

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes)
        setArchivedNotes(prevNotes => [note, ...prevNotes])
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes)
        setDeletedNotes(prevNotes => [note, ...prevNotes])
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography variant='h6' fontWeight='bold'>{note.title}</Typography>
                <Typography variant='body2'>{note.description}</Typography>
            </CardContent>

            <CardActions>
                <ArchiveOutlined fontSize='small' sx={{marginLeft: 'auto', 'cursor': 'pointer'}}
                                 onClick={() => archiveNote(note)}/>
                <DeleteRounded fontSize='small' sx={{'cursor': 'pointer'}} onClick={() => deleteNote(note)}/>
            </CardActions>
        </StyledCard>
    )
}

export default Note