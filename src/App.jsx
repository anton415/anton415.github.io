import * as React from 'react';
import Container from '@mui/material/Container';
import LabTabs from './LabTabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <Container maxWidth="md">
{/*       <LabTabs /> */}
      <Stack spacing={2} alignItems="center">
        <h1>Anton Serdyuchenko, iOS Developer</h1>
        <span>Moscow, Russia</span>
        <Button variant="contained">Download Resume</Button>
      </Stack>

      <Stack spacing={2}>
        <h3>Description</h3>
        <span>-</span>
      </Stack>

      <Stack spacing={2}>
        <h3>Qualifications</h3>
        <span>-</span>
      </Stack>

      <Stack spacing={2}>
        <h3>Portfolio</h3>
        <span>-</span>
      </Stack>


      <Stack spacing={2}>
        <h3>Contacts</h3>
        <span>-</span>
      </Stack>

    </Container>
  );
}
