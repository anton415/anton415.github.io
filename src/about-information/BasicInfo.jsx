import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AntonSerdyuchenkoAvatar from '.././static/images/avatar/AntonSerdyuchenko.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicInfo() {
  return (
    <Box display="flex" flexDirection="column" sx={{

      p: 2,
      width: '100%'
    }}>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Anton Serdyuchenko" src={AntonSerdyuchenkoAvatar} sx={{ width: 150, height: 150 }}/>
        <Stack spacing={2}>
          <Typography variant="h3">
            Anton Serdyuchenko
          </Typography>
          <Typography variant="h5">
            iOS Developer
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}