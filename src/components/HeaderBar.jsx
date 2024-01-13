import {AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
import {MenuRounded} from '@mui/icons-material'
import theme from '../globals/Theme.jsx'

const Header = styled(AppBar)`
	z-index: 1201;
	background-color: ${theme.palette.background.default};
	height: 70px;
	box-shadow: inset 0 -1px 0 0 #DADCE0;
`

const Heading = styled(Typography)`
    color: #5F6368;
    font-size: 24px;
    margin-left: 16px;
`

const HeaderBar = ({open, handleDrawer}) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png'

    return (
        <Header open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge='start'
                    sx={{marginRight: '20px'}}>
                    <MenuRounded/>
                </IconButton>
                <img src={logo} alt='logo' style={{width: 26}}/>
                <Heading>Keep</Heading>
            </Toolbar>
        </Header>
    )
}

export default HeaderBar