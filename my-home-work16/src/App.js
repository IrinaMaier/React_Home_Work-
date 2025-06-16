import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function App() {
  const[open, setOpen]=useState(false);

  const handleClickOpen=()=>{
    setOpen(true)
  }

  const handleClickClose=()=>{
    setOpen(false);
  }
  return (
    <> 
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          My react app with UI app
        </Typography>
      </Toolbar>
    </AppBar>

    <Container sx={{mt:4}}>
    <Typography>
    Welcome
    </Typography>
    <Typography variant='body1' paragraph>
    Нажмите кнопку ниже, чтобы открыть диалоговое окно.
    </Typography>
    <Button variant='contained' color='primary' onClick={handleClickOpen}> Открыть диалог
    </Button>
    </Container>


    <Dialog open={open} onClose={handleClickClose}>
    <DialogTitle>Hello!</DialogTitle>
    <DialogContent>
    <DialogContentText> Это диалоговое окно создано с использованием Material UI.
    </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClickClose} color='primary'>
    Close 
    </Button>
    </DialogActions>
    </Dialog>
    </>

  );
}

export default App;
