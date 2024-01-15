import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useContext } from 'react';
import useTheme from '@/hooks/useTheme';
import { BUTTON_LIGHT } from '@/constants/Colors';
import { AccountTypes } from '@/constants/StaticData';
import { AccountDetailsContext, AccountTypeContext } from '@/contexts/AccountContext';

const SelectorMenu = () => {
  const theme = useTheme();
  const RADIUS = 15;

  const [accountTypeIndex, setAccountTypeIndex] =
    useContext(AccountTypeContext);
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        scrollEnabled={false}
        data={AccountTypes}
        keyExtractor={item => item}
        renderItem={info => (
          <TouchableOpacity
            onPress={() => {
              if (setAccountTypeIndex) setAccountTypeIndex(info.index);
            }}
            style={[
              styles.selectorItem,
              {
                borderTopWidth: info.index !== 0 ? 0 : 2,
                borderColor:
                  theme === 'light'
                    ? 'rgb(230,230,230)'
                    : 'rgba(255,255,255,0.5)',
                borderTopLeftRadius: info.index === 0 ? RADIUS : 0,
                borderTopRightRadius: info.index === 0 ? RADIUS : 0,
                borderBottomLeftRadius:
                  info.index === AccountTypes.length - 1 ? RADIUS : 0,
                borderBottomRightRadius:
                  info.index === AccountTypes.length - 1 ? RADIUS : 0,
              },
            ]}>
            <Circle filled={info.index === accountTypeIndex} />
            <Text
              style={{
                flex: 1,
                fontSize: 14,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              {info.item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SelectorMenu;

export const Circle = ({ filled = false }: { filled?: boolean }) => {
  const theme = useTheme();
  return (
    <View style={[styles.circleOutline]}>
      {filled && <View style={[styles.circleInner]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  selectorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 2,
    padding: 13,
  },
  circleOutline: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: BUTTON_LIGHT,
  },
  circleInner: {
    height: 17,
    width: 17,
    borderRadius: 15,
    backgroundColor: BUTTON_LIGHT,
  },
});
