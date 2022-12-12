import React from 'react';
import { Box, Paper, Typography, Rating } from '@mui/material';
import { SliderWrapper } from './SliderWrapper';
import { Rest } from './Rest';

// export interface Rest {
//   id: string;
//   name: string;
//   star: number;
//   address: string;
//   photos: Array<string>;
// }

export interface Props {
  rest: Rest;
}

const RestCardFull = ({ rest }: Props) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        p: 2,
        // cursor: 'pointer',
        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(48, 46, 56, 0.06) 0px 0px 20px 0px',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box>
          <SliderWrapper size={200} images={rest.photos} />
        </Box>
        <Box sx={{ ml: 2 }}>
          <Typography variant="h5">{rest.name}</Typography>
          <Rating name="read-only" value={rest.star} precision={0.1} readOnly />
          <Typography variant="body1">{rest.address}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RestCardFull;
