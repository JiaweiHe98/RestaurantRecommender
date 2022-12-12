import axios from 'axios';
import { url } from './url';

export const getRecomm = async (selected: Array<string>, model: string) => {
  try {
    const json = JSON.stringify({
      selected,
      model,
    });

    const res = await axios.post(`${url}/recomm`, json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};
