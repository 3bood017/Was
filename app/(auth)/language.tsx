// File: app/language.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { icons, images } from '@/constants';

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ar'>('en');

  const handleContinue = async () => {
    try {
      await AsyncStorage.setItem('language', selectedLanguage);
      router.replace('/welcome');
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 px-5 py-10 items-center">
        {/* Header with Arabic title */}
        <Text className="text-4xl font-bold text-gray-800 text-center mb-8">اختار اللغة</Text>

        {/* Main illustration */}
        <View className="w-full items-center justify-center my-10">
          <Image 
            source={images.lang} 
            className="w-11/12 h-72"
            resizeMode="contain"
          />
        </View>

        {/* Language options */}
        <View className="w-full mb-10">
          {/* Arabic option */}
          <TouchableOpacity 
            className={`flex-row items-center justify-between bg-white rounded-xl py-5 px-5 mb-4 shadow-md ${selectedLanguage === 'ar' ? 'border border-gray-300' : ''}`}
            onPress={() => setSelectedLanguage('ar')}
          >
            <Image 
              source={icons.ar} 
              className="w-12 h-8 rounded-sm"
            />
            <Text className="flex-1 text-xl font-semibold text-right ml-4">العربية </Text>
            <View className={`w-6 h-6 rounded-full ml-4 border-2 ${selectedLanguage === 'ar' ? 'border-orange-100' : 'border-gray-300'} flex justify-center items-center`}>
              {selectedLanguage === 'ar' && <View className="w-3 h-3 rounded-full bg-orange-100" />}
            </View>
          </TouchableOpacity>

          {/* English option */}
          <TouchableOpacity 
            className={`flex-row items-center justify-between bg-white rounded-xl py-5 px-5 mb-4 shadow-md ${selectedLanguage === 'en' ? 'border border-gray-300' : ''}`}
            onPress={() => setSelectedLanguage('en')}
          >
            <Image 
              source={icons.en} 
              className="w-12 h-8 rounded-sm"
            />
            <Text className="flex-1 text-xl font-semibold ml-4">English</Text>
            <View className={`w-6 h-6 rounded-full border-2 ${selectedLanguage === 'en' ? 'border-orange-100' : 'border-gray-300'} flex justify-center items-center`}>
              {selectedLanguage === 'en' && <View className="w-3 h-3 rounded-full bg-orange-100" />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Next button */}
        <TouchableOpacity 
          className="w-full bg-orange-500 rounded-3xl py-4 items-center mt-auto"
          onPress={handleContinue}
        >
          <Text className="text-white text-xl font-semibold">التالي</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
