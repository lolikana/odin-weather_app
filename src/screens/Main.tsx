import Today from '@components/Today';
import { ICurrWeather } from '@src/utils/types';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  currWeather: ICurrWeather;
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
      <View>
        <Today currWeather={props.currWeather} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20
  }
});

export default Main;
