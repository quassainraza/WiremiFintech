import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, { useContext, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';
import { Button, TextInput } from 'react-native-paper';
import { KYCContext } from '@/contexts/KYCContext';
import { launchImageLibrary } from 'react-native-image-picker';

const KYCForm = (props: any) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [document, setDocument] = useState('');
  const [kyc, setKyc] = useContext(KYCContext);

  const onSubmit = () => {
    if (setKyc) {
      setKyc(true);
      props.navigation.navigate('home');
    }
  };

  const onPressUpload = () => {
    launchImageLibrary({ mediaType: 'photo' })
      .then(response => {
        if (response?.assets?.[0].uri) setDocument(response.assets[0].uri);
      })
      .catch(err => {
        Alert.alert('Oops', 'Something went wrong');
      });
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          minHeight: '100%',
          paddingTop: 20,
        }}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setPage(0)}
            style={[
              styles.iconCircle,
              { borderColor: page === 0 ? BUTTON_LIGHT : 'gray' },
            ]}>
            <MaterialCommunityIcons
              name="account-circle"
              size={30}
              color={
                page === 0 ? BUTTON_LIGHT : theme === 'light' ? 'gray' : 'white'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPage(1)}
            style={[
              styles.iconCircle,
              { borderColor: page === 1 ? BUTTON_LIGHT : 'gray' },
            ]}>
            <MaterialIcons
              name="verified-user"
              size={30}
              color={
                page === 1 ? BUTTON_LIGHT : theme === 'light' ? 'gray' : 'white'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPage(2)}
            style={[
              styles.iconCircle,
              { borderColor: page === 2 ? BUTTON_LIGHT : 'gray' },
            ]}>
            <MaterialCommunityIcons
              name="bank"
              size={30}
              color={
                page === 2 ? BUTTON_LIGHT : theme === 'light' ? 'gray' : 'white'
              }
            />
          </TouchableOpacity>
        </View>

        {page === 0 ? (
          <View style={{ gap: 20 }}>
            <Text
              style={{
                fontSize: 19,
                marginVertical: 17,
                textAlign: 'center',
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Personal Info
            </Text>
            <TextInput
              style={{ width: '100%' }}
              label={'Name'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              style={{ width: '100%' }}
              label={'Mobile Number'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="number-pad"
            />
            <TextInput
              style={{ width: '100%' }}
              label={'Email Address'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="email-address"
            />
            <TextInput
              style={{ width: '100%' }}
              label={'Pin Code'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="number-pad"
              maxLength={4}
            />
            <View style={{ height: 20 }} />
            <Button
              mode="elevated"
              onPress={() => setPage(page + 1)}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              NEXT
            </Button>
          </View>
        ) : page === 1 ? (
          <View style={{ gap: 20 }}>
            <Text
              style={{
                fontSize: 19,
                marginVertical: 17,
                textAlign: 'center',
                color: theme === 'light' ? 'black' : 'white',
              }}>
              ID Proof
            </Text>
            {document === '' ? (
              <View style={styles.uploadSpace}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: theme === 'light' ? 'black' : 'white',
                    fontSize: 20,
                    fontWeight: '500',
                  }}>
                  Upload Document
                </Text>
                <TouchableOpacity
                  onPress={onPressUpload}
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: 'rgb(240,240,240)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                  }}>
                  <View
                    style={{
                      height: 35,
                      width: 35,
                      backgroundColor: 'rgb(210,210,210)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 25,
                    }}>
                    <MaterialIcons
                      name="upload"
                      size={25}
                      color={BUTTON_DARK}
                    />
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    color: theme === 'light' ? 'black' : 'white',
                    fontSize: 17,
                    fontWeight: '300',
                  }}>
                  Press to upload the document
                </Text>
              </View>
            ) : (
              <View>
                <Image
                  source={{ uri: document }}
                  style={{ height: 300 }}
                  resizeMode="contain"
                />
              </View>
            )}
            <View style={{ height: 20 }} />
            <Button
              mode="elevated"
              onPress={() => setPage(page + 1)}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              NEXT
            </Button>
            <Button
              mode="text"
              onPress={() => setDocument('')}
              style={styles.button}
              labelStyle={{ padding: 5 }}
              textColor={BUTTON_LIGHT}>
              SELECT AGAIN
            </Button>
          </View>
        ) : page === 2 ? (
          <View style={{ gap: 20 }}>
            <Text
              style={{
                fontSize: 19,
                marginVertical: 17,
                textAlign: 'center',
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Bank Detail
            </Text>
            <TextInput
              style={{ width: '100%' }}
              label={'Business Name'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              style={{ width: '100%' }}
              label={'Tax ID'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              style={{ width: '100%' }}
              label={'Registeration Number'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="number-pad"
            />
            <TextInput
              style={{ width: '100%' }}
              label={'Phone Number'}
              mode="outlined"
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="number-pad"
            />
            <View style={{ height: 20 }} />
            <Button
              mode="elevated"
              onPress={onSubmit}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              SUBMIT
            </Button>
          </View>
        ) : (
          ''
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default KYCForm;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  iconCircle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderColor: 'gray',
  },
  button: {
    flex: 1,
    borderRadius: 5,
  },
  uploadSpace: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
