import Today from '@components/Today';
import Forceast from '@src/components/Forccast';
import TodaySupp from '@src/components/InfoSup';
import Card from '@src/components/ui/Card';
import GeneralText from '@src/components/ui/GeneralText';
import { TCurrWeather, TForecast } from '@src/utils/types';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  currWeather: TCurrWeather;
  forecast: TForecast[];
}

const Main: FC<Props> = props => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'space-between',

          // Paddings to handle safe area
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom
          // paddingLeft: insets.left,
          // paddingRight: insets.right
        },
        styles.main
      ]}
    >
      <View style={styles.top}>
        <Today currWeather={props.currWeather} />
        <TodaySupp />
      </View>
      <View style={styles.titleContainer}>
        <Card>
          <GeneralText style={styles.title}>WEATHER APP</GeneralText>
        </Card>
      </View>
      <View style={styles.bottom}>
        <Forceast forecast={props.forecast} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    gap: 20
  },
  top: {
    width: '100%',
    maxHeight: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10
  },
  titleContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
    marginBottom: 10
  }
});

export default Main;
