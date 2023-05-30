import Today from '@components/Today';
import Forceast from '@src/components/Forccast';
import TodaySupp from '@src/components/InfoSup';
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
  bottom: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10
  }
});

export default Main;
