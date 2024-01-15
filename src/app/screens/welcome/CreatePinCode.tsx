import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import MainLogo from '@assets/svgs/accountType.svg';
import { Button, TextInput } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';

import { AccountDetailsContext } from '@/contexts/AccountContext';
import { HttpClient } from '@/utils';

const CreatePinCode = (props: any) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [accountDetails, setAccountDetails] = useContext(AccountDetailsContext);
  const [verifyCode, setVerifyCode] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const onPressContinue = () => {
    if (verifyCode === accountDetails?.pinCode) {
      console.log(JSON.stringify(accountDetails, null, 2));

      console.log(
        JSON.stringify(
          {
            username: accountDetails?.name,
            name: accountDetails?.name,
            email: accountDetails?.email,
            phone: accountDetails?.telephone,
            selectIndustry: accountDetails?.selectIndustry,
            businessName: accountDetails?.businessName,
            passcode: accountDetails?.pinCode,
            password: accountDetails?.password,
          },
          null,
          2,
        ),
      );

      HttpClient()
        .patch(
          '/EditDetails',
          {
            username: accountDetails?.name,
            name: accountDetails?.name,
            email: accountDetails?.email,
            phone: accountDetails?.telephone,
            selectIndustry: accountDetails?.selectIndustry,
            businessName: accountDetails?.businessName,
            passcode: accountDetails?.pinCode,
            password: accountDetails?.password,
          },
          {
            headers: {
              Authorization: `Bearer ${accountDetails?.tokens?.access_token}`,
            },
          },
        )
        .then(val => {
          if (val.data?.status === 200) {
            props.navigation.navigate('homeRouter');
          } else {
            Alert.alert(val.data?.message);
          }
        })
        .catch(err => {
          console.log(err);

          Alert.alert('Something went wrong, try again later');
        });
    } else {
      Alert.alert('Passcode does not match');
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
      }}>
      <KeyboardAvoidingView>
        <View
          style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
          <View style={[styles.container]}>
            <View style={styles.center}>
              <Text
                style={[
                  styles.header,
                  { color: theme === 'light' ? 'black' : 'white' },
                ]}>
                Create Pin Code
              </Text>
              <Text
                style={[
                  styles.subHead,
                  { color: theme === 'light' ? 'black' : 'white' },
                ]}>
                Set a name for your profile here
              </Text>
            </View>
            <MainLogo />
            <View style={{ gap: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  value={accountDetails?.pinCode}
                  onChangeText={e => {
                    if (setAccountDetails)
                      if (accountDetails)
                        setAccountDetails({
                          email: accountDetails.email,
                          name: accountDetails.name,
                          password: accountDetails.password,
                          selectIndustry: accountDetails.selectIndustry,
                          businessName: accountDetails.businessName,
                          pinCode: e,
                          wiremi_id: accountDetails?.wiremi_id,
                          image: accountDetails?.image,
                          telephone: accountDetails?.telephone,
                          tokens: accountDetails?.tokens,
                        });
                  }}
                  style={{ width: '100%' }}
                  label={'Set new code'}
                  mode="outlined"
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  value={verifyCode}
                  onChangeText={e => {
                    setVerifyCode(e);
                  }}
                  style={{ width: '100%' }}
                  label={'Confirm new code'}
                  mode="outlined"
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                />
              </View>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreatePinCode;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    textAlign: 'center',
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
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    color: BG_DARK,
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
