import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import MainLogo from '@assets/svgs/verificationCode.svg';
import { Button, TextInput } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';
import { AccountDetailsContext } from '@/contexts/AccountContext';
import { HttpClient } from '@/utils';

const Login = (props: any) => {
  const theme = useTheme();
  const [accountDetails, setAccountDetails] = useContext(AccountDetailsContext);

  const onPressLogin = () => {
    console.log(
      JSON.stringify(
        {
          phone: accountDetails?.telephone,
          passcode: accountDetails?.pinCode,
        },
        null,
        2,
      ),
    );

    HttpClient()
      .post('/Login/passcode', {
        phone: accountDetails?.telephone,
        passcode: accountDetails?.pinCode,
      })
      .then(val => {
        if (val.data?.status === 200) {
          if (setAccountDetails) {
            setAccountDetails({
              ...accountDetails,
              tokens: {
                access_token: val.data?.access_token,
                refresh_token: val.data?.refresh_token,
              },
            } as any);
          }
        } else {
          Alert.alert('Invalid Email or Password');
        }
      })
      .catch(err => {
        Alert.alert('Something went wrong, try again later');
        console.log(err);
      });
  };

  const onPressRegister = () => {
    props.navigation.navigate('registeration');
  };

  useEffect(() => {
    HttpClient()
      .get('/Details', {
        headers: {
          Authorization: `Bearer ${accountDetails?.tokens?.access_token}`,
        },
      })
      .then(val => {
        if (val.data?.status === 200) {
          if (setAccountDetails) {
            setAccountDetails({
              ...accountDetails,
              ...val.data?.data,
            } as any);
          }
        } else {
          Alert.alert(val.data?.message);
        }
      })
      .catch(err => {
        // Alert.alert('Something went wrong, try again later');
      });
  }, [accountDetails?.tokens]);

  useEffect(() => {
    if (accountDetails?.email && accountDetails?.tokens?.access_token) {
      props.navigation.navigate('homeRouter');
    }
  }, [accountDetails]);

  return (
    <View style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <View style={[styles.container]}>
        <View style={styles.center}>
          <MainLogo />
          <Text
            style={[
              styles.header,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Login
          </Text>
          <Text
            style={[
              styles.subHead,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Login using Wiremi Id
          </Text>
        </View>

        <View style={styles.center}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: 20,
            }}>
            <TextInput
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_DARK}
              textAlign="center"
              style={{ flex: 1 }}
              label={'Enter phone number'}
              mode="outlined"
              keyboardType="phone-pad"
              value={accountDetails?.telephone}
              onChangeText={e => {
                if (setAccountDetails) {
                  setAccountDetails({
                    ...accountDetails,
                    telephone: e,
                  } as any);
                }
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: 20,
            }}>
            <TextInput
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_DARK}
              textAlign="center"
              style={{ flex: 1 }}
              label={'Enter Pin code'}
              mode="outlined"
              keyboardType="number-pad"
              secureTextEntry
              value={accountDetails?.pinCode}
              onChangeText={e => {
                if (setAccountDetails) {
                  setAccountDetails({
                    ...accountDetails,
                    pinCode: e,
                  } as any);
                }
              }}
            />
          </View>
        </View>
        <View style={[styles.center, { gap: 20 }]}>
          <View style={{ flexDirection: 'row' }}>
            <Button
              mode="elevated"
              onPress={onPressLogin}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              LOGIN
            </Button>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button
              mode="text"
              onPress={onPressRegister}
              textColor={BUTTON_LIGHT}
              style={styles.button}
              labelStyle={{ padding: 5 }}>
              REGISTER NOW
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
