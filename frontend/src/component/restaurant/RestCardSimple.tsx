import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import SimpleImageSlider from 'react-simple-image-slider';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  name: string;
  address: string;
  images: Array<string>;
  checked: boolean;
  toggle: () => void;
}

interface Img {
  url: string;
}

const RestCardSimple = ({ name, address, images, checked, toggle }: Props) => {
  const imageObjs: Array<Img> = images.map((each) => {
    return { url: each };
  });

  return (
    <Paper
      onClick={toggle}
      sx={{
        display: 'flex',
        p: 0.5,
        cursor: 'pointer',
        position: 'relative',
        border: checked ? 'solid #1976d2' : 'solid white',
        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(48, 46, 56, 0.06) 0px 0px 20px 0px',
      }}
    >
      <Box onClick={(e) => e.stopPropagation()}>
        <SimpleImageSlider
          style={{
            backgroundColor: 'white',
            cursor: 'default',
            // borderRadius: '10px',
            // overflow: 'hidden',
          }}
          width={100}
          height={100}
          images={imageObjs}
          showBullets={false}
          showNavs={images.length <= 1 ? false : true}
          navSize={15}
          navStyle={2}
          navMargin={6}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">{address}</Typography>
      </Box>
      {checked && (
        <Box
          sx={{
            position: 'absolute',
            // bgcolor: '#1976d2',
            right: 1,
            top: 0.9,
            p: 1,
            // clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
            // clipPath: 'circle(40%)',
          }}
        >
          {/* <CheckIcon sx={{ color: 'white' }} /> */}
          <i className="gg-check-o" style={{ color: '#1976d2' }}></i>
        </Box>
      )}
    </Paper>
  );
};

export default RestCardSimple;
