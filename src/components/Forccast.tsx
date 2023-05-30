import { TForecast } from '@src/utils/types';
import { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import ForceastDayItem from './ForecastDayItem';
import Card from './ui/Card';

const Forceast: FC<{ forecast: TForecast[] }> = props => {
  const renderItem = ({ item }: ListRenderItemInfo<TForecast>) => {
    return <ForceastDayItem forecast={item} />;
  };

  return (
    <Card>
      <FlatList
        numColumns={1}
        data={props.forecast}
        keyExtractor={(item: TForecast) => item.date_epoch.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 20
  }
});

export default Forceast;
