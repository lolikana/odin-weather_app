import Main from '@src/screens/Main';
import { IDummyData } from '@src/utils/types';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const DUMMY_DATA: IDummyData = {
  cTemp: 28
};

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('assets/images/valhalla.png')}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Main data={DUMMY_DATA} />
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
