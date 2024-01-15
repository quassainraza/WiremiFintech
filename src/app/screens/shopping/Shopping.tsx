import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Button, TextInput } from 'react-native-paper';
import BottomSheet from '@/shared/BottomSheet';
import {
  Camera,
  useCodeScanner,
  useCameraDevice,
} from 'react-native-vision-camera';

const Shopping = (props: any) => {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [targetWiremiId, setTargetWiremiId] = useState('');
  const theme = useTheme();
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: code => {
      setShowQRScanner(false);
      if (code?.[0].value) {
        setTargetWiremiId(code[0].value);
        console.log(code[0].value);
      }
    },
  });

  const onPressBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ScrollView
          contentContainerStyle={{ minHeight: '100%', paddingTop: 10 }}>
          <View style={styles.titleBarStyle}>
            <TouchableOpacity onPress={onPressBack}>
              <Ionicons
                name="arrow-back"
                size={25}
                color={theme === 'light' ? 'black' : 'white'}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.header,
                { color: theme === 'light' ? 'black' : 'white' },
              ]}>
              Shopping
            </Text>
            <View style={{ width: 25 }} />
          </View>
          <View
            style={{
              padding: 20,
              minHeight: '90%',
              gap: 10,
            }}>
            <TextInput
              mode="outlined"
              label={'Add Amount'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              mode="outlined"
              label={'Comments (Optional)'}
              multiline
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />

            <View style={{ height: 10 }} />
            <Text
              style={{
                padding: 10,
                color: theme === 'light' ? 'gray' : 'white',
                fontSize: 17,
                fontWeight: '700',
              }}>
              Pay via
            </Text>
            <TextInput
              mode="outlined"
              label={'Wirmi Id'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              onChangeText={e => setTargetWiremiId(e)}
              multiline
              value={targetWiremiId}
            />
            <Text>{targetWiremiId}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  height: 1,
                  backgroundColor: theme === 'light' ? 'gainsboro' : 'gray',
                  flex: 1,
                }}
              />
              <Text
                style={{
                  padding: 10,
                  color: theme === 'light' ? 'gray' : 'white',
                  fontSize: 17,
                  fontWeight: '700',
                }}>
                OR
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: theme === 'light' ? 'gainsboro' : 'gray',
                  flex: 1,
                }}
              />
            </View>
            <View style={[styles.center, { gap: 30 }]}>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  mode="elevated"
                  onPress={() => {
                    setShowQRScanner(true);
                  }}
                  textColor="white"
                  style={styles.button}
                  labelStyle={{ padding: 5 }}
                  buttonColor={BUTTON_LIGHT}>
                  Scan QR
                </Button>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  mode="elevated"
                  onPress={() => {
                    setShowQRScanner(false);
                    props.navigation.goBack();
                  }}
                  textColor="white"
                  style={styles.button}
                  labelStyle={{ padding: 5 }}
                  buttonColor={BUTTON_LIGHT}>
                  Pay Merchant
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomSheet
        isOpen={showQRScanner}
        setIsOpen={setShowQRScanner}
        extras={props}>
        <View
          style={{
            minHeight: '70%',
            justifyContent: 'center',
            overflow: 'hidden',
            flexDirection: 'row',
            paddingTop: 30,
          }}>
          {device ? (
            <Camera
              style={{
                flex: 1,
                width: '100%',
                borderRadius: 20,
                overflow: 'hidden',
              }}
              codeScanner={codeScanner}
              device={device}
              isActive={showQRScanner}
            />
          ) : (
            <View style={[styles.center]}>
              <Feather
                name="camera-off"
                size={30}
                color={theme === 'light' ? 'gray' : 'gainsboro'}
              />
              <Text
                style={{
                  color: theme === 'light' ? 'gray' : 'gainsboro',
                  fontSize: 15,
                }}>
                No Devices Found
              </Text>
            </View>
          )}
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
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
  header: {
    fontSize: 20,
  },
  titleBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  notiTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  icon: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  group: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 10,
    padding: 15,
    gap: 20,
  },
  notiMessage: {
    fontSize: 17,
    fontWeight: '500',
    opacity: 0.6,
  },
  notiDateTime: {
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.4,
  },
  notiItem: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
