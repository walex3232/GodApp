import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://static.paodeacucar.com/img/uploads/1/771/529771.jpg",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Entregue Agora!
            </Text>
            <Text className="font-bold text-xl">
              Localização Atual
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View>
          <View className="flex-row space-x-2 bg-gray-200 p-3">
            <SearchIcon color="gray" />
            <TextInput
              placeholder="Itens De Supermercado"
              keyboardType="default"
            />
          </View>

          <AdjustmentsIcon color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
