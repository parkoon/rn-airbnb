import React from 'react';
import {View, Text, FlatList} from 'react-native';

import places from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResultScreen = () => {
  return (
    <View>
      <FlatList data={places} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultScreen;
