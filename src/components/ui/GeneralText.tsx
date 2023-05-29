import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextStyle } from 'react-native/types';

import Colors from '../../utils/colors';
import Fonts from '../../utils/fonts';

const GeneralText: FC<{ children: ReactNode; style?: TextStyle }> = ({
  children,
  style
}) => {
  return <Text style={[styles.general, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  general: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: Fonts.normal
  }
});

export default GeneralText;
