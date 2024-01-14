import {Card, CardActions, CardContent, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import {ArchiveOutlined, DeleteRounded} from '@mui/icons-material'

const StyledCard = styled(Card)`
	width: 240px;
	margin: 8px;
	box-shadow: none;
	border: 1px solid #E0E0E0;
	border-radius: 8px;
`

const Note = ({note}) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.title}</Typography>
                <Typography>{note.description}</Typography>
            </CardContent>

            <CardActions>
                <ArchiveOutlined fontSize='small' sx={{marginLeft: 'auto'}}/>
                <DeleteRounded fontSize='small'/>
            </CardActions>
        </StyledCard>
    )
}

export default Note