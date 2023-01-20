import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FoodCategoryData } from "./../Data/CategoryData";

const FoodCategory = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{
        marginTop: 12,
        marginLeft: 5,
        backgroundColor:"white",
        elevation:1,
        padding:7,
        borderRadius:12
      }}
    >
      {FoodCategoryData.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          style={{
            alignItems: "center",
          }}
        >
          <Image
            resizeMode="cover"
            source={{ uri: `${cat.image}` }}
            style={{
              width: 80,
              marginRight: 12,
              borderRadius: 40,
              height: 80,
            }}
          />

          <Text
            style={{
                textAlign:"center",
              fontSize: 14,
              marginTop: 5,
            }}
          >
            {cat.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({});
