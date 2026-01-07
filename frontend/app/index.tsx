import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#fff' }]} 
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          Bienvenue
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? '#a9a9a9' : '#666' }]}>
          Découvrez notre application mobile
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: isDark ? '#2c2c2e' : '#f5f5f5' }]}>
        <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#000' }]}>
          🏠 Accueil
        </Text>
        <Text style={[styles.cardText, { color: isDark ? '#a9a9a9' : '#666' }]}>
          Voici votre écran d&apos;accueil avec la navbar native liquidGlass.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: isDark ? '#2c2c2e' : '#f5f5f5' }]}>
        <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#000' }]}>
          ✨ Caractéristiques
        </Text>
        <Text style={[styles.cardText, { color: isDark ? '#a9a9a9' : '#666' }]}>
          • Navigation native iOS et Android
          • Design liquidGlass automatique
          • 5 onglets principaux
          • Support du mode sombre
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: isDark ? '#2c2c2e' : '#f5f5f5' }]}>
        <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#000' }]}>
          📱 Explorez
        </Text>
        <Text style={[styles.cardText, { color: isDark ? '#a9a9a9' : '#666' }]}>
          Naviguez entre les différents onglets pour découvrir toutes les
          fonctionnalités de l&apos;application.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
});