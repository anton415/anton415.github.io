import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Container from '@mui/material/Container';
import AntonSerdyuchenkoAvatar from '.././static/images/avatar/AntonSerdyuchenko.png';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function OldBasicInfo() {
  return (
      <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
      >
          <Item>
              <Avatar alt="Anton Serdyuchenko" src={AntonSerdyuchenkoAvatar} sx={{ width: 240, height: 240 }}/>
          </Item>
          <Item>
              <Typography variant="h1" component="h2">
                  Anton Serdyuchenko
              </Typography>
              <Typography variant="h2" component="h3">
                  Born in 1993 in Moscow, Russia.
              </Typography>
          </Item>
      </Stack>


  );
}