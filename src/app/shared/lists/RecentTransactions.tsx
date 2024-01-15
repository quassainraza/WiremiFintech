import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useTheme from '@/hooks/useTheme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BUTTON_DARK } from '@/constants/Colors';

const RecentTransactions = () => {
  const theme = useTheme();
  return (
    <View>
      <View
        style={[
          styles.shadow,
          styles.transactions,
          { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
        ]}>
        <View
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
          }}>
          <AntDesign size={30} name="dropbox" color={'white'} />
        </View>
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            color: theme === 'light' ? 'black' : 'white',
          }}>
          Dropbox
        </Text>
        <View style={{ alignItems: 'flex-end', gap: 5 }}>
          <Text
            style={{
              color: theme === 'light' ? 'green' : 'lightgreen',
              fontSize: 17,
            }}>
            $402
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 13,
              opacity: 0.5,
            }}>
            10 Oct 18
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.shadow,
          styles.transactions,
          { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
        ]}>
        <View
          style={{
            backgroundColor: 'yellow',
            padding: 10,
            borderRadius: 10,
          }}>
          <MaterialIcons size={30} name="paypal" color={'black'} />
        </View>
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            color: theme === 'light' ? 'black' : 'white',
          }}>
          Dropbox
        </Text>
        <View style={{ alignItems: 'flex-end', gap: 5 }}>
          <Text style={{ color: 'red', fontSize: 17 }}>- $402</Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 13,
              opacity: 0.5,
            }}>
            10 Oct 18
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RecentTransactions;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  transactions: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
});
