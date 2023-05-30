import { isCelcisuMetric } from '@src/context/metricSystem';
import { TCurrWeather } from '@src/utils/types';
import { useAtom } from 'jotai';
import { FC, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { cToF } from '../utils/helpers';
import SearchForm from './form/SearchForm';
import Card from './ui/Card';
import DigitalClock from './ui/DigitalClock';
import GeneralText from './ui/GeneralText';

interface Props {
  currWeather: TCurrWeather;
}

const Today: FC<Props> = props => {
  const { temp_c, condition } = props.currWeather.current;
  const { name, region, tz_id } = props.currWeather.location;

  const [fTemp, setFTemp] = useState<number>(cToF(temp_c));
  const [isCelcius, setIsCelcius] = useAtom(isCelcisuMetric);

  const handleConvertTemp = () => {
    setIsCelcius(prev => (prev === true ? false : true));
    if (!isCelcius) {
      setFTemp(cToF(temp_c));
    }
  };

  return (
    <Card style={styles.card}>
      <View style={styles.topInfo}>
        <GeneralText style={styles.title}>{condition.text}</GeneralText>
        <GeneralText>{`${name}${region ? ', ' + region : ''}`}</GeneralText>
        <View style={styles.clock}>
          <DigitalClock timezone={tz_id} />
        </View>
      </View>
      <View>
        <GeneralText style={styles.temp}>
          {isCelcius ? `${temp_c} °C` : `${fTemp} °F`}
        </GeneralText>
        <Pressable onPress={handleConvertTemp}>
          <GeneralText>display {isCelcius ? '°F' : '°C'}</GeneralText>
        </Pressable>
      </View>
      <View>
        <Image
          source={{ uri: `https:${condition.icon}` }}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
      <SearchForm />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '60%',
    height: '100%'
  },
  topInfo: {
    gap: 5
  },
  title: {
    fontSize: 32
  },
  clock: {
    marginBottom: 15
  },
  temp: {
    fontSize: 45
  },
  icon: {
    width: '50%',
    height: 80,
    marginBottom: 20
  }
});

export default Today;
