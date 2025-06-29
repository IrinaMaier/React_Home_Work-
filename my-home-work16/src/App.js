import React, { useState } from 'react';
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
  Box
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            My React App with Material UI
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ py: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="body1" paragraph>
            Нажмите кнопку ниже, чтобы открыть диалоговое окно.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClickOpen}
          aria-label="Open dialog"
        >
          Открыть диалог
        </Button>
      </Container>

      <Dialog 
        open={open} 
        onClose={handleClickClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Hello!</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Это диалоговое окно создано с использованием Material UI.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClickClose} 
            color="primary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;