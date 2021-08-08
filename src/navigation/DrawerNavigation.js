import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigator} from './MainStackNavigator';

import { TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from '../components/Icon';
import OnTheWayScreen from '../screens/OnTheWayScreen';
import DrawerSideBarMenu from '../navigation/DrawerSideBarMenu';

import Logout from "./Logout";
import SettingScreen from "../screens/SettingScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {

  return (
    <Drawer.Navigator
      drawerStyle={{width: '80%'}}
      drawerContentOptions={{
        activeTintColor: '#f7783d',
        inactiveBackgroundColor: 'white',
        itemStyle: {marginVertical: 0.6, width: '100%'},
      }}
      drawerContent={props => <DrawerSideBarMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon icon={require('../assets/icons/home.png')} />
          ),
        }}
      />
      {/*<Drawer.Screen*/}
      {/*  name="My orders"*/}
      {/*  component={MyOrderScreen}*/}
      {/*  options={{*/}
      {/*    drawerIcon: ({focused, size}) => (*/}
      {/*      <Icon icon={require('../assets/icons/checklist.png')} />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Drawer.Screen*/}
      {/*  name="Settings"*/}
      {/*  component={SettingScreen}*/}
      {/*  options={{*/}
      {/*    drawerIcon: ({focused, size}) => (*/}
      {/*      <Icon icon={require('../assets/icons/setting.png')} />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
      <Drawer.Screen

        name="Logout"

        component={Logout}
        options={{

          drawerIcon: ({focused, size}) => (

            <Icon icon={require('../assets/icons/logout.png')}  />

          ),
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
