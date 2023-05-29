import Today from '@components/Today';
import { IDummyData } from '@src/utils/types';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  data: IDummyData;
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
        <Today data={props.data} />
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
