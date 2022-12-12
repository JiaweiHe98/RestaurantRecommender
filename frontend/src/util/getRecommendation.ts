import axios from 'axios';
import { url } from './url';

interface getRecommFunc {
  (selected: Array<string>, model: string): Promise<Array<string>>;
}

export const getRecomm: getRecommFunc = async (
  selected: Array<string>,
  model: string
) => {
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

    return res.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
