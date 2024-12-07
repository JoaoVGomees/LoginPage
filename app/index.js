import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationIndependentTree, NavigationContainer } from '@react-navigation/native';
import Routes from '../src/routes';

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
