import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ImageSlider } from "react-native-image-slider-banner";
import { SliderData } from "./../Data/sliderData";
import FoodCategory from "../components/FoodCategory";
import RestaurantsCard from "../components/RestaurantsCard";
import { Ionicons } from "@expo/vector-icons";
import HotelCard from "./../components/HotelCard";
import { HotelCardData } from "../Data/HotelCardData";

const ScrollBtn = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginLeft: 12,
          borderWidth: 0.7,
          backgroundColor: "white",
          borderColor: "gray",
          borderRadius: 30,

          padding: 12,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            marginRight: 50,
            fontWeight: "bold",
          }}
        >
          Filter
        </Text>
        <Ionicons name="filter" size={18} />
      </TouchableOpacity>

      {/* ---------------------- */}

      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginLeft: 12,
          borderWidth: 0.7,
          borderColor: "gray",
          borderRadius: 30,
          backgroundColor: "white",

          padding: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            marginRight: 12,
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Sort By Rating
        </Text>
      </TouchableOpacity>

      {/* ---------------------- */}

      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginLeft: 12,
          borderWidth: 0.7,
          borderColor: "gray",
          borderRadius: 30,
          backgroundColor: "white",

          padding: 12,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            marginRight: 12,
            fontWeight: "bold",
          }}
        >
          Sort By Price
        </Text>
      </TouchableOpacity>
    </>
  );
};

// Extra Need Components above //

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: "5%" }}>
      <View style={{
        backgroundColor:"white",
        elevation:30,
        marginBottom:130
        
      }}>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 12,
            elevation:10,
            paddingBottom:4,
            paddingHorizontal: 10,
            // marginBottom: 3,
            backgroundColor:"white",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
           
            }}
          >
            <Image
              resizeMode="contain"
              source={{
                uri: "https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png",
              }}
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {" "}
              விஜய் Swiggy
            </Text>
          </View>

          <Image
            resizeMode="contain"
            source={require("../assets/vj.jpg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderColor: "orange",
              borderWidth: 1,
            }}
          />
        </View>

        {/* SearchBar */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#00000",
              justifyContent: "space-between",
              marginHorizontal: 10,
              alignItems: "center",
              width: "95%",
              marginTop: 12,
              borderColor: "gray",
              borderWidth: 1,
              paddingVertical: 9,
              borderRadius: 12,

              paddingHorizontal: 10,
              marginBottom: 6,
            }}
          >
            <TextInput
              placeholder="Search for Restaurant items or more ..."
              style={{
                marginLeft: 2,
              }}
            />

            <Feather name="search" size={24} color="orange" />
          </View>

          {/* Searchbar end */}

          {/* Slider  */}
          <View style={{ marginTop: 10 }}>
            <ImageSlider
              data={SliderData}
              autoPlay={true}
              caroselImageContainerStyle={{
                borderRadius: 40,
              }}
              previewImageStyle={{}}
              caroselImageStyle={{
                borderRadius: 10,
                height: 160,
                padding: 30,
              }}
              closeIconColor="#ff368"
              activeIndicatorStyle={{
                backgroundColor: "red",
              }}
              onClick={(item) => console.warn(item)}
            />
          </View>

          {/* Food Category Component */}

          <Text
            style={{
              marginLeft: 12,
              fontWeight: "bold",
              marginTop: 12,
              fontSize: 18,
            }}
          >
            What On your Mind ?
          </Text>
          <FoodCategory />

          <Text
            style={{
              marginLeft: 12,
              fontWeight: "bold",
              marginTop: 12,
              fontSize: 18,
            }}
          >
            {" "}
            Get it Quick{" "}
          </Text>

          {/* restaurants Card  Component*/}

          <RestaurantsCard />

          {/* Slidercard2 */}
          <View style={{ marginTop: 10 }}>
            <ImageSlider
              data={SliderData}
              autoPlay={true}
              caroselImageContainerStyle={{
                borderRadius: 40,
                marginBottom: 12,
              }}
              previewImageStyle={{}}
              caroselImageStyle={{
                borderRadius: 10,
                height: 160,
                padding: 30,
              }}
              closeIconColor="#ff368"
              activeIndicatorStyle={{
                backgroundColor: "red",
              }}
              onClick={(item) => console.warn(item)}
            />
          </View>

          {/* Scroll Button  */}
          <ScrollView horizontal={true} style={{ marginBottom: 10 }}>
            <ScrollBtn />
          </ScrollView>

          {HotelCardData.map((hotel) => (
            <HotelCard
              navigation={navigation}
              key={hotel.id}
              hoteladdres={hotel.address}
              hotelname={hotel.name}
              hotelimage={hotel.image}
              deliverytime={hotel.deliveryTime}
              hotelrating={hotel.Rating}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  color: {
    color: "red",
  },
});
