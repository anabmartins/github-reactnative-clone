import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const handleTermsPress = () => {
    Linking.openURL('https://docs.github.com/pt/site-policy/github-terms/github-terms-of-service');
  };

  const handlePrivacyPress = () => {
    Linking.openURL('https://docs.github.com/pt/site-policy/privacy-policies/github-privacy-statement');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo1}>
        <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode='contain'></Image>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>sign in with GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={[styles.buttonText, {color:'white'}]}>sign in with GitHub Enterprise</Text>
        </TouchableOpacity>
        <View style={styles.termsPrivacyContainer}>
          <Text style={styles.text}>By signing in you accept our </Text>
          <TouchableOpacity onPress={handleTermsPress}>
            <Text style={[styles.text, styles.link]}>Terms of use</Text>
          </TouchableOpacity>
          <Text style={styles.text}> and </Text>
          <TouchableOpacity onPress={handlePrivacyPress}>
            <Text style={[styles.text, styles.link]}>Privacy policy.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 140,
    height: 100,
    margin: 'auto',
    marginBottom: 150,
  },
  text: {
    marginTop: 15,
    color: 'white',
    fontSize: 11,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#4c70a1',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  button1: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  button2: {
    backgroundColor: '#201F24',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    width: "100%",
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  termsPrivacyContainer: {
    flexDirection: 'row',
  },
});