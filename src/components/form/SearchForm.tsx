import { searchedLocation } from '@src/context/searchLocation';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';

import Colors from '../../utils/colors';

const SearchForm = () => {
  const [enteredLocation, setEnteredLocation] = useState<string>('');
  const setLocation = useSetAtom(searchedLocation);

  const onSubmitLocation = (location: string) => {
    setLocation(location);
  };

  const handleSearch = (text: string) => {
    setEnteredLocation(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="search location..."
        placeholderTextColor={Colors.primary}
        onChangeText={handleSearch}
        onSubmitEditing={() => onSubmitLocation(enteredLocation)}
        style={styles.input}
      />
      <Pressable onPress={() => onSubmitLocation(enteredLocation)}>
        <Image
          source={require('assets/icons/travel_explore_FILL0_wght400_GRAD0_opsz48.png')}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center'
  },
  input: {
    fontWeight: 'bold',
    color: Colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    paddingBottom: 8,
    paddingRight: 34
  },
  icon: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 6,
    bottom: 8
  }
});

export default SearchForm;
