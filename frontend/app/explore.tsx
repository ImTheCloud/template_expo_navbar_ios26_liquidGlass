import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const categories = [
    { emoji: '📸', title: 'Photos', desc: 'Galerie de photos captivantes' },
    { emoji: '🎵', title: 'Musique', desc: 'Découvrez de nouveaux artistes' },
    { emoji: '🎬', title: 'Vidéos', desc: 'Contenu vidéo en tendance' },
    { emoji: '📚', title: 'Articles', desc: 'Lectures intéressantes' },
    { emoji: '🎨', title: 'Design', desc: 'Inspirations visuelles' },
    { emoji: '🌍', title: 'Voyages', desc: 'Destinations recommandées' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#fff' }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          Découvrir
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? '#a9a9a9' : '#666' }]}>
          Explorez le contenu tendance
        </Text>
      </View>

      <View style={styles.grid}>
        {categories.map((category, index) => (
          <View
            key={index}
            style={[styles.categoryCard, { backgroundColor: isDark ? '#2c2c2e' : '#f5f5f5' }]}
          >
            <Text style={styles.emoji}>{category.emoji}</Text>
            <Text style={[styles.categoryTitle, { color: isDark ? '#fff' : '#000' }]}>
              {category.title}
            </Text>
            <Text style={[styles.categoryDesc, { color: isDark ? '#a9a9a9' : '#666' }]}>
              {category.desc}
            </Text>
          </View>
        ))}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  categoryDesc: {
    fontSize: 12,
    textAlign: 'center',
  },
});