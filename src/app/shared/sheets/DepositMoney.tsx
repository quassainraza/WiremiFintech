import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { BUTTON_LIGHT } from '@/constants/Colors';
import { Button, TextInput } from 'react-native-paper';
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
import useTheme from '@/hooks/useTheme';

const DepositMoney = () => {
  const [sendMoneyMethod, setSendMoneyMethod] = useState('mobile');
  const theme = useTheme();
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
          Add Funds
        </Text>
        <TextInput
          mode="outlined"
          label={'Enter Amount'}
          outlineColor={BUTTON_LIGHT}
          activeOutlineColor={BUTTON_LIGHT}
          keyboardType="number-pad"
        />
        <Select
          defaultValue="Mobile Money"
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
              <SelectItem label="Mobile Money" value="mobile" />
              <SelectItem label="Bank Wire" value="bankwire" />
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
        {sendMoneyMethod === 'bankwire' && (
          <>
            <TextInput
              mode="outlined"
              label={'Account Holder Name'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              mode="outlined"
              label={'Account Number'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              mode="outlined"
              label={'Swift Code'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              mode="outlined"
              label={'Bank Name'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
            <TextInput
              mode="outlined"
              label={'Branch Name'}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
          </>
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
      </View>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default DepositMoney;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
