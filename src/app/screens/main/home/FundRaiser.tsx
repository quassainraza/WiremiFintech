import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import { AccountDetailsContext } from '@/contexts/AccountContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BarPlotCard from '@/shared/cards/BarPlotCard';
import DonutChartCard from '@/shared/cards/DonutChartCard';
import NumbersCard from '@/shared/cards/NumbersCard';
import { Button, TextInput } from 'react-native-paper';
import { Industries } from '@/constants/StaticData';
import { ActionsheetFlatList } from '@gluestack-ui/themed';
import BottomSheet from '@/shared/BottomSheet';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FundRaiser = (props: any) => {
  const theme = useTheme();
  const [accountData, setAccountData] = useContext(AccountDetailsContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [document, setDocument] = useState('');

  const onPressBack = () => {
    props.navigation.goBack();
  };
  const onPressSaving = () => {};
  const onPressNotificaitons = () => {
    props.navigation.navigate('notifications');
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

  const onPressAddFundRaiser = () => {
    props.navigation.navigate('home');
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%', paddingTop: 15 }}>
        <View style={[styles.titleBarStyle, { marginBottom: 30 }]}>
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
            Fund Raiser
          </Text>
          <TouchableOpacity onPress={onPressNotificaitons}>
            <View style={styles.notificationButton} />
            <Ionicons
              name="notifications-outline"
              size={25}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
        </View>

        <View style={{ padding: 20, gap: 25 }}>
          <Image
            source={{ uri: accountData?.image }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 15,
            }}>
            Wiremi Id: {accountData?.wiremi_id}
          </Text>
          <TextInput
            mode="outlined"
            label={'Project Owner'}
            outlineColor={BUTTON_LIGHT}
            activeOutlineColor={BUTTON_LIGHT}
          />
          <TextInput
            mode="outlined"
            label={'Project Name'}
            outlineColor={BUTTON_LIGHT}
            activeOutlineColor={BUTTON_LIGHT}
          />
          <TextInput
            mode="outlined"
            label={'Select Industry'}
            value={selectedIndustry}
            onFocus={() => setIsOpen(true)}
            outlineColor={BUTTON_LIGHT}
            activeOutlineColor={BUTTON_LIGHT}
          />
          <TextInput
            mode="outlined"
            label={'Amount to be raised'}
            keyboardType="number-pad"
            outlineColor={BUTTON_LIGHT}
            activeOutlineColor={BUTTON_LIGHT}
          />
          <TextInput
            mode="outlined"
            label={'Project Fees'}
            keyboardType="number-pad"
            outlineColor={BUTTON_LIGHT}
            activeOutlineColor={BUTTON_LIGHT}
          />

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
                  <MaterialIcons name="upload" size={25} color={BUTTON_DARK} />
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
              <Button
                mode="text"
                onPress={() => setDocument('')}
                style={[styles.button]}
                textColor={BUTTON_LIGHT}>
                RESELECT IMAGE
              </Button>
            </View>
          )}

          <Button
            mode="elevated"
            onPress={onPressAddFundRaiser}
            textColor="white"
            style={[styles.button, { marginVertical: 20 }]}
            labelStyle={{ padding: 5 }}
            buttonColor={BUTTON_LIGHT}>
            ADD FUND RAISER
          </Button>
        </View>

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
                      item === selectedIndustry ? BUTTON_LIGHT : 'gainsboro',
                  },
                ]}
                onPress={() => {
                  setSelectedIndustry(item);
                  setIsOpen(false);
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default FundRaiser;

const styles = StyleSheet.create({
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
  titleBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  actionButtonIcons: {
    height: 60,
    width: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
  },
  quickActionBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginBottom: 25,
    gap: 10,
  },
  shadow: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  progressContainer: {
    height: 13,
    backgroundColor: 'rgb(230,230,230)',
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  progressBar: {
    backgroundColor: BUTTON_LIGHT,
    height: '100%',
    borderRadius: 17,
    width: '76%',
  },
  boxTitle: { fontSize: 17, fontWeight: '600', color: 'black' },
  boxSubHead: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    opacity: 0.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 30,
  },
  transactions: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
  flagItem: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gainsboro',
  },
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
