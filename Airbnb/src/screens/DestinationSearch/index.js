import React, {useState} from 'react';
import {FlatList, TextInput, View, Text, Pressable} from 'react-native';
import searchResult from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Input component */}

      <TextInput
        style={styles.textInput}
        placeholder="Where are you going"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />

      {/* List of destination */}

      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guests')}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
