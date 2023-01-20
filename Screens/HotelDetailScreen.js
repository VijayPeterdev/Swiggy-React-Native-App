import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";

const HotelDetailScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{
        marginTop:20
      }}>
        <Text>HotelDetailScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelDetailScreen;

const styles = StyleSheet.create({});
