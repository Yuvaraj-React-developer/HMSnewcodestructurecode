import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, StyleSheet, View} from 'react-native';
import HomeScreen from '../modules/HomeModules/HomeScreen';
const Stack = createNativeStackNavigator();
function SettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default SettingStack;

const styles = StyleSheet.create({});
