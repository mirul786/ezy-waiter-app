import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import {LoginProps} from '../model/AuthModel';
import Toast from 'react-native-toast-message';
import {Auth} from 'aws-amplify';
import {getUserById} from '../Api/UserApi/UserApi';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {DrawerNavigatorParamList} from '../navigation/types';

const LoginScreen: React.FC<LoginProps> = ({setIsAuthenticated}) => {
  const navigation = useNavigation<NavigationProp<DrawerNavigatorParamList>>();
  const [field, setField] = useState({
    email: '',
    password: '',
    message: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    message: '',
  });

  const isPasswordValidHandler = (password: string) => {
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const isValidPassword = passRegex.test(password);
    return isValidPassword;
  };

  const isEmailValidateHandler = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(email);
    return isEmailValid;
  };

  const signInAuthHandler = (value: string, name: string) => {
    setField({...field, [name]: value});
    setError({...error, email: '', password: '', message: ''});
  };

  const signInValidate = () => {
    if (!field.email) {
      setError({...error, email: 'Please enter your email'});
      Toast.show({
        type: 'error',
        text1: 'Please enter your email',
      });
      return false;
    } else if (!isEmailValidateHandler(field.email)) {
      setError({...error, email: 'Please enter valid email'});
      Toast.show({
        type: 'error',
        text1: 'Please enter valid email',
      });
      return false;
    } else if (!field.password) {
      setError({...error, password: 'Please enter your password'});
      Toast.show({
        type: 'error',
        text1: 'Please enter your password',
      });
      return false;
    } else if (!isPasswordValidHandler(field.password)) {
      setError({
        ...error,
        password:
          'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number',
      });
      Toast.show({
        type: 'error',
        text1:
          'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number',
      });
      return false;
    }
    return true;
  };

  const signInHandler = async () => {
    let val = signInValidate();
    if (val) {
      try {
        const res = await Auth.signIn(
          field?.email.toLowerCase(),
          field?.password,
        );
        console.log('userAtt', res?.attributes);
        const LoggedInUserId = res?.attributes?.['custom:userId'];

        if (LoggedInUserId) {
          try {
            const response = await getUserById(LoggedInUserId);
            console.log('userResponds', response);

            if (response && setIsAuthenticated) {
              // Handle successful response
              setIsAuthenticated(true);
              navigation.navigate('HomeScreen');
              Toast.show({
                type: 'success',
                text1: 'Logged in successfully',
              });
            } else {
              // Handle case when response is not as expected
              console.log('Unexpected response structure:', response);
            }
          } catch (err) {
            Toast.show({
              type: 'error',
              text1: 'Something went wrong',
            });
            console.log('Error in getCustomerByIdApi:', err);
          }
        } else {
          console.log('User ID not found in response attributes');
        }
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: err.message,
        });
        console.log('Error in signIn:', err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/images/background.png')}
      />

      {/* lights */}
      <View style={styles.lightsContainer}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.lightImageLarge}
          source={require('../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={styles.lightImageSmall}
          source={require('../assets/images/light.png')}
        />
      </View>

      {/* title and form */}
      <View style={styles.formContainer}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.title}>
            Login
          </Animated.Text>
        </View>
        <View style={styles.inputContainer}>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'gray'}
              style={styles.input}
              onChangeText={text => signInAuthHandler(text, 'email')}
              value={field?.email}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={[styles.inputWrapper, styles.inputMarginBottom]}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry={true}
              style={styles.input}
              onChangeText={text => signInAuthHandler(text, 'password')}
              value={field?.password}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={styles.fullWidth}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => signInHandler()}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            style={styles.signupContainer}>
            <Text style={styles.signup}>Don't have an account? </Text>
            <Text
              style={styles.signupText}
              //   onPress={() => navigation.push('Signup')}
            >
              SignUp
            </Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  lightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
  },
  lightImageLarge: {
    height: 225,
    width: 90,
  },
  lightImageSmall: {
    height: 160,
    width: 65,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 48,
  },
  titleContainer: {
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 100,
    gap: 10,
  },
  inputWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 16,
    borderRadius: 16,
    width: '100%',
  },
  input: {
    color: 'black',
  },
  inputMarginBottom: {
    marginBottom: 24,
  },
  fullWidth: {
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#00BFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signup: {
    color: 'gray',
  },
  signupText: {
    color: '#00BFFF',
  },
});

export default LoginScreen;
