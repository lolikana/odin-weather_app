import { IDummyData } from '@src/utils/types';
import { FC, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import Colors from '../utils/colors';
import { cToF } from '../utils/helpers';
import SearchForm from './form/SearchForm';
import DigitalClock from './ui/DigitalClock';
import GeneralText from './ui/GeneralText';

interface Props {
  data: IDummyData;
}

const Today: FC<Props> = props => {
  const cTemp = props.data.cTemp;

  const [fTemp, setFTemp] = useState<number>(cToF(cTemp));
  const [isCelcius, setIsCelcius] = useState(true);

  const handleConvertTemp = () => {
    setIsCelcius(prev => (prev === true ? false : true));
    if (!isCelcius) {
      setFTemp(cToF(cTemp));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <GeneralText style={styles.title}>Overcast Clouds</GeneralText>
        <GeneralText>Iizuka, Japan</GeneralText>
        <View>
          <DigitalClock />
        </View>
      </View>
      <View>
        <GeneralText style={styles.temp}>
          {isCelcius ? `${cTemp} °C` : `${fTemp} °F`}
        </GeneralText>
        <Pressable onPress={handleConvertTemp}>
          <GeneralText>display {isCelcius ? '°F' : '°C'}</GeneralText>
        </Pressable>
      </View>
      <View>
        <Image
          source={require('assets/icons/weather/cloudy_FILL0_wght400_GRAD0_opsz48.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
      <SearchForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    borderRadius: 20,
    backgroundColor: Colors.backgroundCard,
    padding: 15,
    gap: 15
  },
  topInfo: {
    gap: 5
  },
  title: {
    fontSize: 32
  },
  temp: {
    fontSize: 45
  },
  icon: {
    width: '50%',
    height: 80
  }
});

export default Today;
