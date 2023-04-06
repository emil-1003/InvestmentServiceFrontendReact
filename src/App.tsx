import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  return (
    <div>
      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Investment Service
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          React typescript app styled with Material UI.
        </Typography>
      </Container>
    </div>
  );
}

export default App;
