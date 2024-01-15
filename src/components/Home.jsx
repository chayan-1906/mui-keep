import {Box} from '@mui/material'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ArchiveNotes from "./archives/ArchiveNotes.jsx";
import Notes from "./notes/Notes.jsx";
import SwipeDrawer from "./SwipeDrawer.jsx";
import DeleteNotes from "./trashes/DeleteNotes.jsx";

const Home = () => {
    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <BrowserRouter>
                <SwipeDrawer/>
                <Routes>
                    <Route path='/' element={<Notes/>}/>
                    <Route path='/archive' element={<ArchiveNotes/>}/>
                    <Route path='/trash' element={<DeleteNotes/>}/>
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default Home