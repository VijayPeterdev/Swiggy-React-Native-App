import {View, Text, Image} from 'react-native';
import React from 'react';
const TabIcons = ({focused, icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height:10,
        
        width: 50,
        
      }}>
      <Image
        source={icon}
        resizeMode={'contain'}
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? "orange" :"gray"
        }}
      />

      {focused && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: -18,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: "orange",
          }}></View>
      )}
    </View>
  );
};

export default TabIcons;
