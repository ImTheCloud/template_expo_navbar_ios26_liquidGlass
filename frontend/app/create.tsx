import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function CreateScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [title, setTitle] = useState('');

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? '#1c1c1e' : '#fff' }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          Créer
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? '#a9a9a9' : '#666' }]}>
          Lancez quelque chose de nouveau
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: isDark ? '#2c2c2e' : '#f5f5f5' }]}>
        <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>
          Titre
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDark ? '#1c1c1e' : '#fff',
              color: isDark ? '#fff' : '#000',
              borderColor: isDark ? '#404040' : '#ddd',
            },
          ]}
          placeholder="Entrez un titre"
          placeholderTextColor={isDark ? '#666' : '#999'}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={[styles.card, { backgroundColor: isDark ? '#2c2c2e' : '#f5f5f5' }]}>
        <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>
          Description
        </Text>
        <TextInput
          style={[
            styles.input,
            styles.textarea,
            {
              backgroundColor: isDark ? '#1c1c1e' : '#fff',
              color: isDark ? '#fff' : '#000',
              borderColor: isDark ? '#404040' : '#ddd',
            },
          ]}
          placeholder="Décrivez votre idée..."
          placeholderTextColor={isDark ? '#666' : '#999'}
          multiline
          numberOfLines={5}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007AFF' }]}
      >
        <Text style={styles.buttonText}>Créer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isDark ? '#404040' : '#e5e5ea' }]}
      >
        <Text style={[styles.buttonText, { color: isDark ? '#fff' : '#000' }]}>
          Annuler
        </Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});