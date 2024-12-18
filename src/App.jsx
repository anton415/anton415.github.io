import * as React from 'react';
import Container from '@mui/material/Container';
import LabTabs from './LabTabs';
import BasicInfo from './about-information/BasicInfo';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ListItemButton from '@mui/material/ListItemButton';
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from '@mui/material/SvgIcon';
import MyMailIcon from './static/icons/mail-logo.png';
import StackOverflowIcon from './static/icons/stackoverflow-icon.svg';
import GitHubIcon from './static/icons/github-mark.svg';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from './static/icons/telegram.png';


export default function App() {
  return (
    <Container maxWidth="md">
      <BasicInfo/>
      <Stack spacing={2} alignItems="center">
        <h1>Anton Serdyuchenko, iOS Developer</h1>
        <span>Moscow, Russia</span>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://t.me/AntonSerdyuchenko">
              <ListItemAvatar>
                <Avatar
                  alt="Telegram"
                  src={TelegramIcon}
                />
              </ListItemAvatar>
              <ListItemText primary="Telegram" secondary="Telegram me!" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="mailto:anton415@gmail.com">
              <ListItemAvatar>
                <Avatar
                  alt="Mail"
                  src={MyMailIcon}
                />
              </ListItemAvatar>
              <ListItemText primary="Email" secondary="Reach out with any questions!" />
            </ListItemButton>
          </ListItem>
        </List>
        <Button variant="contained" disabled>Download Resume</Button>
      </Stack>

      <Stack spacing={2} sx={{ margin: '10px 0px 10px 0px' }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" spacing={2}>
            <Button href="https://github.com/anton415">
              <Avatar
                alt="GitHub"
                src={GitHubIcon}
                variant="square"
              />
            </Button>
            <Button href="https://stackoverflow.com/users/7037530/anton-serdyuchenko?tab=profile">
              <Avatar
                alt="StackOverflow"
                src={StackOverflowIcon}
                variant="square"
              />
            </Button>
          </Stack>
        </Box>
      </Stack>

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
