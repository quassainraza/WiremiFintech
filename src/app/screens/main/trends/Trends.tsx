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
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import { AccountDetailsContext } from '@/contexts/AccountContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-paper';
import {
  ChevronDownIcon,
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
import { Icon } from '@gluestack-ui/themed';
import BottomBar from '@/shared/BottomBar';

const Trends = (props: any) => {
  const theme = useTheme();
  const [accountData, setAccountData] = useContext(AccountDetailsContext);
  const onPressBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%', paddingTop: 15 }}>
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
            Trends
          </Text>
          <View style={{ width: 25 }} />
        </View>
        <View style={{ paddingHorizontal: 20, marginVertical: 30 }}>
          <TextInput
            outlineColor={BUTTON_LIGHT}
            activeOutlineColor={BUTTON_DARK}
            textAlign="center"
            label={'Search here'}
            style={{ marginBottom: 30 }}
            maxLength={1}
            mode="outlined"
          />
          <Select
            onValueChange={e => {
              // setSendMoneyMethod(e);
            }}>
            <SelectTrigger variant="outline" size="lg">
              <SelectInput
                placeholder="Select Investment Type"
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
                <SelectItem label="Type A" value="Type A" />
                <SelectItem label="Type B" value="Type B" />
                <SelectItem label="Type C" value="Type C" />
                <SelectItem label="Type D" value="Type D" />
                <View style={{ height: 50 }} />
              </SelectContent>
            </SelectPortal>
          </Select>
          <View style={{ height: 30 }} />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('projectDetails')}
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <View
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 10,
              }}>
              <AntDesign size={30} name="dropbox" color={'white'} />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Dropbox
            </Text>
            <View style={{ alignItems: 'flex-end', gap: 5 }}>
              <Text
                style={{
                  color: theme === 'light' ? 'green' : 'lightgreen',
                  fontSize: 17,
                }}>
                $402
              </Text>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 13,
                  opacity: 0.5,
                }}>
                10 Oct 18
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('projectDetails')}
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <View
              style={{
                backgroundColor: 'yellow',
                padding: 10,
                borderRadius: 10,
              }}>
              <MaterialIcons size={30} name="paypal" color={'black'} />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Paypal
            </Text>
            <View style={{ alignItems: 'flex-end', gap: 5 }}>
              <Text style={{ color: 'red', fontSize: 17 }}>- $402</Text>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 13,
                  opacity: 0.5,
                }}>
                10 Oct 18
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('projectDetails')}
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <View
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 10,
              }}>
              <AntDesign size={30} name="dropbox" color={'white'} />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Dropbox
            </Text>
            <View style={{ alignItems: 'flex-end', gap: 5 }}>
              <Text
                style={{
                  color: theme === 'light' ? 'green' : 'lightgreen',
                  fontSize: 17,
                }}>
                $402
              </Text>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 13,
                  opacity: 0.5,
                }}>
                10 Oct 18
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('projectDetails')}
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <View
              style={{
                backgroundColor: 'yellow',
                padding: 10,
                borderRadius: 10,
              }}>
              <MaterialIcons size={30} name="paypal" color={'black'} />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Dropbox
            </Text>
            <View style={{ alignItems: 'flex-end', gap: 5 }}>
              <Text style={{ color: 'red', fontSize: 17 }}>- $402</Text>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 13,
                  opacity: 0.5,
                }}>
                10 Oct 18
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('projectDetails')}
            style={[
              styles.shadow,
              styles.transactions,
              { backgroundColor: theme === 'light' ? 'white' : BUTTON_DARK },
            ]}>
            <View
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 10,
              }}>
              <AntDesign size={30} name="dropbox" color={'white'} />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Dropbox
            </Text>
            <View style={{ alignItems: 'flex-end', gap: 5 }}>
              <Text
                style={{
                  color: theme === 'light' ? 'green' : 'lightgreen',
                  fontSize: 17,
                }}>
                $402
              </Text>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontSize: 13,
                  opacity: 0.5,
                }}>
                10 Oct 18
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <BottomBar {...props} />
    </SafeAreaView>
  );
};

export default Trends;

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
});
