import { RestSimpleStatus } from '../component/form/RestSelect';
import { RestSimple } from './loadRestIdName';

export const randomPick = (
  arr: Array<RestSimple>,
  picked: Array<RestSimpleStatus>,
  picked2: Array<RestSimpleStatus>
) => {
  if (picked.length + picked2.length >= arr.length) {
    return null;
  }

  while (true) {
    const idx = Math.floor(Math.random() * arr.length);

    const cur = arr[idx];

    if (
      !picked.find((each) => each.rest.id === cur.id) &&
      !picked2.find((each) => each.rest.id === cur.id)
    ) {
      return cur;
    }
  }
};
