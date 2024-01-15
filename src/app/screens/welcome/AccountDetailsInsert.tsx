import {
  Alert,
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

import {
  AccountDetailsContext,
  AccountTypeContext,
} from '@/contexts/AccountContext';
import {
  ActionsheetFlatList,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@gluestack-ui/themed';
import { Industries } from '@/constants/StaticData';
import BottomSheet from '@/shared/BottomSheet';
import { HttpClient } from '@/utils';

const AccountDetailsInsert = (props: any) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [accountDetails, setAccountDetails] = useContext(AccountDetailsContext);
  const [isRegistered, setIsRegistered] = useState(false);
  const [accountType] = useContext(AccountTypeContext);
  const [verifyPassword, setVerifyPassword] = useState('');

  const onPressContinue = () => {
    if (accountDetails?.password !== verifyPassword) {
      Alert.alert('Passwords mismatch');
      return;
    }
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

  const onPressActivateNow = () => {
    if (setAccountDetails) {

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
      setIsRegistered(false);
    }
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
                  Welcome
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
                    value={accountDetails?.email}
                    onChangeText={e => {
                      if (setAccountDetails)
                        if (accountDetails)
                          setAccountDetails({
                            ...accountDetails,
                            telephone: accountDetails?.telephone,
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
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={accountDetails?.name}
                    onChangeText={e => {
                      if (setAccountDetails)
                        if (accountDetails)
                          setAccountDetails({
                            ...accountDetails,
                            telephone: accountDetails?.telephone,
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
                    label={'Name'}
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
                                ...accountDetails,
                                telephone: accountDetails?.telephone,
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
                                ...accountDetails,
                                telephone: accountDetails?.telephone,
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
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={accountDetails?.password}
                    onChangeText={e => {
                      if (setAccountDetails)
                        if (accountDetails)
                          setAccountDetails({
                            ...accountDetails,
                            telephone: accountDetails?.telephone,
                            email: accountDetails.email,
                            name: accountDetails.name,
                            password: e,
                            selectIndustry: accountDetails.selectIndustry,
                            businessName: accountDetails.businessName,
                            pinCode: accountDetails.pinCode,
                            wiremi_id: '',
                            image: accountDetails.image,
                          });
                    }}
                    style={{ width: '100%' }}
                    label={'Password'}
                    secureTextEntry
                    mode="outlined"
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={verifyPassword}
                    onChangeText={e => setVerifyPassword(e)}
                    style={{ width: '100%' }}
                    label={'Re-enter Password'}
                    secureTextEntry
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
          <View style={{ height: 250 }} />
        </KeyboardAvoidingView>
        <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen} extras={props}>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 20,
              marginVertical: 20,
              fontWeight: '600',
            }}>
            Select Industry
          </Text>
          <ActionsheetFlatList
            data={Industries}
            renderItem={({ item }: any) => (
              <TouchableOpacity
                style={[
                  styles.flagItem,
                  {
                    borderColor:
                      item === accountDetails?.selectIndustry
                        ? BUTTON_LIGHT
                        : 'gainsboro',
                  },
                ]}
                onPress={() => {
                  if (setAccountDetails)
                    if (accountDetails)
                      setAccountDetails({
                        ...accountDetails,
                        telephone: accountDetails?.telephone,
                        email: accountDetails.email,
                        name: accountDetails.name,
                        password: accountDetails.password,
                        selectIndustry: item,
                        businessName: accountDetails.businessName,
                        pinCode: accountDetails.pinCode,
                        wiremi_id: '',
                        image: accountDetails.image,
                      });
                  handleClose();
                }}>
                <Text
                  style={{
                    color: theme === 'light' ? 'black' : 'white',
                    fontSize: 16,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item: any) => item}
          />
          <View style={{ height: 60 }} />
        </BottomSheet>
        <Modal isOpen={isRegistered} onClose={onRegistered}>
          <ModalBackdrop />
          <ModalContent style={{ paddingHorizontal: 10 }}>
            <ModalHeader>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <Text style={[styles.center, styles.header]}>
                Congratulations
              </Text>
              <Text style={[styles.center, styles.header]}>
                You are Registred
              </Text>
              <Text
                style={[
                  styles.center,
                  { marginTop: 10, fontSize: 17, color: BUTTON_LIGHT },
                ]}>
                Start using the app, pay attention to the rules in the
                application.
              </Text>
              <View style={[styles.center, { margin: 30 }]}>
                <MainLogo />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  mode="elevated"
                  onPress={onPressActivateNow}
                  textColor="white"
                  style={styles.button}
                  labelStyle={{ padding: 5 }}
                  buttonColor={BUTTON_LIGHT}>
                  LETS GET STARTED
                </Button>
              </View>
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountDetailsInsert;

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
