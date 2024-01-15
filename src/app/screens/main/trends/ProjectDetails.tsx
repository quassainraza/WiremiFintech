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
import { LineChart } from 'react-native-gifted-charts';

const ProjectDetails = (props: any) => {
  const theme = useTheme();
  const TABS = [
    'Amount to be raised',
    'Amount already raised',
    'Min Investment',
    'Growth Prospects',
  ];
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
        }}
        tabBar={(props: MaterialTopTabBarProps) => {
          return (
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingTop: 10,
                }}>
                {TABS.map((tab, index) => (
                  <TabItem
                    isActive={index === activeTabIndex}
                    key={index}
                    title={tab}
                    onPress={() => {
                      setActiveTabIndex(index);
                      props.navigation.navigate(tab);
                    }}
                  />
                ))}
              </ScrollView>
            </View>
          );
        }}>
        {TABS.map(screen => (
          <Screen
            key={screen}
            options={{ title: screen }}
            name={screen}
            component={ProjectDetailsItemsPage}
          />
        ))}
      </Navigator>
      <BottomBar {...props} />
    </SafeAreaView>
  );
};

export default ProjectDetails;

export const ProjectDetailsItemsPage = (props: any) => {
  const theme = useTheme();
  const [data, setData] = useState<number[]>([
    0, 71, 80, 58, 70, 21, 43, 55, 50, 75, 55, 10,
  ]);
  const [isSendingPayment, setIsSendingPayment] = useState(false);

  const onClickInvestNow = () => {
    setIsSendingPayment(true);
  };

  return (
    <View
      style={{
        backgroundColor: theme === 'light' ? '#FBFCFF' : BG_DARK,
        minHeight: '100%',
      }}>
      <ScrollView>
        <View style={styles.pageContainer}>
          <View style={styles.pageHeader}>
            <Image
              style={styles.businessLogo}
              source={{
                uri: 'https://assets.materialup.com/uploads/01d7570f-01ca-4e3a-8dc1-b8a16864f916/preview.jpg',
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  { color: theme === 'light' ? 'black' : 'white' },
                  styles.bizTitle,
                ]}>
                Solutionave Corp.
              </Text>
              <Text
                style={[
                  { color: theme === 'light' ? 'black' : 'white' },
                  styles.bizSubTitle,
                ]}>
                Your technology partner
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text
                style={{
                  color: theme === 'light' ? 'black' : 'white',
                  fontWeight: '600',
                  fontSize: 17,
                }}>
                $430.00
              </Text>
              <Text
                style={[
                  {
                    color: theme === 'light' ? 'green' : 'yellow',
                    fontWeight: '500',
                    fontSize: 13,
                  },
                ]}>
                +3.50 (5%)
              </Text>
            </View>
          </View>
          <Text
            style={{ color: BUTTON_LIGHT, fontSize: 18, fontWeight: '600' }}>
            Description
          </Text>
          <Text
            style={{
              color: theme === 'light' ? 'gray' : 'white',
              fontSize: 15,
            }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using content here.
          </Text>
          <Text
            style={{
              color: BUTTON_LIGHT,
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 40,
            }}>
            Performance
          </Text>
        </View>

        <LineChart
          width={Dimensions.get('screen').width}
          areaChart
          hideDataPoints
          isAnimated
          animationDuration={1200}
          startFillColor={BUTTON_LIGHT}
          startOpacity={1}
          endOpacity={0.3}
          initialSpacing={0}
          data={[
            { value: 0 },
            { value: 20 },
            { value: 18 },
            { value: 40 },
            { value: 36 },
            { value: 10 },
            { value: 90 },
            { value: 40 },
            { value: 36 },
            { value: 10 },
            { value: 60 },
            { value: 60 },
            { value: 36 },
            { value: 18 },
            { value: 50 },
          ]}
          spacing={30}
          thickness={5}
          hideRules
          hideYAxisText
          yAxisColor="rgba(0,0,0,0)"
          showVerticalLines
          verticalLinesColor="rgba(14,164,164,0.2)"
          xAxisColor={BUTTON_LIGHT}
          color={BUTTON_LIGHT}
          adjustToWidth
        />

        <View
          style={{
            flexDirection: 'row',
            padding: 30,
            alignSelf: 'center',
            maxWidth: 400,
          }}>
          <Button
            mode="elevated"
            onPress={onClickInvestNow}
            textColor="white"
            style={styles.button}
            labelStyle={{ padding: 5 }}
            buttonColor={BUTTON_LIGHT}>
            INVEST NOW
          </Button>
        </View>
        <View style={{ height: 150 }} />
      </ScrollView>
      <BottomSheet
        isOpen={isSendingPayment}
        setIsOpen={setIsSendingPayment}
        extras={props}>
        <SendMoney />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
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
