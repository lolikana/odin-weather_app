import { InfoSupData } from '@src/utils/datas';
import { TInfoSup } from '@src/utils/types';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import InfoSupItem from './InfoSupItem';
import Card from './ui/Card';

const InfoSup = () => {
  const renderItem = ({ item }: ListRenderItemInfo<TInfoSup>) => {
    return <InfoSupItem title={item.title} icon={item.icon} data={item.data} />;
  };
  return (
    <Card style={styles.card}>
      <FlatList
        numColumns={1}
        data={InfoSupData}
        keyExtractor={(item: TInfoSup) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { flex: 1, height: '80%' },
  list: { flexGrow: 1, justifyContent: 'space-between' }
});

export default InfoSup;
