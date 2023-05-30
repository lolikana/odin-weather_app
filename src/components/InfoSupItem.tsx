import { isCelcisuMetric } from '@src/context/metricSystem';
import { cToF, kmhToMph } from '@src/utils/helpers';
import { TInfoSup } from '@src/utils/types';
import { useAtomValue } from 'jotai';
import { FC } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import GeneralText from './ui/GeneralText';

const InfoSupItem: FC<Omit<TInfoSup, 'id'>> = props => {
  const isCelcius = useAtomValue(isCelcisuMetric);

  let unity: '°C' | '°F' | '%' | 'km/h' | 'mph' | '';
  let data = props.data;

  switch (props.title) {
    case 'Humidity':
      unity = '%';
      data = props.data;
      break;
    case 'Feels Like':
      unity = isCelcius ? '°C' : '°F';
      data = isCelcius ? props.data : cToF(props.data);
      break;
    case 'Chance of Rain':
      unity = '%';
      break;
    case 'Wind Speed':
      unity = isCelcius ? 'km/h' : 'mph';
      data = isCelcius ? props.data : kmhToMph(props.data);
      break;
    default:
      unity = '';
  }

  return (
    <View style={styles.list}>
      <View style={styles.text}>
        <Image source={props.icon} resizeMode="contain" style={styles.icon} />
        <GeneralText style={styles.title}>{props.title}</GeneralText>
      </View>
      <GeneralText style={styles.data}>
        {data} {unity}
      </GeneralText>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  icon: { width: 18, height: 18 },
  text: {
    flexDirection: 'row',
    gap: 10
  },
  title: {
    fontSize: deviceWidth < 400 ? 10 : 12
  },
  data: {
    fontSize: 16,
    paddingLeft: 28
  }
});

export default InfoSupItem;
