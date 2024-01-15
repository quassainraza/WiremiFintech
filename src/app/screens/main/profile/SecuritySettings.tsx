import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import MainLogo from '@assets/svgs/verificationCode.svg';
import { Button, TextInput } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';

import { AccountDetailsContext } from '@/contexts/AccountContext';
import { HttpClient } from '@/utils';

const SecuritySettings = (props: any) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [accountDetails, setAccountDetails] = useContext(AccountDetailsContext);
  const [isRegistered, setIsRegistered] = useState(false);

  const onPressContinue = () => {
    setIsRegistered(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const onRegistered = () => {
    setIsRegistered(false);
  };

  const onPressUpdate = () => {
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

          // wiremi_id: accountDetails?.wiremi_id,
          // image: accountDetails?.image,
        },
        {
          headers: {
            Authorization: `Bearer ${accountDetails?.tokens?.access_token}`,
          },
        },
      )
      .then(val => {
        if (val.data?.status === 200) {
          console.log('Success');
          if (setAccountDetails) {
            setAccountDetails({
              ...accountDetails,
              wiremi_id: props.route.params?.phoneNumber,
            } as any);
          }
          console.log(val.data);

          props.navigation.navigate('createPinCode');
        } else {
          Alert.alert(val.data?.message);
        }
      })
      .catch(err => {
        Alert.alert('Something went wrong, try again later');
      });

    // props.navigation.goBack();
    setIsRegistered(false);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%', paddingTop: 20 }}>
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
                  Security Settings
                </Text>
                <Text
                  style={[
                    styles.subHead,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Update your personal information
                </Text>
              </View>
              <MainLogo />
              <View style={{ gap: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={accountDetails?.email}
                    onChangeText={e => {
                      if (setAccountDetails)
                        if (accountDetails)
                          setAccountDetails({
                            email: e,
                            name: accountDetails.name,
                            password: accountDetails.password,
                            selectIndustry: accountDetails.selectIndustry,
                            businessName: accountDetails.businessName,
                            pinCode: accountDetails.pinCode,
                            wiremi_id: '',
                            image: accountDetails.image,
                            telephone: accountDetails?.telephone,
                            tokens: accountDetails?.tokens,
                          });
                    }}
                    style={{ width: '100%' }}
                    label={'Email'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                  />
                </View>
                <View style={{ height: 10 }} />
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={accountDetails?.password}
                    onChangeText={e => {
                      if (setAccountDetails)
                        if (accountDetails)
                          setAccountDetails({
                            email: accountDetails.email,
                            name: accountDetails.name,
                            password: e,
                            selectIndustry: accountDetails.selectIndustry,
                            businessName: accountDetails.businessName,
                            pinCode: accountDetails.pinCode,
                            wiremi_id: '',
                            image: accountDetails.image,
                            telephone: accountDetails?.telephone,
                            tokens: accountDetails?.tokens,
                          });
                    }}
                    style={{ width: '100%' }}
                    label={'Password'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    secureTextEntry
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={{ width: '100%' }}
                    label={'Verify Password'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    secureTextEntry
                  />
                </View>
                <View style={{ height: 10 }} />
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={{ width: '100%' }}
                    label={'Pin Code'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    keyboardType="number-pad"
                    secureTextEntry
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={{ width: '100%' }}
                    label={'Re-enter Pin Code'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    keyboardType="number-pad"
                    secureTextEntry
                  />
                </View>
              </View>
              <View style={styles.center}>
                <View style={{ flexDirection: 'row' }}>
                  <Button
                    mode="elevated"
                    onPress={onPressUpdate}
                    textColor="white"
                    style={styles.button}
                    labelStyle={{ padding: 5 }}
                    buttonColor={BUTTON_LIGHT}>
                    UPDATE
                  </Button>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Button
                    mode="outlined"
                    onPress={onPressUpdate}
                    textColor={BUTTON_LIGHT}
                    style={styles.button}
                    labelStyle={{ padding: 5 }}>
                    GO BACK
                  </Button>
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 250 }} />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecuritySettings;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
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
