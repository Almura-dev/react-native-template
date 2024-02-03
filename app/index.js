import { View, Text } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View className=" bg-yellow-200 w-full h-full flex justify-center items-center">
      <View className="bg-black p-2 rounded-lg gap-4 flex ">
        <Text className="text-white text-4xl text-center">Hello World!</Text>
        <Text className="text-white text-2xl text-center">This is my first App</Text>
        <Text className="text-white text-4xl text-center">Alan Muhammad</Text>
      </View>
    </View>
  );
}
