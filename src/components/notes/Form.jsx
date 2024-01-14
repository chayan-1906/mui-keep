import {Box, ClickAwayListener, TextField} from '@mui/material'
import {styled} from '@mui/material/styles'
import {useContext, useRef, useState} from 'react'
import {DataProviderContext} from '../../context/DataProviderContext.jsx'
import {v4 as uuid} from 'uuid'

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	width: 600px;
	box-shadow: 0 1px 2px 0 rgb(60, 64, 67, 30%), 0 2px 6px 2px rgb(60, 64, 67, 15%);
	padding: 10px 15px;
	border-radius: 8px;
	border-color: #E0E0E0;
	margin: auto;
	min-height: 30px;
`

const note = {
    id: uuid(),
    title: '',
    description: '',
}

const Form = () => {
    const [showTitle, setShowTitle] = useState(false)
    const containerRef = useRef()
    const {notes, setNotes} = useContext(DataProviderContext)
    const [addNote, setAddNote] = useState({...note, id: uuid()})

    const onTextAreaClick = () => {
        setShowTitle(true)
        containerRef.current.style.minHeight = '70px'
    }

    const handleClickAway = () => {
        setShowTitle(false)
        containerRef.current.style.minHeight = '30px'
        setAddNote({...note, id: uuid()})

        if (addNote.title || addNote.description) {
            setNotes(prevNotes => [addNote, ...prevNotes])
        }
        console.log(notes)
    }

    const onTextChange = (e) => {
        let noteToSave = {...addNote, [e.target.name]: e.target.value}
        setAddNote(noteToSave)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {
                    showTitle &&
                    <TextField
                        placeholder='Title'
                        variant='standard'
                        InputProps={{disableUnderline: true}}
                        style={{marginBottom: 10}}
                        onChange={(e) => onTextChange(e)}
                        name='title'
                        value={addNote.title}
                    />
                }
                <TextField
                    placeholder='Take a note...'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{disableUnderline: true}}
                    onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='description'
                    value={addNote.description}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form