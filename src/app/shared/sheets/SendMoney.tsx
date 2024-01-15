import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  ChevronDownIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectInput,
  Icon,
} from '@gluestack-ui/themed';
import { Button, TextInput } from 'react-native-paper';
import { BUTTON_LIGHT } from '@/constants/Colors';
import RecentTransactions from '../lists/RecentTransactions';
import useTheme from '@/hooks/useTheme';

const SendMoney = () => {
  const theme = useTheme();
  const [sendMoneyMethod, setSendMoneyMethod] = useState('wiremi');
  const [fromRecentTransactions, setFromRecentTransactions] = useState(1);

  return (
    <ScrollView
      contentContainerStyle={{ width: '100%' }}
      style={{ width: '100%' }}>
      <View style={{ padding: 20, width: '100%', gap: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: theme === 'light' ? 'black' : 'white',
          }}>
          Send Money
        </Text>
        <Select
          defaultValue="Recent Transactions"
          onValueChange={e => {
            setFromRecentTransactions(e === 'Recent Transactions' ? 1 : 0);
          }}>
          <SelectTrigger variant="outline" size="lg">
            <SelectInput
              placeholder="How do you want to send?"
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
              <SelectItem label="Add Details" value="Add yourself" />
              <SelectItem
                label="Recent Transactions"
                value="Recent Transactions"
              />
              <View style={{ height: 50 }} />
            </SelectContent>
          </SelectPortal>
        </Select>

        {!fromRecentTransactions ? (
          <>
            <Select
              defaultValue="wiremi"
              onValueChange={e => {
                setSendMoneyMethod(e);
              }}>
              <SelectTrigger variant="outline" size="lg">
                <SelectInput
                  placeholder="Select option"
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
                  <SelectItem label="Wiremi" value="wiremi" />
                  <SelectItem label="Mobile Money" value="mobile" />
                  <SelectItem label="Cards" value="cards" />
                  <SelectItem
                    label="Crypto (coming soon)"
                    value="crypto"
                    disabled
                  />
                  <View style={{ height: 50 }} />
                </SelectContent>
              </SelectPortal>
            </Select>
            <TextInput
              mode="outlined"
              label={'Enter Amount'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
              keyboardType="number-pad"
            />
            {sendMoneyMethod === 'wiremi' && (
              <TextInput
                mode="outlined"
                label={'To (Wiremi ID)'}
                outlineColor={BUTTON_LIGHT}
                activeOutlineColor={BUTTON_LIGHT}
                keyboardType="number-pad"
              />
            )}
            {sendMoneyMethod === 'mobile' && (
              <TextInput
                mode="outlined"
                label={'Phone Number'}
                outlineColor={BUTTON_LIGHT}
                activeOutlineColor={BUTTON_LIGHT}
                keyboardType="number-pad"
              />
            )}
            {sendMoneyMethod === 'cards' && (
              <>
                <TextInput
                  mode="outlined"
                  label={'Credit Card Number'}
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  keyboardType="number-pad"
                />
                <View style={{ flexDirection: 'row', gap: 15 }}>
                  <TextInput
                    mode="outlined"
                    label={'CVC'}
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    keyboardType="number-pad"
                    style={{ flex: 1 }}
                  />
                  <TextInput
                    mode="outlined"
                    label={'Expirey (MM/YY)'}
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    keyboardType="number-pad"
                    style={{ flex: 1 }}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Button
                    mode="elevated"
                    onPress={() => {}}
                    textColor="white"
                    style={styles.button}
                    labelStyle={{ padding: 5 }}
                    buttonColor={BUTTON_LIGHT}>
                    ADD THIS CARD
                  </Button>
                </View>
              </>
            )}

            <View style={{ flexDirection: 'row' }}>
              <Button
                mode="elevated"
                onPress={() => {}}
                textColor="white"
                style={styles.button}
                labelStyle={{ padding: 5 }}
                buttonColor={BUTTON_LIGHT}>
                Confirm
              </Button>
            </View>
          </>
        ) : (
          <>
            <RecentTransactions />
          </>
        )}
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
