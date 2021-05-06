import React, {useState} from 'react';
import {FlatList, TextInput, View, Text} from 'react-native';
import searchResult from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
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
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
