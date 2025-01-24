import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GitHubIcon from '../static/icons/github-mark.svg';
import StackOverflowIcon from '../static/icons/stackoverflow-icon.svg';
import TelegramIcon from '../static/icons/telegram.png';
import MyMailIcon from '../static/icons/mail-logo.png';;

export default function Icons() {
  return (
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
          <Button href="https://t.me/AntonSerdyuchenko">
            <Avatar
              alt="Telegram"
              src={TelegramIcon}
              variant="square"
            />
          </Button>
          <Button href="mailto:anton415@gmail.com">
            <Avatar
              alt="Mail"
              src={MyMailIcon}
              variant="square"
            />
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}