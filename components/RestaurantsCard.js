import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { FootmenuData } from "../Data/FoodMenu";

const RestaurantsCard = () => {
  return (
    <ScrollView    horizontal={true} style={{ gap: 12 }}>
      {FootmenuData.map((data) => (
        <TouchableOpacity  key={data.id}  style={{
            backgroundColor:"white",
            elevation:1,
            marginBottom:12,
            borderRadius:12,
            marginLeft:12,
            marginRight:2
        }}>
        <View
         
          style={{
            marginLeft: 12,
            marginTop: 12,
            
            
            alignItems: "flex-start",
          }}
        >
          <ImageBackground
            borderRadius={7}
            source={{ uri: data.image }}
            style={{ width: 150, height: 190 , marginRight:12}}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "900",
                color: "white",
                position: "absolute",
                top: "70%",
                left: "10%",
              }}
            >
              {data.offer}% OFFER
            </Text>
          </ImageBackground>
          <Text
            style={{
              marginLeft: 12,
              fontSize: 16,
              marginTop:3,
              fontWeight: "bold",
              color: "black",width:"90%"
            }}
          >
            {" "}
            {data.name}
          </Text>
          <View
            style={{
              justifyContent: "center",

              flexDirection: "row",
              marginTop: 6,
              alignItems: "flex-start",
            }}
          >
            <Entypo
              name="star"
              size={18}
              color="white"
              style={{
                backgroundColor: "green",
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                width: 25,
                height: 25,
                padding: 2,
                marginBottom: "10%",
                borderRadius: 50,
              }}
            />

            <Text
              style={{
                marginLeft: 5,
                fontSize:16,
                marginTop: 2,
                fontWeight:"bold",
                color:"orange"
              }}
            >
              {" "}
              {data.Rating}  
            </Text>
        
            
            <Text
            style={{
              marginLeft: 5,
              marginTop: 2,
            
            }}
          >
            {" "}
            {data.deliveryTime}
          </Text>
          </View>
         
        </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    
  );
};

export default RestaurantsCard;

const styles = StyleSheet.create({});
