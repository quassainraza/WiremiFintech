import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
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
import { Button, TextInput } from 'react-native-paper';
import { SavingsContext } from '@/contexts/SavingContext';
import ProgressBox from '@/shared/ProgressBox';
import BottomSheet from '@/shared/BottomSheet';

const DailySavings = (props: any) => {
  const theme = useTheme();
  const [addingSavings, setAddingSavings] = useState(false);
  const [savings, setSavings] = useContext(SavingsContext);

  const [savingName, setSavingName] = useState('');
  const [savingDate, setSavingDate] = useState('');
  const [savingAmount, setSavingAmount] = useState('');

  const onPressBack = () => {
    props.navigation.goBack();
  };
  const onPressSaving = () => {};
  const onPressAdd = () => {
    setAddingSavings(true);
  };

  const onAddSavings = () => {
    if (setSavings && savings !== undefined)
      setSavings([
        ...savings,
        {
          title: savingName,
          totalAmount: parseFloat(savingAmount),
          amount: parseFloat(savingAmount) / 2,
          subtitle: new Date().toDateString(),
        },
      ]);
    setSavingName('');
    setSavingDate('');
    setSavingAmount('');
    setAddingSavings(false);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        paddingTop: 10,
      }}>
      {/* <ScrollView contentContainerStyle={{ minHeight: '100%', paddingTop: 15 }}> */}
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
          Daily Savings
        </Text>
        <TouchableOpacity onPress={onPressAdd}>
          <Ionicons
            name="add"
            size={25}
            color={theme === 'light' ? 'black' : 'white'}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ minHeight: '100%' }}
        data={savings}
        renderItem={info => (
          <View>
            <ProgressBox
              amount={info.item.amount}
              totalAmount={info.item.totalAmount}
              onPressBox={() => {}}
              subtitle={info.item.subtitle}
              title={info.item.title}
            />
          </View>
        )}
        keyExtractor={info => `${info.title}${info.amount}${info.subtitle}`}
      />
      {/* </ScrollView> */}

      <BottomSheet
        extras={props}
        isOpen={addingSavings}
        setIsOpen={setAddingSavings}>
        <ScrollView
          contentContainerStyle={{ padding: 20, width: '100%', gap: 15 }}>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <TextInput
              value={savingName}
              onChangeText={e => setSavingName(e)}
              mode="outlined"
              label={'Saving Instance'}
              style={{ flex: 1 }}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <TextInput
              value={savingAmount}
              onChangeText={e => setSavingAmount(e)}
              mode="outlined"
              label={'Amount'}
              keyboardType="number-pad"
              style={{ flex: 1 }}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <TextInput
              mode="outlined"
              label={'Duration'}
              keyboardType="number-pad"
              style={{ flex: 1 }}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <TextInput
              mode="outlined"
              label={'Interval'}
              keyboardType="number-pad"
              style={{ flex: 1 }}
              outlineColor={BUTTON_LIGHT}
              activeOutlineColor={BUTTON_LIGHT}
            />
          </View>
          <Select
            onValueChange={e => {
              // setSendMoneyMethod(e);
            }}>
            <SelectTrigger variant="outline" size="lg">
              <SelectInput
                placeholder="Select savings type"
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
                <SelectItem label="Recurrent" value="recurrent" />
                <SelectItem label="Blocked Savings" value="mobile" />
                <SelectItem label="Regular" value="regular" />
                <View style={{ height: 50 }} />
              </SelectContent>
            </SelectPortal>
          </Select>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Button
              mode="elevated"
              onPress={onAddSavings}
              textColor="white"
              style={styles.button}
              labelStyle={{ padding: 5 }}
              buttonColor={BUTTON_LIGHT}>
              Add Savings
            </Button>
          </View>
          <View style={{ height: 20 }} />
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default DailySavings;

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
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
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
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
