import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/page/SplashScreen/components/Main';
import SignIn from './src/page/SignIn';
import SignUp from './src/page/SignUp';
import Home from './src/page/Home';
import BookCollection from './src/page/BookCollection';
import FAQ from './src/page/FAQ';
import Profile from './src/page/Profile';
import UpdateProfile from './src/page/UpdateProfile';
import Settings from './src/page/Settings';
import Help from './src/page/Help';
import NotificationSettings from './src/page/NotificationSettings';
import RiwayatPinjam from './src/page/RiwayatPinjam';
import Pengembalian from './src/page/Pengembalian';
import Peminjaman from './src/page/Peminjaman';
import MyProfile from './src/page/MyProfile';
import './src/config/firebase';
import {UserProvider} from './src/context/UserContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BookCollection" component={BookCollection} />
          <Stack.Screen name="FAQ" component={FAQ} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen
            name="NotificationSettings"
            component={NotificationSettings}
          />
          <Stack.Screen name="RiwayatPinjam" component={RiwayatPinjam} />
          <Stack.Screen name="Pengembalian" component={Pengembalian} />
          <Stack.Screen name="Peminjaman" component={Peminjaman} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
