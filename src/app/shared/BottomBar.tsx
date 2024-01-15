import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { BottomTabContext } from '@/contexts/BottomTabContext';

const BottomBar = (props: any) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useContext(BottomTabContext);

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 0,
          position: 'absolute',
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            borderTopColor: 'gainsboro',
            borderTopWidth: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (setActiveTab) setActiveTab('home');
              props.navigation.navigate('home');
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={activeTab === 'home' ? 'home' : 'home-outline'}
              color={BUTTON_LIGHT}
              size={25}
            />
            <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (setActiveTab) setActiveTab('explore');
              props.navigation.navigate('explore');
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={
                activeTab === 'explore' ? 'add-circle' : 'add-circle-outline'
              }
              color={BUTTON_LIGHT}
              size={25}
            />
            <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (setActiveTab) setActiveTab('trends');
              props.navigation.navigate('trends');
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={
                activeTab === 'trends' ? 'stats-chart' : 'stats-chart-outline'
              }
              color={BUTTON_LIGHT}
              size={25}
            />
            <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Trends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (setActiveTab) setActiveTab('profile');
              props.navigation.navigate('profile');
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={activeTab === 'profile' ? 'person' : 'person-outline'}
              color={BUTTON_LIGHT}
              size={25}
            />
            <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BottomBar;
