import { Box, Paper, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Header = () => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        border: 'none',
        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(48, 46, 56, 0.06) 0px 3px 10px 0px',
      }}
    >
      <Box>
        <Avatar
          sx={{ width: 50, height: 50 }}
          alt="Restaurant Recommender Avater"
          src="/food.png"
        />
      </Box>
      <Box sx={{ pl: 1 }}>
        <Typography variant="h4">Restaurant Recommender</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <Button 
        variant="outlined"
        onClick={() => {
          window.location.href = 'https://github.com/JiaweiHe98/RestaurantRecommender';
        }}>github</Button>
      </Box>
    </Paper>
  );
};

export default Header;
