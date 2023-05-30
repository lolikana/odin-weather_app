import Today from '@components/Today';
import TodaySupp from '@src/components/InfoSup';
import { TCurrWeather } from '@src/utils/types';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  currWeather: TCurrWeather;
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
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10
  },
  top: {
    width: '100%',
    maxHeight: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10
  }
});

export default Main;
