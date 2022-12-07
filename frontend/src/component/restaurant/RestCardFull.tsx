import React from 'react';
import { Box, Paper } from '@mui/material';
import { Rest } from './Rest';

// export interface Rest {
//   id: string;
//   name: string;
//   star: number;
//   address: string;
//   photos: Array<string>;
// }

export interface Props {
  rests: Array<Rest>;
}

const RestCardFull = ({ rests }: Props) => {
  return (
    <Paper>
      <Box>hey</Box>
    </Paper>
  );
};

export default RestCardFull;
