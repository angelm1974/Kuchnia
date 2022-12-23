import { View, Text, StyleSheet, Image } from 'react-native';

export function MealItem({ title, imageUrl, duration, isGlutenFree, isVegan, isVegetarian, isLactoseFree }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.details}>
        <Text>Czas przygotowania: {duration}m</Text>
        <Text>Gluten Free: {String(isGlutenFree)}</Text>
        <Text>Vegan: {String(isVegan)}</Text>
        <Text>Vegetarian: {String(isVegetarian)}</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: 'white',
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  details: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  }

});
