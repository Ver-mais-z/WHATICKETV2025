import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { StyledClearIcon } from './styles';

export default function EmptyTable() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'lightgray',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography variant="h3" component="div">
        No hay informes de investigación para mostrar para el período seleccionado.
      </Typography>
      <StyledClearIcon />
    </Box>
  );
}
