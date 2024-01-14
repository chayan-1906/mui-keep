import SwipeDrawer from './SwipeDrawer.jsx'
import Notes from './notes/Notes.jsx'
import {Box} from '@mui/material'

const Home = () => {
    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <SwipeDrawer/>
            <Notes/>
        </Box>
    )
}

export default Home