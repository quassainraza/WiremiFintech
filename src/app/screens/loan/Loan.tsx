import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import TabItem from '@/shared/TabItem';
import { Image } from 'react-native';
import { APP_MAX_WIDTH } from '@/constants/Theme';
import { AreaChart } from 'react-native-svg-charts';
import { curveCardinal } from 'd3-shape';
import { Button } from 'react-native-paper';
import BottomBar from '@/shared/BottomBar';
import BottomSheet from '@/shared/BottomSheet';
import SendMoney from '@/shared/sheets/SendMoney';
const Loan = (props: any) => {
  const theme = useTheme();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onPressBack = () => {
    props.navigation.goBack();
  };
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK,
        minHeight: '100%',
      }}>
      <Navigator
        screenListeners={{
          state: (e: any) => {
            if (e?.data && e?.data?.state)
              setActiveTabIndex(e?.data?.state?.index);
          },
        }}>
        <Screen
          name="existingLoan"
          options={{ title: 'Existing Loan' }}
          component={ExistingLoan}
        />
        <Screen
          name="requestLoan"
          options={{ title: 'Request Loan' }}
          component={RequestLoan}
        />
      </Navigator>
      <BottomBar {...props} />
    </SafeAreaView>
  );
};

function ExistingLoan() {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK,
        minHeight: '100%',
        padding: 10,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: theme === 'light' ? 'gray' : 'gainsboro',
          padding: 15,
          marginVertical: 30,
          borderRadius: 15,
          gap: 10,
        }}>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Total Loaned Amount
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $200.00
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Amount Paid
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $97
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Interest Rate
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $2%
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Interest Amount
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $50
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Duration in Months
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            10
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Time left
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            2 months
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Months forefeited
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            3
          </Text>
        </View>
      </View>
    </View>
  );
}

function RequestLoan() {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK,
        minHeight: '100%',
        padding: 10,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: theme === 'light' ? 'gray' : 'gainsboro',
          padding: 15,
          marginVertical: 30,
          borderRadius: 15,
          gap: 10,
        }}>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Amount Eligible for
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $10,000
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Duration payment in months
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            6 months
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Monthly payment amount
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $500
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Interest rate
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            2%
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Processing fee
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $200
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Collateral
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            NA
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Total Recievable
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $9010
          </Text>
        </View>
        <View style={styles.tableItem}>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 17,
            }}>
            Total Payable
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            $13,000
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <Button
            mode="elevated"
            onPress={() => {}}
            textColor="white"
            style={styles.button}
            labelStyle={{ padding: 5 }}
            buttonColor={BUTTON_LIGHT}>
            REQUEST NOW
          </Button>
        </View>
      </View>
    </View>
  );
}

export default Loan;

const styles = StyleSheet.create({
  tableItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  pageContainer: {
    marginTop: 30,
    minWidth: APP_MAX_WIDTH,
    paddingHorizontal: 20,
    gap: 10,
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  businessLogo: {
    height: 70,
    width: 70,
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 50,
    borderColor: 'gainsboro',
  },
  bizTitle: {
    fontSize: 20,
  },
  bizSubTitle: {
    fontSize: 15,
    opacity: 0.5,
  },
  button: {
    flex: 1,
    borderRadius: 5,
  },
});
