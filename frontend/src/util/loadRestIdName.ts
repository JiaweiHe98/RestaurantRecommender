import axios from 'axios';

export interface RestSimple {
  id: string;
  name: string;
  address: string;
}

interface LoadRestSimple {
  (): Promise<Array<RestSimple>>;
}

export const loadRestIdName: LoadRestSimple = async () => {
  try {
    const res = await axios.get('/business_id_name_addr.json');
    return res.data;
  } catch (e) {
    return [];
  }
};
