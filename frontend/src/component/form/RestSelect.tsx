import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import RestCardSimple from '../restaurant/RestCardSimple';
import { RestSimple } from '../../util/loadRestIdName';
import { randomPick } from '../../util/randomPick';
import Button from '@mui/material/Button';
import Virtualize from './Virtualize';

interface Props {
  restSimples: Array<RestSimple>;
  selected: Array<RestSimpleStatus>;
  setSelected: (newSelected: Array<RestSimpleStatus>) => void;
  picked: Array<RestSimpleStatus>;
  setPicked: (newPicked: Array<RestSimpleStatus>) => void;
  checkedNP: number;
  setCheckedNP: (newN: number) => void;
  checkedNS: number;
  setCheckedNS: (newN: number) => void;
  userSearchRes: string | null;
  setUserSearchRes: (newInput: string | null) => void;
  pick: () => void;
}

export interface RestSimpleStatus {
  rest: RestSimple;
  checked: boolean;
}

const testImgs = ['food.png', 'logo192.png'];
// const testImgs = ['food.png'];

const RestSelect = ({
  restSimples,
  selected,
  setSelected,
  picked,
  setPicked,
  checkedNP,
  setCheckedNP,
  checkedNS,
  setCheckedNS,
  userSearchRes,
  setUserSearchRes,
  pick,
}: Props) => {
  // const randomPickARest = () => {
  //   const curPick = randomPick(restSimples, picked, selected);
  //   return curPick;
  // };

  const addToSelected = () => {
    const toAdd: Array<RestSimpleStatus> = [];
    const newPick: Array<RestSimpleStatus> = [];

    picked.forEach((each) => {
      if (each.checked) {
        const curPick = randomPick(restSimples, selected, [
          ...picked,
          ...newPick,
        ]);

        // cannot add if use selected in search
        if (
          !selected.find(
            (eachInSelected) => eachInSelected.rest.id === each.rest.id
          )
        ) {
          toAdd.push({ rest: each.rest, checked: false });
        }

        if (curPick !== null) {
          newPick.push({
            rest: curPick,
            checked: false,
          });
        }
      } else {
        newPick.push(each);
      }
    });

    setSelected([...selected, ...toAdd]);
    setPicked(newPick);
    setCheckedNP(0);
  };

  const removeFromSelected = () => {
    setSelected(selected.filter((each) => !each.checked));
    setCheckedNS(0);
  };

  const checkP = (cur: RestSimpleStatus) => {
    setPicked(
      picked.map((each) => {
        if (cur.rest.id === each.rest.id) {
          if (cur.checked) {
            setCheckedNP(checkedNP - 1);
          } else {
            setCheckedNP(checkedNP + 1);
          }

          return {
            rest: each.rest,
            checked: !each.checked,
          };
        } else {
          return each;
        }
      })
    );
  };

  const checkS = (cur: RestSimpleStatus) => {
    setSelected(
      selected.map((each) => {
        if (cur.rest.id === each.rest.id) {
          if (cur.checked) {
            setCheckedNS(checkedNS - 1);
          } else {
            setCheckedNS(checkedNS + 1);
          }

          return {
            rest: each.rest,
            checked: !each.checked,
          };
        } else {
          return each;
        }
      })
    );
  };

  const addFromSearch = (nameAndAddr: string | null) => {
    if (nameAndAddr === null) {
      return;
    }

    const nameAddr = nameAndAddr.split(' | ');
    console.log(nameAddr);
    const cur = restSimples.find(
      (each) => each.name === nameAddr[0] && each.address === nameAddr[1]
    );

    if (!cur) {
      return;
    }

    if (selected.find((each) => each.rest.id === cur.id)) {
      return;
    }

    setSelected([...selected, { rest: cur, checked: false }]);
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6">Pick From Random Restaurants</Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));',
            gap: 1,
          }}
        >
          {picked.map((each) => (
            <RestCardSimple
              key={each.rest.id}
              restId={each.rest.id}
              name={each.rest.name}
              address={each.rest.address}
              checked={each.checked}
              toggle={() => checkP(each)}
            />
          ))}
        </Box>
        <Box sx={{ mt: 1 }}>
          <Button variant="contained" onClick={pick} sx={{ width: 150 }}>
            Generate More
          </Button>
          {picked.length > 0 && (
            <Button
              sx={{ ml: 1, width: 150 }}
              variant="contained"
              onClick={addToSelected}
              disabled={checkedNP >= 1 ? false : true}
            >
              Add to likes
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Not Listed Above? Search For It!</Typography>
        <Box>
          <Virtualize
            restSimples={restSimples}
            userSearRes={userSearchRes}
            setUserSearRes={setUserSearchRes}
          />
        </Box>
        <Box>
          <Button
            sx={{ mt: 1, width: 150 }}
            variant="contained"
            onClick={() => addFromSearch(userSearchRes)}
          >
            Add To Likes
          </Button>
        </Box>
      </Box>
      <Box className="user-selected" sx={{ mt: 2 }}>
        <Box>
          <Typography variant="h6">Restaurants You Like</Typography>
        </Box>
        {selected.length == 0 && (
          <Paper
            variant="outlined"
            sx={{
              minHeight: 109,
              border: 'dashed #eeeeee',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="subtitle1" sx={{ color: '#777' }}>
              Press ADD TO LIKES to add restaurants here
            </Typography>
          </Paper>
        )}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));',
            gap: 1,
          }}
        >
          {selected.map((each) => (
            <RestCardSimple
              key={each.rest.id}
              restId={each.rest.id}
              name={each.rest.name}
              address={each.rest.address}
              checked={each.checked}
              toggle={() => checkS(each)}
            />
          ))}
        </Box>
        <Box>
          <Button
            sx={{ mt: 1, width: 150 }}
            variant="contained"
            onClick={removeFromSelected}
            disabled={checkedNS >= 1 ? false : true}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RestSelect;
