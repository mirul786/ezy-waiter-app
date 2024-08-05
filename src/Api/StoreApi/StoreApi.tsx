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

export const getProductList = async (storeId: number) => {
  try {
    const response = await axios.get(
      `${process.env.VITE_API_URL}/product/getProduct?lastUpdated=0&pageNumber=0&pageSize=0&storeId=${storeId}`,
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

export const getTableListByFloorId = async (floorId: number,  storeId: number) => {
  try {
    const response = await axios.get(
      `${process.env.VITE_API_URL}/table/getFloorMappedTableList?floorId=${floorId}&storeId=${storeId}`,
    );
    if (response) {
      return response;
    } else {
      console.error('Unexpected response structure:', response);
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Floor Table API  call error:', error);
    throw error;
  }
};