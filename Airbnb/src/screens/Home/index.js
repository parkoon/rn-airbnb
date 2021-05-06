import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
function Home() {
  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('clicked')}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}

        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default Home;
