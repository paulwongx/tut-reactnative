// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, View, Dimensions } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();
  console.log(useDimensions());

  return (
      <View style={{
        backgroundColor: "#fff", 
        flex:1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}>
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }} />
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }} />
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }} />
        <View style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }} />
        <View style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
          // flexBasis: 200,
        }} />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
