import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const HomePage = () => {
    return (
        <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                This is the home page
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
            React typescript app styled with Material UI.
            </Typography>
        </Container>
    )
  }
  export default HomePage