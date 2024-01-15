import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainLogo from '@assets/svgs/ladyWithLaptop.svg';
import DarkAppLogo from '@assets/svgs/dark/textLogo.svg';
import LightAppLogo from '@assets/svgs/light/textLogo.svg';
import useTheme from '@/hooks/useTheme';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_LIGHT,
  TEXT_DARK,
  TEXT_LIGHT,
} from '@/constants/Colors';
import { Button } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';

const Splash = (props: any) => {
  const theme = useTheme();

  const onPressGetStarted = () => {
    props.navigation.navigate('registeration');
  };
  const onPressLogin = () => {
    props.navigation.navigate('login');
  };

  return (
    <View style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <View style={[styles.container]}>
        <MainLogo />
        {theme === 'light' ? <LightAppLogo /> : <DarkAppLogo />}
        <Text
          style={[
            styles.subtext,
            { color: theme === 'light' ? TEXT_DARK : TEXT_LIGHT },
          ]}>
          Experience the <Text style={[styles.underlineText]}>easier way</Text>{' '}
          for transaction!
        </Text>
        <Text style={[styles.miniText]}>
          Connect your money to your friends & brands.
        </Text>
        <View style={{ gap: 10 }}>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <Button
              mode="elevated"
              onPress={onPressGetStarted}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              GET STARTED
            </Button>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button
              mode="text"
              onPress={onPressLogin}
              textColor={BUTTON_LIGHT}
              style={styles.button}
              labelStyle={{ padding: 5 }}>
              LOGIN
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    gap: 40,
    alignSelf: 'center',
    maxWidth: APP_MAX_WIDTH,
  },
  subtext: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: 'rgba(35, 153, 239, 1)',
  },
  miniText: {
    fontSize: 17,
    textAlign: 'center',
    color: BUTTON_LIGHT,
  },
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
