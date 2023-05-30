import { isCelcisuMetric } from '@src/context/metricSystem';
import { cToF } from '@src/utils/helpers';
import { weekday } from '@src/utils/libs';
import { TForecast } from '@src/utils/types';
import { useAtomValue } from 'jotai';
import { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import GeneralText from './ui/GeneralText';

interface Props {
  forecast: TForecast;
}

const ForceastDayItem: FC<Props> = props => {
  const isCelcius = useAtomValue(isCelcisuMetric);

  const { date, day } = props.forecast;
  const numDay = new Date(date).getDay();
  const tempMax = isCelcius ? `${day.maxtemp_c} °C` : `${cToF(day.maxtemp_c)} °F`;
  const tempMin = isCelcius ? `${day.mintemp_c} °C` : `${cToF(day.mintemp_c)} °F`;

  const icon = day.condition.icon;

  return (
    <View style={styles.item}>
      <View style={styles.dayContainer}>
        <GeneralText style={styles.day}>{weekday[numDay]}</GeneralText>
      </View>
      <View style={styles.tempContainer}>
        <GeneralText style={styles.tempMax}>{tempMax}</GeneralText>
        <GeneralText style={styles.tempMin}>{tempMin}</GeneralText>
      </View>
      <View>
        <Image
          source={{ uri: `https:${icon}` }}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dayContainer: {
    flex: 3
  },
  day: {
    fontSize: 18
  },
  tempContainer: {
    flex: 2
  },
  tempMax: {
    fontSize: 24
  },
  tempMin: {
    fontSize: 14
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: -5
  }
});

export default ForceastDayItem;
