import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imagesrc={require("../images/forest.jpg")}
        score="6"
      />
      <ImageDetail
        title="Mountain"
        imagesrc={require("../images/mountain.jpg")}
        score="9"
      />
      <ImageDetail
        title="Beach"
        imagesrc={require("../images/beach.jpg")}
        score="3"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
