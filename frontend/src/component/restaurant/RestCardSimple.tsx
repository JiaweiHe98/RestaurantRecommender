import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import { SliderWrapper } from './SliderWrapper';

interface Props {
  restId: string;
  name: string;
  address: string;
  checked: boolean;
  toggle: () => void;
}

const getPhotoQuery = (id: string) => {
  return gql`
    {
      business(id: "${id}") {
        photos
      }
    }
  `;
};

const RestCardSimple = ({ restId, name, address, checked, toggle }: Props) => {
  const [images, setImages] = useState<Array<string>>(['food.png']);
  const { loading, error, data, refetch } = useQuery(getPhotoQuery(restId));

  useEffect(() => {
    if (data) {
      const phtots: Array<string> = [];
      data.business.photos.forEach((each: string) => phtots.push(each));
      setImages(phtots);
    }
  }, [data, refetch]);

  if (error) {
    refetch();
  }

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
        {images[0] !== 'food.png' ? (
          <SliderWrapper images={images} />
        ) : (
          <Box>
            <SliderWrapper images={images} />
          </Box>
        )}
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">{address}</Typography>
        {/* <Typography variant="body2">{JSON.stringify(imageObjs)}</Typography> */}
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
