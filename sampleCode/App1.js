// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View, Image, SafeAreaView, Button, Platform, StatusBar, Alert } from "react-native";

export default function App() {

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello React Native!</Text>
      <TouchableOpacity onPress={()=>console.log("image tapped")}>
        <Image 
        blurRadius={10}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}} />
      
      </TouchableOpacity>
      <Button 
        color="orange"
        title="Click Me" onPress={()=> Alert.alert("My title", "My message", [
          {text: "Yes", onPress: ()=> console.log("yes")},
          {text: "No", onPress: ()=> console.log("no") },
        ])} />
      <Button 
        color="purple"
        title="Second button" onPress={()=> Alert.prompt("My title", "My message", text=> console.log(text))} />
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});