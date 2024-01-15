import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import MainLogo from '@assets/svgs/accountType.svg';
import { Button } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';

import SelectorMenu from '@/shared/SelectorMenu';

const AccountType = (props: any) => {
  const theme = useTheme();
  const onPressContinue = () => {
    props.navigation.navigate('accountDetailsInsert');
  };

  return (
    <View style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <View style={[styles.container]}>
        <View style={styles.center}>
          <Text
            style={[
              styles.header,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Account Type
          </Text>
          <Text
            style={[
              styles.subHead,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Please choose account type
          </Text>
        </View>
        <MainLogo />
        <View style={{ flexDirection: 'row' }}>
          <SelectorMenu />
        </View>
        <View style={styles.center}>
          <View style={{ flexDirection: 'row' }}>
            <Button
              mode="elevated"
              onPress={onPressContinue}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              CONTINUE
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountType;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    gap: 50,
    alignSelf: 'center',
    maxWidth: APP_MAX_WIDTH,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
  },
  subHead: {
    fontSize: 13,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 5,
  },
  flagItem: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gainsboro',
  },
});
