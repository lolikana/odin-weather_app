import { fetchCurrWeather } from '@src/api/weather';
import { searchedLocation } from '@src/context/searchLocation';
import InfoSup from '@src/models/infoSup';
import Main from '@src/screens/Main';
import { InfoSupData } from '@src/utils/datas';
import { TCurrWeather } from '@src/utils/types';
import { StatusBar } from 'expo-status-bar';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [currWeatherData, setCurrWeatherData] = useState<TCurrWeather>();
  const location = useAtomValue(searchedLocation);

  useEffect(() => {
    fetchCurrWeather(location)
      .then(data => {
        InfoSupData.length = 0;
        setCurrWeatherData(data);
        InfoSup.prototype.addInfo('feelslike_c', data.current.feelslike_c);
        InfoSup.prototype.addInfo('humidity', data.current.humidity);
        InfoSup.prototype.addInfo('precip_mm', data.current.precip_mm);
        InfoSup.prototype.addInfo('wind_kph', data.current.wind_kph);
      })
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
        <Main currWeather={currWeatherData as TCurrWeather} />
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
