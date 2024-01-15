import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Circle } from '@/shared/SelectorMenu';
import { AccountTypeContext } from '@/contexts/AccountContext';

const UpgradeAccount = (props: any) => {
  const theme = useTheme();

  const onPressBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK,
        paddingTop: 10,
      }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
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
            Updgrade Account
          </Text>
          <View style={{ width: 25 }} />
        </View>
        <View style={{ paddingHorizontal: 20, marginVertical: 20, gap: 20 }}>
          <PlanItem
            index={0}
            title={'Premium plan $15/Year'}
            subtitle={
              'It is a long established fact that a reader will be distracted by the readable.'
            }
          />
          <PlanItem
            index={1}
            title={'Student plan $12/Year'}
            subtitle={
              'It is a long established fact that a reader will be distracted by the readable.'
            }
          />
          <PlanItem
            index={2}
            title={'Business plan $25/Year'}
            subtitle={
              'It is a long established fact that a reader will be distracted by the readable.'
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpgradeAccount;

const PlanItem = ({
  active = false,
  title,
  subtitle,
  index = 0,
}: {
  active?: boolean;
  title?: string;
  subtitle: string;
  index: number;
}) => {
  const theme = useTheme();
  const [accountType, setAccountType] = useContext(AccountTypeContext);

  return (
    <TouchableOpacity
      onPress={() => {
        if (setAccountType) setAccountType(index);
      }}
      style={{
        borderWidth: 1,
        borderColor: accountType === index ? BUTTON_LIGHT : 'gainsboro',
        padding: 15,
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}>
        <Circle filled={accountType === index} />
        <View style={{ flex: 1, gap: 5 }}>
          <Text
            style={{
              fontSize: 17,
              color:
                accountType === index
                  ? BUTTON_LIGHT
                  : theme === 'light'
                  ? 'black'
                  : 'white',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: theme === 'light' ? 'black' : 'white',
            }}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
});
