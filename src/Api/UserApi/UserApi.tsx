// import axios from '../api';

import axios from 'axios';

export const getCustomerByIdApi = async (id: number | string) => {
  try {
    const response = await axios.get(
      `${process.env.VITE_API_URL}/customers/getCustomerById?customerId=${id}`,
    );
    if (response && response.data) {
      return response.data;
    } else {
      console.error('Unexpected response structure:', response);
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};
