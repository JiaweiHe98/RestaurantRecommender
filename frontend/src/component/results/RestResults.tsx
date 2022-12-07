import React from 'react';
import RestCardFull from '../restaurant/RestCardFull';

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

const RestResults = () => {
  return (
    <>
      <RestCardFull rests={testRest} />
    </>
  );
};

export default RestResults;
