import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BUTTON_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@gluestack-ui/themed';
import { Button } from 'react-native-paper';

const Swap = (props: any) => {
  const theme = useTheme();

  const onPressBack = () => {
    props.navigation.goBack();
  };

  const onPressNotificaitons = () => {
    props.navigation.navigate('notifications');
  };

  const onSwap = () => {
    if (props?.setIsSwapping) {
      props.setIsSwapping(false);
    } else {
      props.navigation.goBack();
    }
  };

  return (
    <ScrollView style={{ width: '100%' }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
          gap: 30,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 14,
            color: theme === 'light' ? 'black' : 'white',
          }}>
          Balance: $50012
        </Text>
        <Select
          onValueChange={e => {
            // setSendMoneyMethod(e);
          }}>
          <SelectTrigger variant="outline" size="lg">
            <SelectInput
              placeholder="Select Currency"
              color={theme === 'light' ? 'gray' : 'white'}
            />
            <SelectIcon mr="$3">
              <Icon
                as={ChevronDownIcon}
                color={theme === 'light' ? 'gray' : 'white'}
              />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="USD" value="usd" />
              <SelectItem label="CAD" value="CAD" />
              <SelectItem label="AED" value="aed" />
              <SelectItem label="PKR" value="PKR" />
              <View style={{ height: 50 }} />
            </SelectContent>
          </SelectPortal>
        </Select>
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: theme === 'light' ? BUTTON_LIGHT : BUTTON_DARK,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            alignSelf: 'center',
          }}>
          <AntDesign name="swap" size={30} color={'white'} />
        </View>
        <Select
          onValueChange={e => {
            // setSendMoneyMethod(e);
          }}>
          <SelectTrigger variant="outline" size="lg">
            <SelectInput
              placeholder="Select Currency"
              color={theme === 'light' ? 'gray' : 'white'}
            />
            <SelectIcon mr="$3">
              <Icon
                as={ChevronDownIcon}
                color={theme === 'light' ? 'gray' : 'white'}
              />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="USD" value="usd" />
              <SelectItem label="CAD" value="CAD" />
              <SelectItem label="AED" value="aed" />
              <SelectItem label="PKR" value="PKR" />
              <View style={{ height: 50 }} />
            </SelectContent>
          </SelectPortal>
        </Select>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 14,
            color: theme === 'light' ? 'black' : 'white',
          }}>
          Commision rate 0.3%
        </Text>
        <View style={{ flex: 1 }} />
        <View style={{ flexDirection: 'row' }}>
          <Button
            mode="elevated"
            onPress={onSwap}
            textColor="white"
            style={styles.button}
            labelStyle={{ padding: 5 }}
            buttonColor={BUTTON_LIGHT}>
            SWAP CURRENCY
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

// </SafeAreaView>
export default Swap;

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
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
