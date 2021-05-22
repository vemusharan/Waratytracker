import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import Authentication from './screens/Authentication';
import Authenticated from './screens/Authenticated';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '46319797909-fijg7och53rbau8jnkb87f7vf5hqngq5.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    return <Authenticated />;
  }

  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}
