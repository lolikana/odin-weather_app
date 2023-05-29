import { fetchCurrWeather } from '@src/api/weather';
import Main from '@src/screens/Main';
import { ICurrWeather } from '@src/utils/types';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [currWeatherData, setCurrWeatherData] = useState<ICurrWeather>();
  useEffect(() => {
    fetchCurrWeather()
      .then(data => setCurrWeatherData(data))
      .catch(err => console.log('err: ', err));
  }, []);

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
