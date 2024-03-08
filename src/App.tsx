import './App.css'
import { Box, styled } from '@mui/material';

import AppLogo from './assets/logo.svg';
import AddLabComponent from './pages/AddLabComponent';

const StyledBoxContainer = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

const StyledSidebar = styled(Box)({
  flexBasis: '192px',
  maxWidth: '192px', 
  backgroundColor: '#3B76EF',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  borderTopRightRadius: '8px'
});

const StyledSidebarHeader = styled(Box)({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  width: '100%',
  paddingLeft: '15px'
});


const StyledLogoText = styled('p')({
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "15px",
  letterSpacing: "0.1em",
  textAlign: "left",
  color:'#ffffff'
});

const StyledContentContainer = styled(Box)({
  flexBasis: 'calc(100vw - 192px)'
})


function App() {

  return (
    <StyledBoxContainer>
     <StyledSidebar>
      <StyledSidebarHeader>
        <img src={AppLogo} alt='logo' />
        <StyledLogoText>MATERNO</StyledLogoText>
      </StyledSidebarHeader>
     </StyledSidebar>
     <StyledContentContainer>
      <AddLabComponent />
     </StyledContentContainer>
    </StyledBoxContainer>
  )
}

export default App
