import {Box, Grid} from '@mui/material'
import {styled} from '@mui/material/styles'
import Form from './Form.jsx'
import Note from './Note.jsx'
import {useContext} from 'react'
import {DataProviderContext} from '../../context/DataProviderContext.jsx'
import {isListEmpty} from '../../globals/GlobalFunctions.jsx'
import EmptyNotes from './EmptyNotes.jsx'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}))

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
};


const Notes = () => {
    const {notes, setNotes} = useContext(DataProviderContext)

    const onDragEnd = (result) => {
        if (!result.destination) return
        const items = reorder(
            notes,
            result.source.index,
            result.destination.index,
        )

        setNotes(items)
    }

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                <Form/>
                {
                    isListEmpty(notes) && <EmptyNotes/>
                }
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppable='droppable'>
                        {(provided, snapsnot) => (
                            <Grid container sx={{marginTop: '10px'}}
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}>
                                {
                                    !isListEmpty(notes) &&
                                    notes.map((note, index) => {
                                        return (
                                            <Draggable key={note.id} draggableId={note.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <Grid item
                                                          ref={provided.innerRef}
                                                          {...provided.draggableProps}
                                                          {...provided.dragHandleProps}>
                                                        <Note key={note.id} note={note}/>
                                                    </Grid>
                                                )}
                                            </Draggable>
                                        )
                                    })
                                }
                            </Grid>
                        )}
                    </Droppable>
                </DragDropContext>
            </Box>
        </Box>
    )
}

export default Notes