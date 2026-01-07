import { Platform, DynamicColorIOS } from 'react-native';
import { Tabs } from 'expo-router';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { StatusBar } from 'expo-status-bar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // ---------------------------------------------------------
  // VERSION IOS : On utilise NativeTabs avec SF Symbols
  // ---------------------------------------------------------
  if (Platform.OS === 'ios') {
    return (
        <>
          <NativeTabs
              labelStyle={{
                // On peut utiliser DynamicColorIOS ici car on est sûr d'être sur iOS
                color: DynamicColorIOS({ dark: 'white', light: 'black' }),
              }}
              tintColor={DynamicColorIOS({ dark: 'white', light: 'black' })}
              barTintColor={DynamicColorIOS({ dark: '#1c1c1e', light: '#f2f2f7' })}
          >
            <NativeTabs.Trigger name="index">
              <Label>Accueil</Label>
              <Icon sf={{ default: 'house', selected: 'house.fill' }} />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="explore">
              <Label>Découvrir</Label>
              <Icon sf={{ default: 'magnifyingglass', selected: 'magnifyingglass' }} />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="create">
              <Label>Créer</Label>
              <Icon sf={{ default: 'plus', selected: 'plus.circle.fill' }} />
            </NativeTabs.Trigger>
          </NativeTabs>
          <StatusBar style="auto" />
        </>
    );
  }

  // ---------------------------------------------------------
  // VERSION ANDROID : On utilise Tabs standard avec MaterialIcons
  // ---------------------------------------------------------
  return (
      <>
        <Tabs
            screenOptions={{
              tabBarActiveTintColor: isDark ? '#fff' : '#000', // Couleur active (comme iOS)
              tabBarInactiveTintColor: isDark ? '#888' : '#888',
              tabBarStyle: {
                backgroundColor: isDark ? '#1c1c1e' : '#f2f2f7', // Fond style iOS
                borderTopWidth: 0,
                elevation: 0,
              },
              headerShown: false,
            }}
        >
          <Tabs.Screen
              name="index"
              options={{
                title: 'Accueil',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="home" size={28} color={color} />
                ),
              }}
          />

          <Tabs.Screen
              name="explore"
              options={{
                title: 'Découvrir',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="search" size={28} color={color} />
                ),
              }}
          />

          <Tabs.Screen
              name="create"
              options={{
                title: 'Créer',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="add-circle" size={28} color={color} />
                ),
              }}
          />
        </Tabs>
        <StatusBar style="auto" />
      </>
  );
}