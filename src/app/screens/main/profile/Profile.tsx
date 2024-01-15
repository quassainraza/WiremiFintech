import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import {
  AccountDetailsContext,
  AccountTypeContext,
} from '@/contexts/AccountContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomBar from '@/shared/BottomBar';
import { KYCContext } from '@/contexts/KYCContext';
import { QRContext } from '@/contexts/AppContext';

const Profile = (props: any) => {
  const theme = useTheme();
  const [accountData, setAccountData] = useContext(AccountDetailsContext);
  const [accountType, setAccountType] = useContext(AccountTypeContext);
  const [showQR, setShowQR] = useContext(QRContext);
  const [kyc] = useContext(KYCContext);

  const onPressLogOut = () => {
    if (setAccountData) {
      setAccountData({
        email: '',
        image: '',
        name: '',
        password: '',
        pinCode: '',
        selectIndustry: '',
        telephone: '',
        wiremi_id: '',
        businessName: '',
        tokens: {
          access_token: '',
          refresh_token: '',
        },
      });
    }
  };

  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  const onPressNotificaitons = () => {
    props.navigation.navigate('notifications');
  };

  const onPressKYC = () => {
    props.navigation.navigate('kycForm');
  };

  useEffect(() => {
    if (!accountData?.email) {
      props.parentProps.navigation.navigate('login');
    }
  }, [accountData?.email]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK,
        minHeight: '100%',
      }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.titleBarStyle}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity style={styles.identity} onPress={openDrawer}>
              <View style={{ height: 60, width: 60, borderRadius: 30 }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 100,
                  }}
                  source={{ uri: accountData?.image }}
                />
                {kyc && (
                  <MaterialIcons
                    style={{ position: 'absolute', bottom: 0, right: 0 }}
                    color={'yellowgreen'}
                    name="verified-user"
                    size={20}
                  />
                )}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}>
                  {accountData?.name ?? ''}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'white',
                  }}>
                  {accountData?.wiremi_id ?? ''}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNotificaitons}>
              <View style={styles.notificationButton} />
              <Ionicons
                name="notifications-outline"
                size={25}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.quickActionBox,
                styles.shadow,
                { flexDirection: 'column', flex: 1 },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{ gap: 4 }}>
                  <Text style={styles.boxTitle}>Profile Completion</Text>
                </View>
                <Text style={styles.boxTitle}>70%</Text>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar} />
              </View>
              <Text style={styles.boxSubHead}>(2/3 Verify Email)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {!kyc && (
          <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
            <TouchableOpacity
              style={styles.centeredButton}
              onPress={onPressKYC}>
              <Text
                style={{
                  color: theme === 'light' ? 'green' : 'yellowgreen',
                  fontWeight: '600',
                  fontSize: 17,
                  textAlign: 'center',
                }}>
                Verify KYC
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 20,
              fontWeight: '500',
              marginVertical: 20,
            }}>
            App Settings
          </Text>
          <View
            style={[
              styles.group,
              { backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK },
            ]}>
            <TouchableOpacity
              style={styles.notiItem}
              onPress={() => {
                props.navigation.navigate('personalInfo');
              }}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Personal Info
                </Text>
              </View>

              <MaterialIcons name="navigate-next" size={30} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.notiItem}
              onPress={() => {
                props.navigation.navigate('upgradePlan');
              }}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Account Type
                </Text>
              </View>

              <MaterialIcons name="navigate-next" size={30} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.notiItem}
              onPress={() => {
                props.navigation.navigate('securitySettings');
              }}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Security Settings
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={30} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.notiItem}
              onPress={() => {
                if (setShowQR) setShowQR(true);
              }}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Show QR Code
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={30} color={'gray'} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontSize: 20,
              fontWeight: '500',
              marginVertical: 20,
            }}>
            General Information
          </Text>
          <View
            style={[
              styles.group,
              { backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK },
            ]}>
            <TouchableOpacity style={styles.notiItem}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Help Center
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={30} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notiItem}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Terms and Conditions
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={30} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notiItem}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Privacy Policy
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={30} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notiItem} onPress={onPressLogOut}>
              <View>
                <Text
                  style={[
                    styles.notiMessage,
                    { color: theme === 'light' ? 'black' : 'white' },
                  ]}>
                  Logout
                </Text>
              </View>
              <MaterialIcons name="logout" size={25} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 250 }} />
      </ScrollView>
      <BottomBar {...props} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  centeredButton: {
    borderColor: 'gainsboro',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
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
  titleBarStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: BUTTON_LIGHT,
    paddingVertical: 20,
  },
  actionButtonIcons: {
    height: 60,
    width: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionBox: {
    backgroundColor: 'rgba(255,255,255)',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 30,
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
    height: 10,
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
  button: {
    flex: 1,
    borderRadius: 5,
  },
  graphBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginBottom: 25,
    gap: 10,
    marginHorizontal: 20,
  },
  notiMessage: {
    fontSize: 17,
    fontWeight: '400',
    opacity: 0.8,
  },
  notiDateTime: {
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.4,
  },
  notiItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
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
});
