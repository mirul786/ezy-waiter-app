import axios from '../api';

export const getUserById = async (id: number | string) => {
  try {
    const response = await axios.get(
      `${process.env.VITE_API_URL}/store/getUserById?userId=${id}`,
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
