import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import SearchResultScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

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
        {/* <SearchResultScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
