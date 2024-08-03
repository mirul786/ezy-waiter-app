// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query';
// import {getTableList} from '../../Api/StoreApi/StoreApi';
// import TableContainer from './TableContainer';

// const queryClient = new QueryClient();

// const Tables = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TableData />
//     </QueryClientProvider>
//   );
// };

// const TableData = () => {
//   const storeId = 77;

//   const {isLoading, error, data} = useQuery({
//     queryKey: ['tables', storeId],
//     queryFn: () => getTableList(storeId),
//   });

//   if (isLoading) return <Text>Loading...</Text>;

//   if (error) return <Text>An error has occurred: {error.message}</Text>;

//   console.log("TableData", data)

//   return <TableContainer data={data} />;
// };

// export default Tables;

// const styles = StyleSheet.create({});
