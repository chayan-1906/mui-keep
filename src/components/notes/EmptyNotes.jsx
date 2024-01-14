import {Box, Typography} from '@mui/material'
import {LightbulbOutlined} from '@mui/icons-material'
import {styled} from "@mui/material/styles";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
`

const StyledLightBulb = styled(LightbulbOutlined)`
    font-size: 120px;
    color: #F5F5F5;
`

const StyledText = styled(Typography)`
    color: #80868B;
    font-size: 22px;
`

const EmptyNotes = () => {
    return (
        <Container>
            <StyledLightBulb/>
            <StyledText>Notes you add appear here</StyledText>
        </Container>
    )
}

export default EmptyNotes