import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import MainLogo from '@assets/svgs/accountType.svg';
import { Button, TextInput } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  AccountDetailsContext,
  AccountTypeContext,
} from '@/contexts/AccountContext';

const PersonalInfo = (props: any) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [accountDetails, setAccountDetails] = useContext(AccountDetailsContext);
  const [accountType, setAccountType] = useContext(AccountTypeContext);
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
    props.navigation.goBack();
    setIsRegistered(false);
  };

  const onChangeImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, resp => {
      if (resp.assets) {
        console.log(resp?.assets[0].uri);
        if (setAccountDetails)
          setAccountDetails({
            email: accountDetails?.email ?? '',
            image: resp?.assets[0].uri ?? '',
            name: accountDetails?.name ?? '',
            password: accountDetails?.password ?? '',
            pinCode: accountDetails?.pinCode ?? '',
            selectIndustry: accountDetails?.selectIndustry ?? '',
            wiremi_id: accountDetails?.wiremi_id ?? '',
            businessName: accountDetails?.businessName ?? '',
          });
      }
    });
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
                  Account Information
                </Text>
                <Text
                  style={[
                    styles.subHead,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Update your personal information
                </Text>
              </View>
              <View style={styles.center}>
                <TouchableOpacity onPress={onChangeImage}>
                  <Image
                    source={{ uri: accountDetails?.image }}
                    style={{ height: 100, width: 100, borderRadius: 50 }}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.subHead,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  {accountDetails?.wiremi_id}
                </Text>
              </View>
              <View style={{ gap: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{ uri: accountDetails?.image }} />
                  {/* <TextInput
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
                          });
                    }}
                    style={{ width: '100%' }}
                    label={'Email'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                  /> */}
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={accountDetails?.name}
                    onChangeText={e => {
                      if (setAccountDetails)
                        if (accountDetails)
                          setAccountDetails({
                            email: accountDetails.email,
                            name: e,
                            password: accountDetails.password,
                            selectIndustry: accountDetails.selectIndustry,
                            businessName: accountDetails.businessName,
                            pinCode: accountDetails.pinCode,
                            wiremi_id: '',
                            image: accountDetails.image,
                          });
                    }}
                    style={{ width: '100%' }}
                    label={'First Name'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={{ width: '100%' }}
                    label={'Last Name'}
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                  />
                </View>
                {accountType === 2 && (
                  <>
                    <View style={{ flexDirection: 'row' }}>
                      <TextInput
                        value={accountDetails?.businessName}
                        onChangeText={e => {
                          if (setAccountDetails)
                            if (accountDetails)
                              setAccountDetails({
                                email: accountDetails.email,
                                name: accountDetails.name,
                                password: accountDetails.password,
                                selectIndustry: accountDetails.selectIndustry,
                                businessName: e,
                                pinCode: accountDetails.pinCode,
                                wiremi_id: '',
                                image: accountDetails.image,
                              });
                        }}
                        style={{ width: '100%' }}
                        label={'Business Name'}
                        mode="outlined"
                        outlineColor={BUTTON_LIGHT}
                        activeOutlineColor={BUTTON_LIGHT}
                      />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TextInput
                        value={accountDetails?.selectIndustry}
                        onChangeText={e => {
                          if (setAccountDetails)
                            if (accountDetails)
                              setAccountDetails({
                                email: accountDetails.email,
                                name: accountDetails.name,
                                password: accountDetails.password,
                                selectIndustry: e,
                                businessName: accountDetails.businessName,
                                pinCode: accountDetails.pinCode,
                                wiremi_id: '',
                                image: accountDetails.image,
                              });
                        }}
                        onFocus={handleOpen}
                        style={{ width: '100%' }}
                        label={'Select Industry'}
                        mode="outlined"
                        outlineColor={BUTTON_LIGHT}
                        activeOutlineColor={BUTTON_LIGHT}
                      />
                    </View>
                  </>
                )}
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

export default PersonalInfo;

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
