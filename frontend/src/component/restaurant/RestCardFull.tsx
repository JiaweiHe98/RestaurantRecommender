import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Rating, Chip } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import { useQuery, gql } from '@apollo/client';
import { SliderWrapper } from './SliderWrapper';
import { RestSimple } from '../../util/loadRestIdName';

// export interface Rest {
//   id: string;
//   name: string;
//   star: number;
//   address: string;
//   photos: Array<string>;
// }

export interface Props {
  restId: string;
  restSimple: RestSimple | undefined;
}

const getRestQuery = (id: string) => {
  return gql`
    {
      business(id: "${id}") {
        rating
        review_count
        reviews(limit: 1) {
          text
          time_created
        }
        photos
        categories {
          title
        }
      }
    }
  `;
};

interface Category {
  title: string;
}

interface Review {
  text: string;
  time_created: string;
}

interface Res {
  rating: number;
  review_count: number;
  reviews: Array<Review>;
  photos: Array<string>;
  categories: Array<Category>;
}

const emptyRes = {
  rating: 0,
  review_count: 0,
  reviews: [],
  photos: [],
  categories: [],
};

const RestCardFull = ({ restId, restSimple }: Props) => {
  const [images, setImages] = useState<Array<string>>(['food.png']);
  const [rest, setRest] = useState<Res>(emptyRes);
  const { loading, error, data, refetch } = useQuery(getRestQuery(restId));

  useEffect(() => {
    if (data) {
      const photos: Array<string> = [];
      data.business.photos.forEach((each: string) => photos.push(each));
      setImages(photos);
      setRest(data.business);
    }
  }, [data, refetch]);

  if (error) {
    refetch();
  }

  if (restSimple === undefined) {
    restSimple = { id: '', name: '', address: '' };
  }

  const review = rest.reviews.length === 0 ? '' : rest.reviews[0].text;
  return (
    <Paper
      sx={{
        display: 'flex',
        mb: 2,
        p: 2,
        // cursor: 'pointer',
        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(48, 46, 56, 0.06) 0px 0px 20px 0px',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box>
          {images[0] !== 'food.png' ? (
            <SliderWrapper size={200} images={images} />
          ) : (
            <Box>
              <SliderWrapper size={200} images={images} />
            </Box>
          )}
        </Box>
        <Box sx={{ ml: 2 }}>
          <Typography variant="h5">{restSimple.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating
              name="read-only"
              value={rest.rating}
              precision={0.1}
              readOnly
              sx={{ mr: 0.5 }}
            />
            <Typography variant="button">{`${rest.rating}`}</Typography>
            <Chip
              sx={{ ml: 0.5 }}
              icon={<FaceIcon />}
              label={`${rest.review_count}`}
              variant="outlined"
              size="small"
            />
          </Box>
          <Box>
            {rest.categories.map((each) => (
              <Chip
                sx={{ m: 0.5, ml: 0, borderRadius: '8px', fontWeight: 500 }}
                label={`${each.title}`}
              />
            ))}
          </Box>

          <Typography variant="body1">{restSimple.address}</Typography>
          <Typography variant="body2" sx={{ color: '#6e7072' }}>
            {review}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RestCardFull;
