import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const HotelCard = ({hotelname, hotelrating,deliverytime, hoteladdres,hotelimage,navigation}) => {
  return (
    <TouchableOpacity  onPress={() => navigation.navigate("HotelDetailScreen")}
      style={{
        marginBottom: 7,
        flexDirection: "row",

        elevation: 2,
        borderRadius: 12,
        padding: 10,
        margin: 10,
        backgroundColor: "white",
      }}
    >
      <Image
        borderRadius={12}
        source={{
          uri:hotelimage
        }}
        style={{
          width: 130,
          height: 130,
        }}
      />
      <View
        style={{
          padding: 10,
          marginLeft: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{hotelname} </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <FontAwesome
            style={{
              width: 25,
              height: 25,
              alignItems: "center",
              marginRight: 4,
              justifyContent: "center",
              padding: 4,
              textAlign: "center",
              borderRadius: 30,
              backgroundColor: "green",
            }}
            name="star"
            size={16}
            color="white"
          />
          <Text>{hotelrating} . {deliverytime}</Text>
        </View>
        <View
          style={{
            marginTop: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Ionicons
            name="location-outline"
            style={{ marginRight: 5 }}
            size={24}
            color="black"
          />

          <Text
            style={{
              width: "65%",
              flexWrap: "wrap",
            }}
          >{hoteladdres}
          </Text>

        </View>
        <View style={{flexDirection:"row", alignItems:"center" }}>
        <MaterialIcons name="delivery-dining" size={24} color="orange" />
        <Text> Free Delivery</Text>

        </View>

      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({});
