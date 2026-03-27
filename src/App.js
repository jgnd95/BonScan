// Importeert de StatusBar component om de systeembalk (tijd, batterij etc.) te beheren.
import { StatusBar } from 'expo-status-bar';
// Importeert StyleSheet voor styling en View als basis layout-container.
import { StyleSheet, View } from 'react-native';
// Importeert NavigationContainer, de wrapper die navigatie mogelijk maakt in de app.
import { NavigationContainer } from '@react-navigation/native';
// Importeert SafeAreaProvider zodat content niet achter notch/statusbar verdwijnt.
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importeert de Header component (logo + settings knop bovenaan).
import Header from './components/Header';
// Importeert de TabNavigator met de bottom tabs (Dashboard, Scan, Bonnetjes).
import TabNavigator from './navigation/TabNavigator';

// Hoofdfunctie van de app, dit is het startpunt dat alles rendert.
export default function App() {
  return (
    // SafeAreaProvider zorgt dat alle children veilige schermranden kennen.
    <SafeAreaProvider>
      {/* NavigationContainer beheert de navigatie-state van de hele app. */}
      <NavigationContainer>
        {/* Hoofd-container View die het volledige scherm vult. */}
        <View style={styles.container}>
          {/* Toont de header met logo en settings icoon. */}
          <Header />
          {/* Toont de tab navigatie met de drie schermen. */}
          <TabNavigator />
          {/* Past de statusbar automatisch aan op licht/donker thema. */}
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// StyleSheet.create maakt een geoptimaliseerd stylesheet object aan.
const styles = StyleSheet.create({
  // Container style: vult het hele scherm met een lichtgrijze achtergrond.
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
});
