import * as React from 'react';
import { spacing } from '@mui/system';
import Container from '@mui/material/Container';
import About from './About';

export default function App() {
  return (
    <Container maxWidth="md" sx={{mt: 5}}>
      <About />
    </Container>
  );
}
