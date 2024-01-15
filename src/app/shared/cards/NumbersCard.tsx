import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BUTTON_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';

const NumbersCard = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.quickActionBox,
        styles.shadow,
        {
          padding: 15,
          backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK,
        },
      ]}>
      <Text
        style={{
          color: theme === 'light' ? 'black' : 'white',
          fontSize: 20,
          fontWeight: '500',
          marginVertical: 10,
        }}>
        Average Earning
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'gainsboro',
          borderBottomWidth: 1,
          paddingVertical: 10,
        }}>
        <View>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 15,
              fontWeight: '600',
            }}>
            Real Estate
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'gainsboro',
              fontSize: 15,
            }}>
            Jan 15 2020
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: theme === 'light' ? 'black' : 'white',
          }}>
          $350
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'gainsboro',
          borderBottomWidth: 1,
          paddingVertical: 10,
        }}>
        <View>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 15,
              fontWeight: '600',
            }}>
            Real Estate
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'gainsboro',
              fontSize: 15,
            }}>
            Jan 15 2020
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: theme === 'light' ? 'black' : 'white',
          }}>
          $350
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'gainsboro',
          borderBottomWidth: 0,
          paddingVertical: 10,
        }}>
        <View>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 15,
              fontWeight: '600',
            }}>
            Real Estate
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'gainsboro',
              fontSize: 15,
            }}>
            Jan 15 2020
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: theme === 'light' ? 'black' : 'white',
          }}>
          $350
        </Text>
      </View>
    </View>
  );
};

export default NumbersCard;

const styles = StyleSheet.create({
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  notificationButton: {
    position: 'absolute',
    height: 10,
    width: 10,
    backgroundColor: 'red',
    top: 0,
    right: 0,
    borderRadius: 5,
    zIndex: 1,
  },
  titleBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  actionButtonIcons: {
    height: 60,
    width: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
  },
  quickActionBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginBottom: 25,
    gap: 10,
  },
  shadow: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  progressContainer: {
    height: 13,
    backgroundColor: 'rgb(230,230,230)',
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  progressBar: {
    backgroundColor: BUTTON_LIGHT,
    height: '100%',
    borderRadius: 17,
    width: '76%',
  },
  boxTitle: { fontSize: 17, fontWeight: '600', color: 'black' },
  boxSubHead: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    opacity: 0.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 30,
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
