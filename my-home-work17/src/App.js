import React, {useState} from 'react';
import{ThemeProvider, createTheme, CssBaseline, Typography} from '@mui/material'
import styled from '@emotion/styled'

const lightTheme=createTheme({
  palette:{
    mode:'light',
    background:{
      default:'ffffff',
    },
    primary:{
      main:'#1976d2',
    }
  }
})

const darkTheme=createTheme({
  palette:{
    mode:'dark',
    background:{
      default:'#121212',
    },
     primary: {
      main: '#90caf9',
  }
}
})

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <ToggleButton onClick={toggleTheme}>
          Toggle Theme
        </ToggleButton>
      </div>
    </ThemeProvider>
  );
}
const ToggleButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px',
  '&:hover': {
    opacity: 0.9,
  },
}));

export default App;
