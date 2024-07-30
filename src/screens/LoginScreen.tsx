import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
// import {useNavigation} from '@react-navigation/native';
import {LoginProps} from '../model/AuthModel';

const LoginScreen: React.FC<LoginProps> = ({setIsAuthenticated}) => {
  // const navigation = useNavigation();
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
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={[styles.inputWrapper, styles.inputMarginBottom]}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              style={styles.input}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={styles.fullWidth}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => setIsAuthenticated && setIsAuthenticated(true)}>
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
