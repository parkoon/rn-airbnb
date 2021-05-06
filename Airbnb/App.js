import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import SearchResultScreen from './src/screens/SearchResult';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>
        {/* <HomeScreen /> */}
        {/* <Post post={post} /> */}
        <SearchResultScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
