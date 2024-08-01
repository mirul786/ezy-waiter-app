
export const awsConfig = {
  identityPoolId: '',
  region: 'ap-south-1',
  userPoolId: process.env.VITE_USER_POOL_ID,
  userPoolWebClientId: process.env.VITE_CLIENT_ID,
};

export const OTP_CELL_COUNT = 6;
