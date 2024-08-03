import {Auth} from 'aws-amplify';
import React, {createContext, useEffect, useState} from 'react';

type UserContextProviderType = {
  children?: React.ReactNode;
};

// type UserType = {
//   address: string;
//   cityName: string;
//   correlationId: number;
//   countryId: number;
//   customerId: number;
//   customerName: string;
//   email: string;
//   employeeId: string;
//   errorMsg: string;
//   phoneNo: string;
//   pinCode: string;
//   stateId: number;
//   statusId: number;
//   statusName: number;
//   userName: string;
//   userTypeId: number;
// };

// type UserContextType = {
//   user?: any;
//   setUser?: any;
//   setPoints?: any;
// };

export const UserContext = createContext({} as any);

export const UserContextProvider = ({children}: UserContextProviderType) => {
  const [user, setUser] = useState<any | null>(null);

  const checkCustomerLogin = async () => {
    try {
      // setLoading(true);
      const customer = await Auth.currentAuthenticatedUser();
      // console.log("**Test**", customer);
      setUser(customer);
    } catch (error) {
      // setLoading(false);
      console.log('Error12: ' + JSON.stringify(error));
    }
  };

  useEffect(() => {
    if (user === null) {
      checkCustomerLogin();
    }
  }, [user]);

  // console.log('handleForSaveUserData', user);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
