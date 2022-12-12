import React, { useMemo, useState } from 'react';
import RestCardFull from '../restaurant/RestCardFull';
import { Box } from '@mui/material';
import { getRecomm } from '../../util/getRecommendation';
import { RestSimple } from '../../util/loadRestIdName';

// export interface Rest {
//   id: string;
//   name: string;
//   star: number;
//   address: string;
//   photos: Array<string>;
// }

// const testRest = [
//   {
//     id: 'OP-m-Kq-1aEWrrlaszFi9w',
//     name: 'Ramble Pizza',
//     star: 4.5,
//     address: 'Philadelphia, PA 19125',
//     photos: [
//       'https://s3-media3.fl.yelpcdn.com/bphoto/UTcaNwlTczX8PDawXfNBcQ/o.jpg',
//     ],
//   },
// ];

interface Props {
  userSelectModel: string;
  selected: Array<string>;
  restSimples: Array<RestSimple>;
}

const RestResults = ({ userSelectModel, restSimples, selected }: Props) => {
  const [restIds, setRestIds] = useState<Array<string>>([]);

  useMemo(() => {
    const getRes = async () => {
      const res = await getRecomm(selected, userSelectModel);
      console.log(res);
      setRestIds(res);
    };

    getRes();
  }, [userSelectModel, selected]);

  // console.log(objectId(userSelectModel));

  return (
    <Box>
      {restIds.map((each) => (
        <RestCardFull
          key={each}
          restId={each}
          restSimple={restSimples.find((rest) => rest.id === each)}
        />
      ))}
    </Box>
  );
};

export default RestResults;
