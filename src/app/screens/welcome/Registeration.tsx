import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import MainLogo from '@assets/svgs/registeration.svg';
import { Button } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetFlatList,
  ActionsheetItemText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@gluestack-ui/themed';

import { flags } from '@assets/flags';
import { HttpClient } from '@/utils';
import { AccountDetailsContext } from '@/contexts/AccountContext';

const Registeration = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof flags)[0] | null
  >(flags[0]);
  const [accountDetails, setAccountDetails] = useContext(AccountDetailsContext);

  const theme = useTheme();

  const onPressSendviaSMS = () => {
    HttpClient()
      .post('/Register', {
        name: 'inprogress',
        username: accountDetails?.telephone,
        email: `inprogress_${accountDetails?.telephone}@wiremi.com`,
        password: `inprogress`,
        phone: accountDetails?.telephone,
      })
      .then(val => {
        if (val.data?.status === 200) {
          props.navigation.navigate('enterCode', {
            phoneNumber: accountDetails?.telephone,
            cCode: selectedCountry?.label,
          });
        } else {
          Alert.alert(val.data?.message);
        }
      })
      .catch(err => {
        Alert.alert('Something went wrong, try again later');
      });
  };
  const onPressSMS = () => {
    props.navigation.navigate('enterCode', {
      phoneNumber: accountDetails?.telephone,
      cCode: selectedCountry?.label,
    });
  };
  const showActionsheet = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(accountDetails?.telephone);
  }, [accountDetails?.telephone]);

  return (
    <View style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <View style={[styles.container]}>
        <View style={styles.center}>
          <Text
            style={[
              styles.header,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Registeration
          </Text>
          <Text
            style={[
              styles.subHead,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}>
            Enter your mobile phone number, we will send you OTP to verify
            later.
          </Text>
        </View>
        <MainLogo />
        <View style={{ flexDirection: 'row' }}>
          <Input
            style={{ flex: 1 }}
            pl="$4"
            borderWidth={2}
            height={50}
            justifyContent="center"
            alignItems="center">
            <InputSlot>
              <TouchableOpacity onPress={showActionsheet}>
                <InputIcon as={selectedCountry?.Icon} />
              </TouchableOpacity>
            </InputSlot>
            <InputField
              value={accountDetails?.telephone}
              onChangeText={e => {
                if (setAccountDetails) {
                  setAccountDetails({
                    ...accountDetails,
                    telephone: e,
                  } as any);
                }
              }}
              keyboardType="number-pad"
              placeholder="03335166620"
              color={theme === 'light' ? '$black' : '$white'}
            />
          </Input>
        </View>
        <View style={styles.center}>
          <View style={{ flexDirection: 'row' }}>
            <Button
              mode="elevated"
              onPress={onPressSendviaSMS}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              SEND VIA SMS
            </Button>
          </View>
        </View>
        <Text
          style={[
            styles.subHead,
            { color: theme === 'light' ? 'black' : 'white' },
          ]}>
          By creating and/or using an account, you agree to our Terms &
          Conditions.
        </Text>
      </View>
      <Actionsheet isOpen={isOpen} onClose={handleClose} {...props}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetFlatList
            data={flags}
            renderItem={({ item }: any) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => {
                  setSelectedCountry(item);
                  setIsOpen(false);
                }}
                style={[styles.flagItem, { flexDirection: 'row', gap: 2 }]}>
                <View style={{ height: 20, width: 30, marginRight: 5 }}>
                  {item.Icon()}
                </View>
                <ActionsheetItemText flex={1}>{item.label}</ActionsheetItemText>
                <ActionsheetItemText flex={8}>{item.name}</ActionsheetItemText>
              </TouchableOpacity>
            )}
            keyExtractor={(item: any) => item.name}
          />
          <View style={{ height: 60 }} />
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default Registeration;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
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
