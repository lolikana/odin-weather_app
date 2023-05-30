import Colors from '@src/utils/colors';
import { FC, ReactNode } from 'react';
import { StyleSheet, TextStyle, View } from 'react-native';

const Card: FC<{ children: ReactNode; style: TextStyle }> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: Colors.backgroundCard,
    padding: 15
  }
});

export default Card;
