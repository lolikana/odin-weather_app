import { fetchCurrWeather } from '@src/api/weather';
import { searchedLocation } from '@src/context/searchLocation';
import Main from '@src/screens/Main';
import { ICurrWeather } from '@src/utils/types';
import { StatusBar } from 'expo-status-bar';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [currWeatherData, setCurrWeatherData] = useState<ICurrWeather>();
  const location = useAtomValue(searchedLocation);

  useEffect(() => {
    fetchCurrWeather(location)
      .then(data => setCurrWeatherData(data))
      .catch(err => console.log('err: ', err));
  }, [location]);

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('assets/images/valhalla.png')}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Main currWeather={currWeatherData as ICurrWeather} />
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1
  }
});
