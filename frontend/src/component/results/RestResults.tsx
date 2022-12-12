import React, { useMemo } from 'react';
import RestCardFull from '../restaurant/RestCardFull';
import { Box } from '@mui/material';
import { getRecomm } from '../../util/getRecommendation';

// export interface Rest {
//   id: string;
//   name: string;
//   star: number;
//   address: string;
//   photos: Array<string>;
// }

const testRest = [
  {
    id: 'OP-m-Kq-1aEWrrlaszFi9w',
    name: 'Ramble Pizza',
    star: 4.5,
    address: 'Philadelphia, PA 19125',
    photos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/UTcaNwlTczX8PDawXfNBcQ/o.jpg',
    ],
  },
];

interface Props {
  userSelectModel: string;
  selected: Array<string>;
}

const RestResults = ({ userSelectModel, selected }: Props) => {
  useMemo(() => {
    const getRes = async () => {
      const res = getRecomm(selected, userSelectModel);
    };

    getRes();
  }, [userSelectModel, selected]);

  // console.log(objectId(userSelectModel));

  return (
    <Box>
      <RestCardFull rest={testRest[0]} />
    </Box>
  );
};

export default RestResults;
