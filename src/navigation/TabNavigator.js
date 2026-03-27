import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import DashboardScreen from '../screens/DashboardScreen';
import ScanScreen from '../screens/ScanScreen';
import BonnetjesScreen from '../screens/BonnetjesScreen';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const isScan = route.name === 'Scan';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (isScan) {
          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={styles.scanButtonWrapper}>
              <View style={styles.scanButton}>
                <Ionicons name="camera" size={28} color="#fff" />
              </View>
              <Text style={[styles.label, { color: isFocused ? '#4A7CF7' : '#999' }]}>Scan</Text>
            </TouchableOpacity>
          );
        }

        const isBonnetjes = route.name === 'Bonnetjes';

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.tab}>
            <View style={[styles.iconContainer, isFocused && styles.iconContainerActive]}>
              {isBonnetjes ? (
                <MaterialCommunityIcons name="receipt" size={22} color={isFocused ? '#4A7CF7' : '#999'} />
              ) : (
                <Ionicons name="grid-outline" size={22} color={isFocused ? '#4A7CF7' : '#999'} />
              )}
            </View>
            <Text style={[styles.label, { color: isFocused ? '#4A7CF7' : '#999' }]}>
              {isBonnetjes ? 'Bonnetjes' : 'Dashboard'}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Bonnetjes" component={BonnetjesScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom: 30,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EDEDEF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerActive: {
    backgroundColor: '#EEF2FF',
  },
  label: {
    fontSize: 11,
    marginTop: 2,
    fontWeight: '500',
  },
  scanButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: -30,
  },
  scanButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#4A7CF7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4A7CF7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
