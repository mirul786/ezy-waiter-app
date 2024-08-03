import axios from 'axios';

export const getTableList = async (storeId: number) => {
  try {
    const response = await axios.get(
      `${process.env.VITE_API_URL}/table/getTableList?storeId=${storeId}`,
    );
    if (response) {
      return response;
    } else {
      console.error('Unexpected response structure:', response);
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Table API call error:', error);
    throw error;
  }
};
