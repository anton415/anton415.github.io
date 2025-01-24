import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import BasicInfo from './about-information/BasicInfo';
import Icons from './about-information/Icons';
import Mantine from './about-information/Mantine';


export default function App() {
  return (
    <Container maxWidth="md">
      <BasicInfo/>
      <Icons/>

      <Mantine/>
      
      <Divider />

      <Stack spacing={2} sx={{ margin: '10px 0px 10px 0px' }}>
        <h3>Description</h3>
        <span>-</span>
      </Stack>

      <Divider />

      <Stack spacing={2} sx={{ margin: '10px 0px 10px 0px' }}>
        <h3>Skills</h3>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label="iOS" size="small" />
            <Chip color="primary" label="Swift" size="small" />
            <Chip label="Java" size="small" />
            <Chip label="CSS" size="small" />
            <Chip label="JavaScript" size="small" />
            <Chip label="React" size="small" />
            <Chip label="Git" size="small" />
            <Chip label="Figma" size="small" />
          </Stack>
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={2} sx={{ margin: '10px 0px 10px 0px' }}>
        <h3>Experience</h3>
        <h5>Central Bank of the Russian Federation (Bank of Russia)</h5>
        <span>Java developer / Oct 2017 - Present</span>
        <span>
          I am working on creating the banking platform as part of the implementation of the IT
          Strategy of the Bank of Russia. My responsibilities include the implementation business
          logic and styles of forms according to layouts from Figma, creating new components based
          on Vaadin and editing component styles.
        </span>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Java" size="small" />
          <Chip color="primary" label="CSS" size="small" />
          <Chip color="primary" label="Git" size="small" />
          <Chip label="JavaScript" size="small" />
          <Chip label="React" size="small" />
          <Chip label="Figma" size="small" />
        </Stack>
      </Stack>

      <Divider />

      <Stack spacing={2}>
        <h3>Education</h3>
        <h5>Moscow Aviation Institute</h5>
        <span>Master, Economic Security Management / 2023</span>
        <span>Bachelor, Applied Informatics / 2017</span>
      </Stack>
    </Container>
  );
}
