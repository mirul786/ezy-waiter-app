import {useContext} from 'react';
import {UserContext} from '../ContextApi/UserContext';
import {getUserById} from '../Api/UserApi/UserApi';
import {QueryClient, useQuery} from '@tanstack/react-query';

export const userById = () => {
  const queryClient = new QueryClient();
  const {user} = useContext(UserContext);
  const customerId = user?.attributes?.['custom:customerId'];
  //  const [customer, setCustomer] = useState<any>();

  const {data} = useQuery({
    queryKey: ['customerPoints', customerId],
    queryFn: () => getUserById(customerId),
  });

  return data;
};

export const getAccountStatus = () => {
  const {user} = useContext(UserContext);
  // let res = Boolean(localStorage.getItem("loggedIn"));
  let res = Boolean(user?.attributes);
  // console.log("getAccountStatus", res);
  return res;
};
