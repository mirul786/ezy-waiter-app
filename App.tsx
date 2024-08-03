import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import DraweNavigation from './src/navigation/DraweNavigation/DraweNavigation';
import Feed from './src/screens/Feed';
import LoginScreen from './src/screens/LoginScreen';
import Toast from 'react-native-toast-message';
import {Amplify} from 'aws-amplify';
import {awsConfig} from './src/config/awsConfig';
import {UserContextProvider, UserContext} from './src/ContextApi/UserContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const {user} = useContext(UserContext); // Get user from context

  useEffect(() => {
    // Simulate an async task like checking authentication status
    const initialize = async () => {
      try {
        // Perform any initialization or fetch logic if needed
        setIsLoading(false);
      } catch (error) {
        console.error('Initialization error:', error);
        setIsLoading(false);
      }
    };

    initialize();
  }, []);

  Amplify.configure(awsConfig);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={MainApp}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

function MainApp(): React.JSX.Element {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{flex: 1}}>
          <DraweNavigation />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => (
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
