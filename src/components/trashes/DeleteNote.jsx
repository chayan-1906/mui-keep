import {Card, CardActions, CardContent, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import {DeleteForeverRounded, DeleteRounded, RestoreFromTrashRounded} from '@mui/icons-material'
import {useContext} from 'react';
import {DataProviderContext} from '../../context/DataProviderContext.jsx';

const StyledCard = styled(Card)`
	width: 240px;
	margin: 8px;
	box-shadow: none;
	border: 1px solid #E0E0E0;
	border-radius: 8px;
`

const DeleteNote = ({deleted}) => {
    const {deletedNotes, setNotes, setDeletedNotes} = useContext(DataProviderContext)

    const deleteForeverNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes)
    }

    const restoreNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes)
        setNotes(prevNotes => [note, ...prevNotes])
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography variant='h6' fontWeight='bold'>{deleted.title}</Typography>
                <Typography variant='body2'>{deleted.description}</Typography>
            </CardContent>

            <CardActions>
                <DeleteForeverRounded fontSize='small' sx={{marginLeft: 'auto', 'cursor': 'pointer'}}
                                      onClick={() => deleteForeverNote(deleted)}/>
                <RestoreFromTrashRounded fontSize='small' sx={{'cursor': 'pointer'}} onClick={() => restoreNote(deleted)}/>
            </CardActions>
        </StyledCard>
    )
}

export default DeleteNote