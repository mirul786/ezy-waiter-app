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
import {UserContextProvider} from './src/ContextApi/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate an async task like checking authentication status
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  Amplify.configure(awsConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen
            name="LoginScreen"
            component={(props: any) => (
              <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />
            )}
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
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <DraweNavigation />
        </GestureHandlerRootView>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
