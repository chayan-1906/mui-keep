import List from '@mui/material/List'
import {ArchiveRounded, DeleteOutlineOutlined, LightbulbOutlined} from '@mui/icons-material'
import {Box, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import theme from '../globals/Theme.jsx'
import {useNavigate} from 'react-router-dom'

const NavList = ({setOpen}) => {
    const navList = [
        {id: 1, name: 'Notes', icon: <LightbulbOutlined/>, route: '/'},
        {id: 2, name: 'Archive', icon: <DeleteOutlineOutlined/>, route: '/archive'},
        {id: 3, name: 'Trash', icon: <ArchiveRounded/>, route: '/trash'},
    ]

    let navigate = useNavigate()

    return (
        <Box flexGrow={1} /*onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}*/>
            <List>
                {
                    navList.map((item) => (
                        <ListItemButton key={item.id} sx={{
                            '&:hover': {
                                // background: theme.palette.primary.main,
                                borderTopRightRadius: theme.shape.largeBorderRadius,
                                borderBottomRightRadius: theme.shape.largeBorderRadius,
                            },
                        }} onClick={()=> navigate(item.route)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItemButton>
                    ))
                }
            </List>
        </Box>
    )
}

export default NavList